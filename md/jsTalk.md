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
	


---



Javascript之闭包blabla
===

> 相信在js的学习过程中，闭包应该困扰了好多人，我被折磨了好久，看了好多资料，对闭包有了部分了解
> 今天就来说说闭包，

---

####什么闭包？

- js高级程序设计书上说：

 > 闭包是具有访问另一个函数的作用域中变量的**函数**


`注意：`闭包是函数，与之相关的也是函数(方法)之间的操作，不要考虑对象什么的


> 由此说来所有的function都是闭包，因为他们都能访问最外层（window）函数的作用域中的变量

- 我们说的闭包：

> 函数中的函数

```
    function A(){
    var c=0;
        function B(){
        alert(c);
        }
    }
```

函数B就是A的闭包（它能访问到A函数作用域中的变量c）

---

####闭包干什么用？

> 首先我们都知道，内部函数可以获取外部的作用域中的变量，但是如果外部要获取内部函数的变量那该怎么办呢？

例如：(window 要获取函数A中的b)

```
    function A(){
    var b=0;
    }
```

- 方法一：return 变量

```
function A(){
    var b=0;
    return b;
    }
var a = A();
```
两个过程
- return
- 在外部调用函数并用变量存值
`缺点`：在不修改函数A的情况下，扩展的操作要在外部进行

- 方法二：return function(`我们所说的闭包的用法`)

```
function A(){
    var b=0;
    return function(w){
        return b+w
    }
    }
var c = A();
var a= c(10);
```
优点：自定义函数扩展操作在内部进行
缺点：如果对b进行操作，函数调用结束后b不会被释放(`A作用域的延长`)
延长作用域也是闭包的特点之一
```
function A(){
var b=0;
return function(){
b=b+1;
return b；
}
}
var c= A();
c();//1
c();//2
```

解决办法：

```
function A(){
var b=0;
return function(){
var num=b;
num=num+1;
return num；
}
}
var c= A();
c();//1
c();//1
```
---

> 通常我们听到，要用某个第三方函数做用扩展什么的，然后就有人说写个他的闭包，应该就是说在第三方函数内部写一个函数，return出来，用这个函数来操作第三方函数中的方法，变量，然后我们在外部调用这个函数

闭包有种说法是通过内部函数暴露外部函数作用域
```
function A(){
return function (){

}
}
```
这里的内部应该是匿名函数，外部函数是A，将A作用域暴露给window

---

