---
layout: post
title:  "Angular4"
date:   2015-06-19 22:40:11
categories: Angular
permalink: /md/angular4/
---

Angular学习随记
===

###`指令篇`

---

####什么是指令？

在特定DOM元素上运行的函数，指令可以扩展元素功能，编写属于自己的html标签

---

####如何定义指令？

```
angular.module("name",[]).directive("dname",function(){
	return {}
});
```

两个参数
- name（指令名）
- factory-function（函数）

	这个函数返回一个对象，其中包含指令的全部行为，$compile服务利用这个对象，在dom调用指令时构造行为

---

####restrict
告诉angular该指令在DOM中的声明方式，默认是A

- E（元素）

```
<my-direct> </my-direct>
```

- A（属性）

```
<div my-direct="express"> </div>
```

- C（类名）

```
<div class="my-direct:express"> </div>
```

- M（注释）

```
<--directive:my-directive express-->
```

建议：使用属性声明，便于浏览器兼容

---

####priority（优先级）

默认：0

ngRepeat:1000（内置指令里优先级最高的）

同一个元素上有两个优先级相同的指令，声明在前面的先调用

---

####terminal
- true
- false

这个参数用来告诉Angular停止运行当前元素上比本指令优先级低的指令

当摸个元素上的指令被设置了该参数，就不要用优先级比他低的指令了，因为不会执行

ng-if优先级>ngView

当ng-if为true，ngView会执行，当ng-if为false，ngView就不会执行

---

####template
两种形式：
- 一段HTML文本
- 一个可以接受两个参数的函数（tElement，tAttrs）,并返回一个代表模板的字符串，两个参数的t代表template
第二种在后面会讲到

有时你会见到这种样子

```
<body ng-app="my">
<div haha></div>
	<script type="text/javascript">
		angular.module('my', []).directive("haha",function(){
		return {
			template: '<div>\
				<a>hhhh</a>\
				<h3>sdsdsd</h3>\
				</div>\ '
			}
		});
	</script>
```

每行末尾的反斜杠，是为了让angular正确解析多行字符串，如果不用反斜杠会报错

`实际生产中`

- 更好的选择是使用templateUrl引用外部模板

---

####templateUrl
两种形式：
- 外部html文件路径的字符串
- 一个可以接受（tElement，tAttrs）两个参数的函数，并返回一个外部HTML文件路径的字符串

无论哪种方式，模板的URL都将通过AngularJs内置的安全层，$getTrustedResourceUrl,可以保护模板不会被不信任的源加载

默认情况下，调用指令时会在后台通过Ajax来请求Html模板文件

模板加载是异步的，意味着编译和链接要暂停，等待模板加载完成

模板加载后，angular会将它默认缓存到$templateCache服务中。在实际生产中，可以将模板缓存到一个定义模板的js文件中

就不需要通过XHR来加载模板了，未完待续*（后面讲）

---

####replace
如果设置这个参数，就将值设为true（替换），

设置为false与不使用该参数一样（魔板被当做子元素插入调用指令元素内部）

---

####scope参数

默认值：false

- false（父作用域 = 子作用域）
> 修改子作用域会影响父作用域

- true（父作用域 ! = 子作用域）
> 子作用域继承副作用域，修改子作用域不会影响父作用域

- {} （父作用域 ! = 子作用域）
> 一个全新的独立作用域，不存在父子关系，理解为同级吧

对比指令中link的 $scope和controller的 $scope

---

####绑定策略
目的：让新的作用域可以访问当前本地作用域中的变量

- @

> 将本地作用域同dom属性值进行绑定，指令内部作用域可以使用外部作用域的变量

- =

> 双向绑定

- &

> 从隔离scope中调用父scope中定义的函数，为了能够访问外部scope中定义的函数

```
	<body ng-app="myApp">
	<div ng-controller="haha">
 	<div dir say="hello()"></div>
</div>
  <script>
    angular.module('myApp', [])
    .controller('haha', function($scope) {
      // we can leave it empty, it just needs to be defined
      $scope.hello = function(){
      	console.log("haha");
      }
    })
   
    .directive('dir', function() {
      return {
        restrict: 'A',
	    scope: {
	    	yoyo:'&say'
	    },
	    template:"<button ng-click='yoyo()'>hh</button>"
      }
    })
  </script>

</body>
```
---

