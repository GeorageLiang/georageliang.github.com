---
layout: post
title:  "css"
date:   2015-03-31 09:19:11
categories: css
permalink: /md/css/
---


css3学习笔记（二）
=================
@[css|边框|文本|背景|颜色|透明度]
###3.css3边框
`border-radius`属性：边框圆角

    box_round{
        -moz-border-radius:30px;
        -webkit-border-radius:30px;
        -o-border-radius:30px;
        border-radius:30px;
    }
    //按此顺序设置每个radius的四个值。如果省略bottom-left，则与top-right相同。如果省略bottom-right，则与top-left相同。如果省略top-right，则与top-left相同。
    //length:定义圆角的半径
    //%:以百分比定义圆角的形状
`box-shadow`属性：边框阴影

	.box_shadow{
		-moz-box-shadow:3px 3px 4px #ffffff;
		-webkit-box-shadow:3px 3px 4px #ffffff;
		box-shadow:3px 3px 4px #ffffff;
	}
	//含义分别为：x轴偏移值、y轴偏移值、阴影的模糊度以及阴影颜色
`border-image`属性：使用图片作为边框

    div{
		-webkit-border-image:url(border.png) 30 30 round;
		-o-border-image:url(border.png) 30 30 round;
		border-image:url(border.png) 30 30 round;
	}
    //border-image-source:用在边框的图片的路径
    //border-image-slice:图片边框向内偏移
    //border-image-width:图片边框的宽度
    //border-image-outset:边框图片区域超出边框的量
    //border-image-repeat:图片边框是否平铺(repeat)、铺满(round)或拉伸(stretch)

###4.css3背景
`background-clip`属性：规定背景的绘制区域

    background-clip:border-box|padding-box|content-box;
    //border-box:背景被裁剪到边框盒
    //padding-box:背景被剪裁到内边距框
    //content-box:背景被剪裁到内容框
`background-origin`属性：规定背景图片的定位区域

    background-origin:padding-box|border-box|content-box;
    //padding-box:背景图像相对于内边框来定位
    //border-box:背景图像相对于边框盒来定位
    //content-box:背景图像相对于内容框来定位
`background-size`属性：规定背景图片的尺寸

    background-size:length|percentage|cover|contain;
    //length:设置背景图像的高度和宽度
    //percentage:以父元素的百分比来设置背景图像的高度和宽度
    //cover:把背景图像扩展至足够大，以使背景图像完全覆盖背景区域
    //contain:把图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域

###5.css3文本
`text-overflow`属性：规定当文本溢出包含元素时发生的事情

    test-overflow:clip|ellipsis|string;
    //clip:修剪文本
    //ellipsis:显示省略符号来代表被修改的文本
    //string:使用给定的字符串来代表被修剪的文本
`text-shadow`属性：向文本添加阴影(同`border-shadow`)

`word-break`属性：规定非中日韩文本的换行规定

    word-break:normal|break-all|keep-all;
    //normal:使用浏览器默认的换行规则
    //break-all:允许在单词内换行
    //keep-all:只能在半角空格或连字符处换行
`word-wrap`属性：允许对长的不可分割的单词进行分割并换到下一行

    word-wrap:normal|break-word;
    //normal:只在允许的断字点换行
    //break-word:在长单词或URL地址内部进行换行

###6.css3颜色和透明度
在css3中对颜色进行了很多扩展，我们不仅可以使用在css2中单**rgb**模式，16进制模式以及关键字模式，同时还支持**rgba**模式，**hsl**模式和**hsla**模式以及我们可以使用css3实现渐变色

`rgba`模式：

    background-color:(192,192,192,0.5);
    //a参数代表透明度，取值在0-1之间，不可为负值
`hsl`模式和`hsla`模式：

    background-color:hsl(120,65%,75%);
    background-color:hsla(120,65%,75%,0.3);
    //hsl是代表色调，饱和度，亮度三个通道的颜色
透明度：

    opacity:0.5;
    //用来定义元素的透明度，取值范围0-1

`webkit`核心的浏览器渐变：

    线性渐变：
    -webkit-gradient(linear,start_point,end_point,color-stop);
    //第四参数：设置渐变的位置及颜色(位置的取值从0-1),可设置多组
    径向渐变：
    -webkit-gradient(radial,x1 y1,r1,x2 y2,r2,color-stop);
    //同线性渐变
`moz`核心的浏览器渐变：

    线性渐变：
    -moz-linear-gradient(10 10 90deg,rgb(25,0,0) 14%,rgb(0,0,255) 100%);
    //第一个参数：设置渐变起始位置及角度
    //其余参数：设置渐变的颜色和位置
   

 - list-style: none;
 - outline:none;
 - th
 - tbody thead tfoot
 - text-indent: -9999px;
 -  border-bottom: 2px groove #492e56;
 -   border-bottom: 1px inset #e1e1e1;
 -  dl dt dd
 -  :last-child :first-child
 -     
 git clone 问题:git config --global http.sslVerify false
