---
layout: post
title:  "jsproto"
date:   2015-06-29 09:19:11
categories: javascript
permalink: /md/jsproto/
---



JS创建对象
===
[对象] [构造函数] [prototype]

####创建对象
**1.简单创建**

```
var person = new object();
person.name="aaa";
person.get = function(){
return this.name
}
```
`问题：代码重复，创建一个对象，相应要写.name,.get的代码，为了节省代码，出现了下面这种`

**2.工厂模式**

```
var createPerson= function（name）{
 var obj = new Object();
 obj.name = name;
 obj.get = function(){
 return this.name;
 }
 return obj;
}
```

`问题：没法解决对象识别问题（没办法知道对象类型）`

**3.构造函数模式**

```
var Person = function(name){
	this.name = name;
	this.get = function(){
		return this.name;
	}
}
```

要创建Person实例，要使用new操作符，以这种方式构造会经历以下4个过程：

> var p = new Person();

- 创建一个新对象

```
var obj = {}
```

- 将构造函数的作用域付给新对象
- 在新对象中执行构造函数中的代码

```
obj.proto = Person.prototype

Person.call(obj)//构造obj，也可以称之为初始化obj
```

- 将新对象返回

```
return obj
```

任何函数只要通过new调用就变成了构造函数

构造函数的三种用法：
1.构造函数使用
2.普通函数使用

```
var p = Person("haha");//this指向windows
```

3.在另一个对象作用域里调用

```
var o =new object();

Person.call(o,"haha");

o.get();
```

`问题：每个方法都要在实例上创建一遍，一些共有的方法不想重复创建`

**4.原型模式**

```
function Person(){}

Person.prototype.name=1;
Person.prototype.get = function(){
return this.name;
}

var p = new Person();
p.name//1
```

`注：当我修改实例中的基本类型时，不会影响原型，而修改引用类型的，会影响原型，这也是原型模式最大的问题`

函数中有个属性（prototype）指向她的原型对象，其原型对象有个属性constructor，指向该函数
当创建实例后，该实例有个属性（proto），指向构造函数的原型对象

**5.构造函数+原型混合模式**

为了解决原型问题

```
function Person（name）{
this.name= name；
this.friends= ["haha","m"];
}

Person.prototype = {
	constructor:Person,
	sayName: function(){
	return this.name
	}
}
```

---

**继承**
1.原型链继承
2.借用构造函数(call,apply)

> 子类构造函数中调超类构造函数

```
function A(){
this.color = ["1","2"];
}

function a(){
A.call(this);
}
```
3.组合继承

> 属性由call，apply继承
> 共有方法由原型链继承

---