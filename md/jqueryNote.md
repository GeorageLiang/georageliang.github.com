---
layout: post
title:  "jqueryNOte"
date:   2015-03-31 09:19:11
categories: javascript
permalink: /md/jqueryNOte/
---

Jquery 源码学习笔记
===
---
##1.Jquery 无new创建
---
> ####jquery的使用方法

```javascript
$("div").css();
$("#p").attr();
```
> ####由此我们发现`$()`返回的是一个jquery 对象

 - ####于是我们想到jquery 内部应该是类似于工厂模式

```javascript
var jquery = function(){
    var jq = new jquery();
    return jq;
}
```
- ####但这样实际是错误的，变成了死循环

> ####为了解决这样的问题，产生了下面的方法

```javascript
var jquery = function(){
    return jquery.prototype.init();
}
jquery.prototype = {
    init:function(){
        return this;
    }
}
```
- ####返回jquery原型对象的init()的方法，返回jquery原型对象，这样便解决了死循环的问题，但问题也产生了，就是由于我们返回的是原型对象，原型对象的属性和方法是对象共享的

> ####为了解决上面的问题，产生了下面的方法

```javascript
var jquery = function(){
    return new jquery.prototype.init();
}
jquery.prototype = {
    init:function(){
        return this;
    }
}
```
- ####结果并不理想，问题又出现了，实际上，我们返回的并不是jquery.prototype对象，而是jquery.prototype.init对象.

> ####为了解决上面问题，于是诞生了这样的方法

```javascript
var jquery = function(){
    return new jquery.prototype.init();
}
jquery.prototype = {
    init:function(){
        return this;
    }
}
jquery.prototype.init.prototype = jquery.prototype
```
> ####用jquery的原型覆盖jquery.prototype.init的原型，这样new出来的就是jquery.prototype对象

---
##2.jquery 优雅的链式调用
---

> ####这个就理解起来就简单多了

```javascript
var jquery = function(){
    return new jquery.prototype.init();
}
jquery.prototype = {
    init:function(){
        return this;
    },
    name:function(){
        return this;
    }，
    sex：function（）{

    }

}
jquery().name().sex()
```
> ####每次调用完事之后都返回jquery的原型，下次继续使用

---

##3.插件接口
---
> ####jquery.extend()  `用于jquery扩展`
> ####jquery.fn.extend() `用于jquery对象的扩展`

- ####事实上

> ####jQuery.extend = jQuery.fn.extend = function() {}

- ####为什么指向相同的函数，却有着不同的功能？

> ####关键在于`this`

---