---
layout: post
title:  "javascript"
date:   2015-06-18 09:19:11
categories: javascript
permalink: /md/jsTalk/
---



js 交流心得
===

- js 无重载
> 因为js 穿参数并非是内部单个参数，而是传一个argument 数组，所以改变内部单个参数并不会影响argument

- var p = new person("sss") 与 var p = person("sss")
> 第一个是调用了构造函数，创建了一个实例，第二个只是调用person函数，并将结果返回给p
> 当person内部有this，第一个this是当前函数实例，第二个this是window

- 函数构造过程由于proto的原因，指向了原型对象，然后原型对象通过construct又重新指向了函数本身进行构造
- 基本类型复制原则
- prototyo当修改引用类型会影响整体，修改基本类型不影响
- 闭包

> 内部函数可以访问外部变量，外部想访问内部需要借用return，这个带有return的函数就是闭包

- 作用：
	- 向外部暴露内部作用域
	- 延长作用域
