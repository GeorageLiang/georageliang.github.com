---
layout: post
title:  "Angular2"
date:   2015-06-15 22:40:11
categories: Angular
permalink: /md/angular-filter/
---


AngularJs (第二弹)
===

`过滤器篇`
`本文中双括号用单括号代替`

> 过滤器用来格式化给用户展示的数据，包括内置过滤器和自定义过滤器

---
####两种使用方式
- javascript 通过$filter调用过滤器

```
	app.controller("demo",function($scope,$filter){
		$scope.name = $filter('lowercase')('Ari');
	})
```

> Uncaught Error: [ $injector:nomod ]
> 注入器错误

- html形式 使用过滤器

```
	{123.123 | number:2}
```

---

####currency

- 将数值格式化货币格式

```
	{133 | currency}
```

---

####date

- 日期过滤器

> Error: [ng:areq]
> ng-app未指定或者controller指定未定义js

```
		<body ng-app = "mytry">
        <div ng-controller="demo">
         {today | date:'MM'}
        </div>

        <script>
                 angular.module("mytry",[]).controller("demo",function($scope){
                     $scope.today = new Date();

                 })
        </script>
    </body>
```

---

####filter
- 从给定数组中选择一个子集并生成一个新数组返回
- 例如做搜索时过滤结果

这个过滤器的第一个参数
- 字符串

```
	{ ['ari','aa','bb'] | filter:'a'}
```
- 对象

```
	 {  [ {'name':'12'},{'name':'22'} ] | filter: {'name':'12'} }
```

- 函数（自定义函数过滤）

```
	 <body ng-app="mytry" >

        <div ng-controller="demo">
        { [ 'Ai','bi' ] | filter: kk }
        </div>

        <script>
                 angular.module("mytry",[]).controller("demo",function($scope){
                     $scope.kk = function(str){
                        return str[0] == str[0].toUpperCase()

                     }

                 })
        </script>
    </body>
```

这个过滤器的第二个参数

- true(严格)
- false(不区分大小写

---

####json

将对象过滤成json字符串

---

####limitTo

- 截取字符串或数组
```
	<body ng-app ="my">
	<div ng-controller="ha">
		{ sanFran | limitTo:3 }

	</div>
	
	<script type="text/javascript">
	angular.module('my', []).controller("ha",function($scope){
		
	$scope.sanFran="san franss";
	});	
	</script>
</body>
```

---

####lowercase & uppercase
- 转大小写

---

####number 
-  数字格式
-  第二参数控制小数点后截取

```
	{123.123 | number：2}
```

---

####orderBy
- 排序
- 3种参数形式
- 字符串
- 数组
- 函数

```
	[{'name':A},{'name':b}] | orderBy：'name'
```
按名字排序（字母顺序）

```
 | orderBy：'-name'
| orderBy：'name'：true
```
倒序

```
|orderBy：['age','name']
```

如果age相同按name排序

---

####自定义过滤器

```
<body ng-app ="my">
	<div ng-controller="ha">
		{ sanFran | suck}
	</div>	
	<script type="text/javascript">
	angular.module('my', []).filter('suck',function(){
		return function(input){
			return input[0].toUpperCase()+ input.slice(1)
		}
	}).controller("ha",function($scope){		
	$scope.sanFran="san";
	});	
	</script>
</body>
```

`注意：`
- 结构

```	
.filter("name",function(){
	return function(){
		return bulabula
	}
})
```

