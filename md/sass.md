---
layout: post
title:  "Sass first touch"
date:   2015-09-21 09:19:11
categories: other
permalink: /md/sass/
---



Sass first touch
===
---

###入门

####变量[$]

```
$fontStack :1px;

body{
width: $fontStack;
}
```

####嵌套

```
nav{
	ul{}
	a{}
}
```

####导入

导入外部文件reset.scss
```
body{
@import 'reset';
}
```

#####impot .scss文件 与 .css 文件区别：

前者是将外部文件引入并编译成一个文件
后者是编译文件后，外部文件以css@import形式存在

基础文件名以: _minxin.scss表示，导入时可写成@import"minxin"

####mixin (混入)

```
@mixin box-s($a){}

.box-border{
@include box-s(1px);
}
```

####继承

```
.message{}

.success{
@extend .message;
}
```

####运算

```
artical{
width: 600px/300px;
}
```

####颜色函数
```
$linkcolor: #08c;
a{
color: darken($linkcolor,10%);
}

```

---

###进阶

####文件缀名
@[.sass | .scss]

sass 语法不使用{}
scss 语法与我们通常使用一样

####变量

1. 普通变量

```
$a : #eee;
```

2. 默认变量

```
$a : #eee !default
```

3. 特殊变量（应用于class和属性名）

```
$tp : top;
.border-#{$tp} {
}
```

4. 多值变量(List,map)

- List 类似数组
- map 类似对象

```
$px:5px,10px,11px;

a{
color: nth($px,1);
}


$heading {
h1: 2em;
h2: 3em;
h4:4em;
}

map-get($heading,"h1");

```

####嵌套

- 选择器嵌套

```
ul{
li:{}
&:hover{

}
}
```

- 属性嵌套

```
border-width,border-color

border{
width:2px;
color:#eee
}
```
`不推荐这样使用`


####跳出嵌套

@at-root

> 跳出所有父级嵌套

```
.p{
color:red;
.child{
	width:100px;
}
}

.p{
color:red;
@at-root .child{
	width:100px;
}
}
```

####混合

```
@mixin a{}
@mixin b(b1,b2){}


.b{
@include a;
}

.b2{
@include b(1px,1px);
}
```

> 建议传递参数的用@mixin，而非传递参数类的使用下面的继承%

####条件判断&循环

```
$type: monster;

p {

@if $type == ocean {
color:blue;
}
@else if $type == monster {
color : red;
}
@else{
color : black;
}
}


三目判断

if(true,1px,2px);

```

####for循环（两种形式）
包括（3）
```
@for $i from 1 through 3 {
.item-#{$i}{
width: 2px*$i;
}
}
```

不包括（3）

```
@for $i from to 3{

}
```


####each循环

```
@each $var in <list or map>

$animal-list: a1,a2,a3;

@each $an in $animal-list{
.#{$an}-icon{
color:red;
}
}
```

####多字段list

```
$animal-list: (a1,b1.c1),(a2,b2,c2);

@each $an, $bn, $cn in $animal-list{
.#{$an}-icon{
color:red;
}
}
```

####多字段map

```
$animal-list: (h1:2em,h2:3em,h4:4em);

@each $hn, $size in $animal-list{
.#{$hn}-icon{
font-size: $size;
}
}
```
---

总结：
- 利用混入将共有属性抽成函数，供其他调用
- 特殊变量-----名称变量
- @if 通常与mixin结合使用，封进函数中，在内部做区分
