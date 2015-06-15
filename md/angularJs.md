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

---

sublimetext2---
angular-snippets

```
// Settings in here override those in "User/Preferences.sublime-settings", and
// are overridden in turn by file type specific settings.
{
  "auto_complete_selector": "source - comment, meta.tag - punctuation.definition.tag.begin",
  "auto_complete_triggers":
    [
      {
      "characters": "ng-controller=\"*",
      "selector": "punctuation.definition.string"
      }
    ]
}
```

---

####ng-include

`问题`

使用ng-include 不显示插入内容

- 不能访问file协议资源（使用firfox可以解决）
- 建议使用 ng-include="'include.html'"


```
<body ng-app="hah">
	<div ng-controller="my">
		{{h}}
	</div>
	<div ng-include="'include.html'" ng-controller="my" onload="h=1"></div>
	<script type="text/javascript">
		angular.module('hah', []).controller('my',function($scope){
			$scope.h =0;
		});
	</script>

</body>
```
include.html

```
	<h3>{{ h }}</h3>
```

- 引入页享有controller的scope

---

####ng-switch
```
	<input type="text" ng-model="h">
	<div ng-switch on="h">
		<div ng-switch-when="123">{{h}}</div>
		<div ng-switch-default>switch-default</div>
	</div>
```

---

####ng-view

ng-view 用来设置路由管理的html视图

---

####ng-if

根据表达式的值在dom中生成或移除一个元素
`区别`于 ng-show，ng-hide：
- 并非通过css隐藏，而是正真的生成和删除节点

---

####ng-repeat

- $index
- $first
- $middle
- $last
- $even
- $odd

```
	<body ng-app="my">
	<table ng-controller="ha">
		<thead>
			<tr>
				<th>ind</th>
				<th>name</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="p in arr">
				<td ng-if="$even">{{$index}}</td>
				<td ng-if="$even">{{p.name}}</td>
			</tr>
		</tbody>
	</table>

	<script type="text/javascript">
	angular.module('my', []).controller("ha",function($scope){
		var ar1 = {
			name:"ar1"
		};
		var ar2 = {
			name:"ar2"
		}
		$scope.arr = [ar1,ar2];
	});
	</script>
```

`注意`
- even 和odd 是index 的值,index从0开始
- middle

---

####ng-init

小实例的变量初始化

---

####{{}} & ng-bind &ng-cloak
ng-bind的简略形式，常用于行内文本中
`注意`
- 页面加载时未渲染元素会发生闪烁

解决闪烁
- 使用ng-bind
- 使用ng-cloak

---

####ng-bind-template
绑定多个表达式

```
	<div ng-bind-template="{{hello}} {{name}}></div>
```

---

####ng-model
不用多说了

---

####ng-show & ng-hide
类似show ，hide

- 元素的显示和隐藏是通过添加和移除ng-hide这个css类实现的，.ng-hide被预先定义在angular的css文件中

---

####ng-change

