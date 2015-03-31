---
layout: post
title:  "javascript base"
date:   2015-03-31 09:19:11
categories: javascript
permalink: /md/javascript/
---

javascript 基本语法(1)
=====================
###![Alt text](./u=1301072170,3926353991&fm=21&gp=0.jpg)             BY：GeorgeLiang                2014/6/28

- ###特点：

####1. 区分大小写
####2. 注释：
                单行使用"//"
                多行使用" /* */ "
####3. 语句后的空格可有可无
                var num = a+b
                var num = a+b;(推荐)
####4. 条件控制语句
                if (test)
                    alert(test); (条件后就一句)

                if(test){
                    alert(test);        (推荐)
                }
- ###变量：
####1. 松散型（可用来保存任何类型）
                var messege;(如果没有赋值，其值为 undefined )
####2. 使用 var 定义的变量会成为定义该变量作用域中局部变量
                function t(){
                    var test = "hi";
                }
                t();
当退出函数时，test被销毁
####3. sh 省略 var 会是变量成为全局变量
####4. 用一条语句定义多个变量：
                var mess="hi",
                    f=false,
                    a=10;
- ###数据类型：
####1. undefined（未定义）
####2. boolean （布尔类型）
####3. string （字符串类型）
####4. number （数值）
####5. object （对象 或 null）
####6. function (函数)
        typeof操作符 可以返回值的类型（由于是操作符，不用加括号）

    ####. 未声明变量与声明未赋值的变量使用typeof 都返回undefined
    ####. 问题：
            alert（undefined==null）//true
    ####. 布尔类型转换
            Boolean("")=false;
            Boolean(null)=false;
            Boolean(0)=false;
            Boolean(NAN)=false;
    ####. number 类型
        var a1= 070(八进制)
        var a1=0x12（十六进制）
        var a1=1.1
        var a1=1.35e8(10的8次方)
    ####. NAN(非数值)（与任何值都不等）
        isNAN(10)//false
        isNAN("10")//false(可转化成数值)
        isNAN("true")//false(可转化成数值)
        isNAN("blue")//true(不可转化成数值)
    ####. 数值转换
        Number（）
            Number("")//0
            Number("0000011")//11
            Number(true)//1
        parseInt（）
            parseInt("1234abc")//1234
            parseInt("0xA")//10
            parseInt(070)56
            parseInt("10",16)//16
            parseInt("10",2)//2
        parseFloat（）
    ####. 字符串（特点：不可变性）
    ####. 字符串转换：
            var age=11;
            age.toString()//"11"
            age.toString(16)//"B"
    ####. ==与===（全等）
            "55"==55//true
            "55"===55//false
- #### 函数：
    ####. 函数声明：
    ####1. 命名式声明：
            function m（）{

            }
    ####2. 表达式声明：
            var m=function（）{}
    ####3. 函数名是一个指针，不需指针也可执行
            （function（a，b）{return a+b；}）（1，2）//3
    ####4. 模拟实现重载
    ####1. arguments（函数中用于统计传入的参数）(与数组类似)arguments【0】，arguments【1】
            function haha(){
                alert(arguments.length);
            }
            haha();//0
            haha("");//1
            haha("s",10);//2
    ####2. 模拟重载：
        function mm(){
            if(arguments.length==1){
                .......
                }else if(arguments.length==2){
                    ........
                }else{
                    .......
                }
             }
                    mm(1);
                    mm(2,"");
- ####arguments.callee()  解决递归问题【BY ERic】
            function factorial(num) {
                if (num <= 1) {
                    return 1;
                } else {
                    return num * factorial(num - 1);
                };
            }
            function callee_f(num) {
                if (num <= 1) {
                    return 1;
                } else {
                    return num * arguments.callee(num - 1);
                };
            }
                    factorial(10); //运行正常
                    f = factorial;
                    factorial = null;
                    f(10); //error

                    callee_f(10); //运行正常
                    f = callee_f;
                    callee_f = null;
                    f(10); //运行正常
- ####call 与 apply
    function m1(){var s=10;return function(){return this.s}}
    function m2(){var ss=20;return function(){return this.ss}}
    m1.call(m2);






