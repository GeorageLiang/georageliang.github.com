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
