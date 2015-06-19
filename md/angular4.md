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



未完待续:

- $templateCache服务
- $getTrustedResourceUrl
- 作用域传递给指令
- $injector.invoke
- $compile服务
