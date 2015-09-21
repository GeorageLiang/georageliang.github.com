---
layout: post
title:  "Angular学习之事件"
date:   2015-09-21 22:40:11
categories: Angular
permalink: /md/angular12/
---

Angular-事件
===

####保证嵌套controller进行信息传递
```
<div ng-controller="ParentCtrl">                  //父级
    <div ng-controller="SelfCtrl">                //自己
        <a ng-click="click()">click me</a>
        <div ng-controller="ChildCtrl"></div>     //子级
    </div>
    <div ng-controller="BroCtrl"></div>           //平级
</div>
```

```
phonecatControllers.controller('SelfCtrl', function($scope) {
    $scope.click = function () {
        $scope.$broadcast('to-child', 'child');
        $scope.$emit('to-parent', 'parent');
    }
});
```

####$broadcast向下传递事件

```
phonecatControllers.controller('ChildCtrl', function($scope){
    $scope.$on('to-child', function(d,data) {
        console.log(data);         //子级能得到值
    });
    $scope.$on('to-parent', function(d,data) {
        console.log(data);         //父级得不到值
    });
});
```

####$emit向上传递事件

```
phonecatControllers.controller('ParentCtrl', function($scope) {
    $scope.$on('to-parent', function(d,data) {
        console.log(data);         //父级能得到值
    });
    $scope.$on('to-child', function(d,data) {
        console.log(data);         //子级得不到值
    });
});
```

####平级获取不到

####$on
事件监听，从事件中获取信息


####事件对象
emit() ,broadcast()
方法会返回事件对象

两个方法：

- stopPropagation（取消$emit 触发事件的进一步传播）
- preventDefault（不阻止传播，但让子作用域忽略）