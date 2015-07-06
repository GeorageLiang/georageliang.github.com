---
layout: post
title:  "less"
date:   2015-03-31 09:19:11
categories: less
permalink: /md/less/
---

less note
====
###使用
```
<link rel="stylesheet/less" type="text/css" href="styles.less">
<script src="less.js" type="text/javascript"></script>
```

###`注意`
> 1.文件引入顺序
> 2.rel="stylesheet/less"

---
###变量

```
	@color: #4D926F;

	#header {
	  color: @color;
	}
	h2 {
	  color: @color;
	}
```
----
###混合

```
	.rounded-corners (@radius: 5px) {
	  border-radius: @radius;
	  -webkit-border-radius: @radius;
	  -moz-border-radius: @radius;
	}

	#header {
	  .rounded-corners;
	}
	#footer {
	  .rounded-corners(10px);
	}
```
---
###嵌套
```
	#header {
	  h1 {
	    font-size: 26px;
	    font-weight: bold;
	  }
	  p { font-size: 12px;
	    a { text-decoration: none;
	      &:hover { border-width: 1px }
	    }
	  }
	}

```
---
###函数运算
```
	@the-border: 1px;
	@base-color: #111;
	@red:        #842210;

	#header {
	  color: @base-color * 3;
	  border-left: @the-border;
	  border-right: @the-border * 2;
	}
	#footer {
	  color: @base-color + #003300;
	  border-color: desaturate(@red, 10%);
	}

```
###监视模式

> 这个功能允许你当你改变样式的时候，客户端将自动刷新。
> 只要在URL后面加上'#!watch'，然后刷新页面就可以了

---
###安装

```
	npm install less@latest
```
---

####less归结起来6点

- 变量
- 混入
- 嵌套

> .a.b====.a,.b
> .a .b==== .a的子类.b

- 函数动作
- 命名空间
- 作用域

[具体细节](http://www.w3cplus.com/css/less)


