---
layout: post
title:  "Angular3"
date:   2015-06-16 22:40:11
categories: Angular
permalink: /md/angular-validate1/
---


AngularJs (第三弹)
===

`表单验证篇`

 条件：
 - 确保表单有一个name属性

```
<form name="form1" novalidate>
		<label>you email</label>
		<input name="hh" type="text" ng-model="email" required>
		<span ng-show="form1.hh.$error.required">erro</span>
		<button ng-disabled="form.$invalid">ssss</button>
	</form>
```

 注意：
 - $error是验证集合对象

格式：
 - formName.$valid
 - formName.inputFieldName.$invalid

 ---

####required

 - 必填项

---
####ng-minlength & ng-maxlength
- 最大最小长度

---

####ng-pattern
- 模式匹配

```
	<input type="text" ng-pattern="[a-zA-Z]">
```

---

####email
- 邮件格式

---

####number

---

####url

---

####一些有用的css样式
- ng-valid {}
- ng-invalid {}

```
<form name="form1" novalidate>
		<label>you email</label>
		<input name="hh" type="text" ng-model="email" required>
		<span ng-show="form1.hh.$error.required">erro</span>
		<button ng-disabled="form1.$invalid">ssss</button>
	</form>
```

####自定义验证
- 与directive相关，不在这里介绍
- 权威指南P32-P42

---

`表达式`
####{ exception }
- 所有表达式在其所属作用域内执行

> angular 运行$digest 循环过程中会自动解析表达式
> $parse 服务用来进行表达式运算
> 将 $parse 注入到控制器中，调用来进行手动解析表达式

未完待续。。

---

`模块`

优点：
- 保持全局命名空间清洁
- 使应用任意顺序加载代码各个部分
- 在不同应用间复用代码

> angular.module('app',[])

---

`作用域`
- 理解为视图模型（view model）

生命周期：
- 创建
- 链接
- 更新
- 销毁

> 指令内部的作用域被称作孤立作用域

---

`控制器`
- 不适合执行dom操作，格式化，数据操作
- 视图和$scope之间的桥梁
- 复杂的逻辑应当放入指令和服务中

---
