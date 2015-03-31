---
layout: post
title:  "backbone-nested"
date:   2015-03-31 09:19:11
categories: backbone
permalink: /md/backbone-nested/
---

backbone.js 插件学习之
===

## `backbone-nested`
---
## 什么是backbone-nested？
> #### 它是backbone框架中众多插件之一，为model数据的`嵌套操作`提供更加简单的操作。

---
## 什么是嵌套？
> #### 一个简单的例子

```javascript
    var user = new Backbone.Model({
      name: {
        first: {
            'A':"123",
            'B':"12s"

        },
        last: 'Feldman'
      }
    });
```
>  #### model中嵌套了name，name中嵌套了first
> ### `接下来让我们看看嵌套的麻烦操作`

---

## 未使用插件的操作
> #### 对于model中对象数据的操作

```javascript
    var user = new Backbone.Model({
      name: {
        first: 'Aidan',
        last: 'Feldman'
      }
    });

    user.get('name').first = 'Bob'; //对model中的name对象中的属性赋值
    user.save();
```
## 使用插件后
```javascript
    var user = new Backbone.Model({
      name: {
        first: 'Aidan',
        last: 'Feldman'
      }
    });

    user.set({'name.first': 'Bob'}); // returns 'Bob'
    user.get('name.first');
```
## 其他例子
```javascript
    user.set({
      'addresses': [
        {city: 'Brooklyn', state: 'NY'},
        {city: 'Oak Park', state: 'IL'}
      ]
    });
    user.get('addresses[0].state') // returns 'NY'

    // square bracket syntax
    user.set({
      'addresses[1].state': 'MI'
    });
```
> #### 其他例子，和方法就不一一列举了，看更多方法参考下面地址

---
## 具体文档
* [API Reference](http://afeld.github.com/backbone-nested/)
* [GitHub](https://github.com/afeld/backbone-nested)
