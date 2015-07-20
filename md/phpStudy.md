---
layout: post
title:  "PHP"
date:   2015-07-20 09:19:11
categories: PHP
permalink: /md/phpStudy/
---



PHP学习
===

> 它强大到足以成为在网络上最大的博客系统的核心（WordPress）！
> 它深邃到足以运行最大的社交网络（facebook）！
> 而它的易用程度足以成为初学者的首选服务器端语言！

---

###what is PHP?

####PHP 是一种服务器脚本语言

---

#### PHP 脚本在服务器上执行，然后向浏览器发送回纯 HTML 结果。

---

###基本语法

PHP 脚本以 <?php 开头，以 ?> 结尾

```
<?php
// 此处是 PHP 代码
?>
```

用户定义的函数、类和关键词（例如 if、else、echo 等等）都对大小写不敏感

所有变量都对大小写敏感

---

###变量

```
<?php
$txt="Hello world!";
$x=5;
$y=10.5;
?>
```

`PHP 是一门类型松散的语言`
- PHP 根据它的值，自动把变量转换为正确的数据类型。

PHP 变量作用域
- local（局部）
- global（全局）
- static（静态）

- 函数之外声明的变量拥有 Global 作用域，只能在函数以外进行访问。

- 函数内部声明的变量拥有 LOCAL 作用域，只能在函数内部进行访问。

```
<?php
$x=5; // 全局作用域

function myTest() {
  $y=10; // 局部作用域
  echo "<p>测试函数内部的变量：</p>";
  echo "变量 x 是：$x";  //不输出
  echo "<br>";
  echo "变量 y 是：$x";  //10
}

myTest();

echo "<p>测试函数之外的变量：</p>";
echo "变量 x 是：$x"; //5
echo "<br>";
echo "变量 y 是：$x"; //不输出
?>
```

####PHP global 关键词

```
<?php
$x=5;
$y=10;

function myTest() {
  global $x,$y;
  $y=$x+$y;
}

myTest();
echo $y; // 输出 15
?>
```

`PHP 同时在名为 $GLOBALS[index] 的数组中存储了所有的全局变量`

```
<?php
$x=5;
$y=10;

function myTest() {
  $GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];
}

myTest();
echo $y; // 输出 15
?>
```

####PHP static 关键词

通常，当函数完成/执行后，会删除所有变量。不过，有时我需要不删除某个局部变量

```
<?php
function myTest() {
   static $x=0;
   echo $x;
   $x++;
}

myTest();//0
echo "<br>";
myTest();//1
echo "<br>";
myTest();//2
echo "<br>";
myTest();//3
echo "<br>";
myTest();//4
?>
```

`x为局部变量`

---

###在 PHP 中，有两种基本的输出方法：echo 和 print。

- echo - 能够输出一个以上的字符串
- print - 只能输出一个字符串，并始终返回 1
- echo 比 print 稍快，因为它不返回任何值

```
<?php
$txt1="Learn PHP";
$txt2="W3School.com.cn";
$cars=array("Volvo","BMW","SAAB");

echo $txt1;
echo "<br>";
echo "Study PHP at $txt2";
echo "My car is a {$cars[0]}";
?>
```
---

###PHP 数据类型

- 字符串

```
$x = "Hello world!";
```

- 整数

```
<?php
$x = 5985;
var_dump($x);
echo "<br>";
$x = -345; // 负数
var_dump($x);
echo "<br>";
$x = 0x8C; // 十六进制数
var_dump($x);
echo "<br>";
$x = 047; // 八进制数
var_dump($x);
?>
```

- 浮点数

```
<?php
$x = 10.365;
var_dump($x);
echo "<br>";
$x = 2.4e3;
var_dump($x);
echo "<br>";
$x = 8E-5;
var_dump($x);
?>
```

- 逻辑

```
$x=true;
$y=false;
```

- 数组

```
$cars=array("Volvo","BMW","SAAB");
```

- 对象

```
<?php
class Car
{
  var $color;
  function Car($color="green") {
    $this->color = $color;
  }
  function what_color() {
    return $this->color;
  }
}
?>
```

- NULL 值

```
$x=null;
```

---


###PHP 字符串函数

- strlen() //函数返回字符串的长度

