---
layout: post
title:  "Angular3"
date:   2015-06-18 22:40:11
categories: Angular
permalink: /md/angular3/
---

angularJs 进阶
===

`$watch` `$apply` `$digest` `angular context` `dirty checking`

---

####angular context

- 浏览器事件循环

> 浏览器一直等待事件触发，当在页面触发事件（点击等），事件的回调函数便开始在javascript
> 解释器中执行，对dom进行操作，回调函数完成后，页面变出现了变化

- angular 为了扩展浏览器循环会生成 angular context 执行环境

---

####$watch 队列

- 每当我们在view上绑定一个一些东西的时候

> 每一个绑定到了UI上的数据，就会生成一个$watch

```
	app.controller('MainCtrl', function($scope) {
	  $scope.foo = "Foo";
	  $scope.world = "World";
	});
```

```
	app.controller('MainCtrl', function($scope) {
	 Hello, {{ World }}
	});
```
> 上面的例子生成了1个$watch

- $watch是什么时候生成的呢？

> 模板加载完毕时（linking阶段）Angular解释器会寻找每个directive，然后生成每个需要的$watch。

---

####$digest

- 当浏览器接收到可以被angular context处理的事件时, 就会执行$digest循环
- 两个更小的循环组合：
	- evalAsync队列
	- watch队列

过程（`dirty checking`）：
- $digest 遍历 $watch list
- 访问每个$watch 你的值是多少，你变化了吗
- 遍历一遍后，对访问结果进行检查
- 如果发现有至少一个更新过，这个循环就会再次触发，直到所有的$watch都没有变化。

---

```
	app.controller('MainCtrl', function() {
	$scope.name = "Foo";
	$scope.changeFoo = function() {
      $scope.name = "Bar";
	  }
	});
```

```
	{{ name }}
	<button ng-click="changeFoo()">Change the name</button>
```

- 我们按下按钮
- 浏览器接收到一个事件，进入angular context
- $digest循环开始执行，查询每个$watch是否变化。
- 由于监视$scope.name的$watch报告了变化，它会强制再执行一次$digest循环。
- 新的$digest循环没有检测到变化。
- 浏览器拿回控制权，更新与$scope.name新值相应部分的DOM。

> 每一个进入angular context的事件都会执行一个$digest循环

####$apply

- 谁决定什么事件进入angular context，而哪些又不进入呢？$apply！
- 如果当事件触发时，你调用$apply，它会进入angular context，如果没有调用就不会进入。
- Angular做了！点击带有ng-click的元素时，事件就会被封装到一个$apply调用。
- 如果你有一个ng-model="foo"的输入框，然后你敲一个f，事件就会这样调用$apply("foo = 'f';")。

> 为什么我的jQuery不会更新我绑定的东西呢？因为jQuery没有调用$apply，事件没有进入angular context，$digest循环永远没有执行。

```
app.directive('clickable', function() {

return {
  restrict: "E",
  scope: {
    foo: '=',
    bar: '='
  },
  template: '<ul style="background-color: lightblue"><li>{{foo}}</li><li>{{bar}}</li></ul>',
  link: function(scope, element, attrs) {
    element.bind('click', function() {
      scope.foo++;
      scope.bar++;
    });
  }
}

});

app.controller('MainCtrl', function($scope) {
  $scope.foo = 0;
  $scope.bar = 0;
});
```

那我们点击元素的时候会发生什么呢？我们能看到更新吗？答案是否定的。因为点击事件是一个没有封装到$apply里面的常见的事件，这意味着我们会失去我们的计数吗？不会

真正的结果是：$scope确实改变了，但是没有强制$digest循环，监视foo 和bar的$watch没有执行。也就是说如果我们自己执行一次$apply那么这些$watch就会看见这些变化，然后根据需要更新DOM。

```
		element.bind('click', function() {
	  scope.$apply(function() {
	      scope.foo++;
	      scope.bar++;
	  });
	})
```

这样就可以了（手动调用apply）

---

####$watch扩展

- $watch默认是比较两个对象所引用的是否相同

```
app.controller('MainCtrl', function($scope) {
  $scope.user = { name: "Fox" };

  $scope.updated = 0;

  $scope.$watch('user', function(newValue, oldValue) {
    if (newValue === oldValue) { return; }
    $scope.updated++;
  });
});
```

```
app.controller('MainCtrl', function($scope) {
  $scope.user = { name: "Fox" };

  $scope.updated = 0;

  $scope.$watch('user', function(newValue, oldValue) {
    if (newValue === oldValue) { return; }
    $scope.updated++;
  }, true);
});
```

---