---
layout: post
title:  "Angular"
date:   2015-06-11 22:40:11
categories: Angular
permalink: /md/angularJs/
---


AngularJs 学习
===

---
####`内置指令篇`
####1.ng-disabled

-  用途:禁用，类比于disabled

```javascript
	<input type="text" ng-model="someThing">
	<button ng-disabled="!someThing">Button</button>
```
####输入内容按钮才会取消禁止

---
####2.ng-readonly

- 用途:只读，类比于readonly

```javascript
	<input type="text" ng-model="hello1">
	<input type="text" ng-readonly="!hello1" value="sdsd">
```
####输入内容按钮才会取消只读

---
####3.ng-checked

- 用途:选中，类比于checked

```javascript
	<input type="checkbox" ng-init="chek=true" ng-checked="chek" ng-model="chek">
	<label>{{chek}}</label>
```
####点击复选框，label变化

---
####4.ng-selected

- 用途：选择，类比于select

```
	<input type="checkbox" ng-model="op">
	<select>
		<option   value="123">11</option>
		<option   ng-selected="op" value="1234">112</option>
	</select>
	<label>{{op}}</label>
```

####通过checkbox控制select

####`问题`

- 1.slect不变
- 2.select下拉框多出空白

```
	<input type="checkbox" ng-model="op">
	<select ng-model="slect">
		<option   value="123">11</option>
		<option   ng-selected="op" value="1234">112</option>
	</select>
	<label>{{op}}</label>
	<label>{{slect}}</label>
```

---

####`解惑` 

- 1.slect不变

> (ng-selected想象成类似于css的显示作用，所以改变option的选中状态，只改变显示不影响select的model变化)

- 2.select下拉框多出空白

> 由于select的model没有初始化，所以无法找到对应的option，就显示成一个空的option，当点击时直接选中第一个option

---

####5.ng-href & ng-src

- 用途：类似于href，src

```
	<body ng-App="mytry">
		<a ng-href="{{ssrc}}">{{ssrc}}</a>
		<script>
		angular.module("mytry",[]).run(function($rootScope){
			$rootScope.ssrc = "http://baidu.com"
		});
		</script>
	</body>
```

```
	<body ng-App="mytry">
		<div ng-controller="try">
			<img ng-src="{{ssrc}}">
		</div>
		<script>
		angular.module("mytry",[]).controller("try",function($scope){
			$scope.ssrc = "http://baidu.com"
		});
		</script>
	</body>
```

`扩展`

- $rootScope是controller外层ng-App的作用域
- $scope是controller局部作用域,
- 内部可以继承父层

```
	<body ng-App="mytry">
		<span >{{rootSrc}}</span>
		<div ng-controller="try">
		<a ng-href="{{ssrc}}">{{ssrc}}</a>
		</div>
		<script>
			angular.module("mytry",[]).run(function($rootScope){
				$rootScope.rootSrc = "http://baidu.com"
			}).controller("try",function($rootScope,$scope){
				$scope.ssrc = $rootScope.rootSrc
			});
		</script>
	</body>
```

- $scope上保存瞬时状态数据，持久化状态数据保存在服务中，服务的作用是处理模型持久化
- 不要将$scope赋值为值类型的对象
- 控制器尽量简单，业务逻辑写在服务和指令中