```
echo strlen("Hello world!");
```
-  strpos() 函数用于检索字符串内指定的字符或文本
> 如果找到匹配，则会返回首个匹配的字符位置。如果未找到匹配，则将返回 FALSE。
```
<?php
echo strpos("Hello world!","world");//6
?>
```

---


###PHP 常量

与变量不同，常量贯穿整个脚本是自动全局的。

如需设置常量，请使用 define() 函数 - 它使用三个参数：
- 首个参数定义常量的名称
- 第二个参数定义常量的值
- 可选的第三个参数规定常量名是否对大小写敏感。默认是 false。

```
<?php
define("GREETING", "Welcome to W3School.com.cn!");
echo GREETING;
?>
```
---

###PHP 字符串运算符
- 串接
```
$txt1 = "Hello"
$txt2 = $txt1 . " world!"
```

---

###PHP 数组运算符
- 联合($x 和 $y 的联合（但不覆盖重复的键）)
```
$x + $y
```
- 不等
```
$x <> $y
$x != $y
```

---

###判断

```
<?php
$t=date("H");

if ($t<"20") {
  echo "Have a good day!";
}
?>
```

```
if (条件) {
  条件为 true 时执行的代码;
} elseif (condition) {
  条件为 true 时执行的代码;
} else {
  条件为 false 时执行的代码;
}
```

```
<?php
switch ($x)
{
case 1:
  echo "Number 1";
  break;
case 2:
  echo "Number 2";
  break;
case 3:
  echo "Number 3";
  break;
default:
  echo "No number between 1 and 3";
}
?>

</body>
</html>
```

---

###循环

```
<?php
$x=1;

while($x<=5) {
  echo "这个数字是：$x <br>";
  $x++;
}
?>
```

```
<?php
$x=1;

do {
  echo "这个数字是：$x <br>";
  $x++;
} while ($x<=5);
?>
```

```
<?php
for ($x=0; $x<=10; $x++) {
  echo "数字是：$x <br>";
}
?>
```

foreach 循环只适用于数组，并用于遍历数组中的每个键/值对。
```
<?php
$colors = array("red","green","blue","yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}
?>
```

---

###PHP 函数
```
<?php
function writeMsg() {
  echo "Hello world!";
}

writeMsg(); // 调用函数
?>
```

```
<?php
function familyName($fname) {
  echo "$fname Zhang.<br>";
}

familyName("Li");
familyName("Hong");
familyName("Tao");
familyName("Xiao Mei");
familyName("Jian");
?>
```

PHP 默认参数值

```
<?php
function setHeight($minheight=50) {
  echo "The height is : $minheight <br>";
}

setHeight(350);
setHeight(); // 将使用默认值 50
setHeight(135);
setHeight(80);
?>
```

####返回值

```
<?php
function sum($x,$y) {
  $z=$x+$y;
  return $z;
}

echo "5 + 10 = " . sum(5,10) . "<br>";
echo "7 + 13 = " . sum(7,13) . "<br>";
echo "2 + 4 = " . sum(2,4);
?>
```

---

###PHP 数组

三种数组类型

- 索引数组 - 带有数字索引的数组
- 关联数组 - 带有指定键的数组
- 多维数组 - 包含一个或多个数组的数组

```
$cars=array("Volvo","BMW","SAAB");
$cars[0]="Volvo";
$cars[1]="BMW";
$cars[2]="SAAB";
```

####获得数组的长度 - count() 函数

```
echo count($cars);
```

遍历索引数组

```
<?php
$cars=array("Volvo","BMW","SAAB");
$arrlength=count($cars);

for($x=0;$x<$arrlength;$x++) {
  echo $cars[$x];
  echo "<br>";
}
?>
```
####PHP 关联数组
```
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
$age['Peter']="35";
$age['Ben']="37";
$age['Joe']="43";
```
遍历关联数组

```
foreach($age as $x=>$x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
?>
```
---

###数组排序
- sort()和rsort()       //数组值升降序
-  arsort()和krsort() //关系数组，值升序，键升序
-  asort()和ksort()   //关系数组，值降序，键降序

---

###PHP 全局变量 - 超全局变量
- $GLOBALS
- $_SERVER
- $_REQUEST
- $_POST
-  $_GET

----