```
Scope:{
	some:"need"
},

template:'<h3>{{some}}</h3>',
controller: function($scope){
$scope.some === "need"
}

```
注意：上面的代码是有问题的

- 指令的的Scope变量不是直接在Scope中设置的，而是在`<directive>`标签中设置的，
- 通过Scope配置的关系传递进隔离作用域中，
- scope起类似xml的映射关系作用

```
<div my-directive some-attr="123"></div>

Scope:{
	haha:'@someAttr'
},
template:'<h3>{{haha}}</h3>',
controller: function($scope){
$scope.haha//就可以获取到了
}
```

---

####transclude

- 默认为false
- 如果设置了，必须设置为true
- 用途：指令中嵌入，将指令标签内部的标签或指令嵌入指令内部模板中
- 这样可以将任意内容，作用域传给指令，指令内部可以访问外部指令的作用域，模板也可以访问外部作用域对象
- 用法：ng-transclude

```
<div dir title="123">
        <ul>
            <li>1</li> 
            <li>2</li>
        </ul>
    </div>
        <script>
                 angular.module("mytry",[])
                 .directive("dir",function(){
                    return {
                        restrict:'EA',
                        scope:{
                            title:'@'
                        },
                        transclude:false,
                        template:'<div><h3>{{title}}</h3><p ng-transclude></p></div>'
                    }
                 });
        </script>
```

问题：
- 使用了transclude,控制器无法正常监听数据模型的变化

---

####controller

- 字符串
- 函数

```
angular.module('myApp',[]).directive('myD',function(){
return{

controller:'SomeControll'
}
})

angular.module('myApp',[]).controller('SomeControll',function($scope,$element,$attrs,$transclude){

})

```

- $scope

> 与指令元素相关的当前作用域

- $element

> 当前指令对应的元素

- atts

> 由当前属性组成的对象

```
<div id="s" class="e"></div>

{
id:"s",
class:"e"
}
```

- $trusclude

> 如果你在指令定义中设置 transclude:true，一个新的嵌入的scope会被创建，它原型继承自父scope。 
> 如果你想要你的指令使用隔离的scope，但是它所包含的内容能够在父scope中执行，transclusion也可以帮忙

```
app.directive('outputText', function() {
  return {
    transclude: true,
    scope: {},
    template: '<div ng-transclude></div>'
  };
});
```
```
<div output-text>
  <p>Hello {{name}}</p>//在父作用域里被初始化了
</div>
```

1.ng-transclude指明的是一个插入的位置

2.指令中标签里的元素都会先删除然后被嵌入包含后的内容所替换。

**但是局限出现了**
- ng-transclude只能提供一个统一的插入位置，如果想要改变传入的dom结构，一个ng-transclude是不够的

例如：

```
div ng-controller="Ctrl">
      <pane title="{{title}}">
            <span class="time">time</p>
            <p class="type">{{type}}<p>
            <p class="content">{{text}}<p>
      </pane>
</div>
```
最终要变成

```
<div style="border: 1px solid black;">
    <div style="background-color: gray">我是标题<span class="time">我是时间</span></div>
    <p class="type">我是分类</p>
    <p class="content">我是内容</p>
</div>
```

**于是两种解决方法**

- 使用compile函数的transclude参数

```
app.directive('pane', function() {
    return {
        restrict: 'EA',
        template: '<div style="border: 1px solid black;"><div class="title" style="background-olor: gray">{{title}}</div></div>',
        replace: true,
        transclude: true,
        compile: function(element, attrs, transcludeFn) {
            return function (scope, element, attrs) {
                transcludeFn(scope, function(clone) {
                    var title= element.find('title');
                    var time = clone.find('.time');
                    var type = clone.find('.type'); 
                    var text= clone.find('.content'); 
                                                                                                                                      
                    title.append(time);
                    element.append(type);
                    element.append(text)
                });
            };
        }
    };
});
```

transcludeFn是一个function：
> transcludeFn(scope, function(clone){})作用域和嵌入包含的内容，clone嵌入的内容的jquery封装，有了它，我们就可以做任何想要做的dom操作了。

- 在controller里注入$transclude

```
app.directive('pane', function() {
    return {
        restrict: 'EA',
        template: '<div style="border: 1px solid black;"><div class="title" style="background-olor: gray">{{title}}</div></div>',
        replace: true,
        transclude: true,
        controller: ['$scope', '$element', '$transclude', function ($scope, $element, $transclude) {
            $transclude(function(clone, scope) {
                var title= element.find('title');
                var time = clone.find('.time');
                var type = clone.find('.type');
                var text= clone.find('.content');
                                                                                                                                
                title.append(time);
                element.append(type);
                element.append(text)
            });
        }],
    };
});
```

demo2

```
<body ng-app="myApp">
	<div ng-controller="haha">
 	<div dir >
 		<h3>ss</h3>
 	</div>
</div>
  <script>
    angular.module('myApp', [])
    .controller('haha', function($scope) {
      // we can leave it empty, it just needs to be defined    
    })   
    .directive('dir', function() {
      return {
        restrict: 'A',
        transclude:true,
	    controller:function($scope,$element,$transclude){
	    	$transclude(function(clone){
	    		console.log(clone);
	    		var a = angular.element('<a>');
	    		a.attr('href',clone.text());
	    		a.text(clone.text());
	    		$element.append(a);
	    	})    		
	    }
      }
    })
  </script>

```

####transclude的作用域

在官方文档中提到过deretive的作用域是单独的，transclude也创建了一个单独的作用域，而且与derectvie的作用域是平行的（兄弟）

---

`注意`

指令的控制器和link函数可以进行互换，区别是，控制器用来提供可在指令间复用的行为，link只定义当前指令中的行为，无法在指令间复用

技术上讲，$scope会在dom元素被实际渲染之前传入到controller中，在有些情况，controller中的scope与我们预期的不同，这样scope就无法保证可以被正常更新

当要与当前屏幕上作用域交互的话，可以使用被传入到link中的scope

---

####匿名控制器
- 无需注入scope
- controller 中scope改用this

两种形式：
- 指令中

```
.directive('dir',function(){
return {
restrict:'A',
template:'<h4>{{m.msg}}</h4>',
controllerAs:'m',
controller: function(){
this.msg = 'hhhh'
}
}
});
```

- 普通

```
<body ng-app="myApp">
	<div ng-controller="haha as me">
 	{{me.md}}
</div>
  <script>
    angular.module('myApp', [])
    .controller('haha', function() {
      // we can leave it empty, it just needs to be defined
     this.md = 'haha'
    })
   </script>
```
---
####require

> require的值是一个指令的名字，require会将该名字的指令的controller注入到当前调用该属性的指令中，
> 注入到link函数的第四个参数ctrl

前缀：
- ？

> 在当前指令中查找controller，没有，ctrl传值为null

- ^

> 在上游的指令链中寻找

- ?^

> 选择的加载需要的指令并在父指令链中查找

- 用法一

```
var app = angular.modeule('myapp',[]);  
  
app.directive('common',function(){  
    return {  
    ...  
    controller: function($scope){  
        this.method1 = function(){  
        };  
        this.method2 = function(){  
        };  
    },  
    ...  
    }  
});  
  
app.directive('d1',function(){  
    return {  
    ...  
    require: '?^common',  
    link: function(scope,elem,attrs,common){  
        scope.method1 = common.method1;  
        ..  
        },  
    ...  
    }  
});  
```

- 用法二

[传送门](http://hudeyong926.iteye.com/blog/2074238)

问题：指令链？

---

####angular的生命周期
- 编译(compile)

> 遍历dom，编译（将指令中的模板插入等工作）

- 链接(link)

> pre-link阶段 ，生成dom实例，重新遍历，不注入scope

> post-link阶段，反向注入scope

[具体细节](http://www.jb51.net/article/58229.htm)

---

####ngModelController

属性：

- $viewValue(更新视图所需的实际字符串)
- $modelValue(由数据模型持有)
- $parse（函数数组，ngModel中读取的值传入$parse中的函数，其中的函数依次解析）
- $formatters(对值进行格式化)
- $viewChangeListeners(在视图中的值变化时调用)
- $error(没有通过验证的错误信息)
- $dirty（是否进行过交互）
- $valid（是否有错误）
- $invalid （是否存在至少一个错误）

---

未完待续：
- ngModel
- ngModelController
- 自定义验证
- 自定义渲染

---

未完待续:

- $templateCache服务
- $getTrustedResourceUrl
- 作用域传递给指令
- $injector.invoke
- $compile服务
