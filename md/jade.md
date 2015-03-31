---
layout: post
title:  "jade"
date:   2015-03-31 09:19:11
categories: jade
permalink: /md/jade/
---


jade
======
@[jade]
###安装
通过npm：

    npm install jade

###语法
**1.标记**
标记是一行的第一个单词：
`html`会被渲染成

    <html></html>

标记也可以有id：
`div#container`会被渲染成

    <div id="container"></div>

同样，class和id是一个道理：
`div.user-details`会被渲染成

    <div class="user-details"></div>

在一个标签中存在多个class和id时：
`div#foo.bar.baz`会被渲染成

    <div id="foo" class="bar baz"></div>

总是在写`div`确实很麻烦，我们可以将其省略：
`#foo`
    `.bar`会被渲染成

    <div id="foo">
        <div class="bar"></div>
    </div>

**2.标记文本**
只需要将文本内容放到标签后面：
`p jdae的使用`会被渲染成

    <p>jdae的使用</p>

当处理大段文字时：
`p`
    `| jade`
    `| 模板的使用`
    `| 很方便`会被渲染成

    <p>jade 模板的使用 很方便</p>

另一种方法，我们可以使用`.`来表示一个文本框：
`p.`
    `jade`
    `模板的使用`
    `很方便`会被渲染成

    <p>jade 模板的使用 很方便</p>

*note:如果`.`和标记之间存在空格，jade解析会将其忽略，当成文本处理*
`p .`会被渲染成

    <p>.</p>

内联标签同样可以使用文本块来包含文本：
`label`
    `| Username:`
    `input(name='user[name]')`
或者直接使用标签文本:
`label Username:`
    `input(name='user[name]')`
上面的代码都会被渲染成

    <label>
        Username:
        <input name="user[name]"></input>
    </label>

**3.注释**
单行注释当前看起来与jascript一致，即`//`，单行注释的内容必须放在同一行上：
`// 一些注释`
`p jade的使用方法`会被渲染成

    <!-- 一些注释 -->
    <p>jade的使用方法</p>

jade也支持非缓冲注释，只需增加一个`-`：
`//- 这行注释将不会输出在解析后的页面中`
`p jade的使用方法`会被渲染成

    <p>jade的使用方法</p>

块注释会依据缩进进行处理：
`body`
    `//`
        `#content`
            `p jade的使用方法`会被渲染成

    <body>
        <!--
            <div id="content">
                <p>jade的使用方法</p>
            </div>
        -->
    </body>

jade也支持条件注释：
`body`
    `/if IE`
        `a(href='http://www.mozilla.com/en-US/firefox/') Get Firefox`会被渲染成

    <body>
        <!--[if IE]>
            <a href="http://www.mozilla.com/en-US/firefox/">Get Firefox</a>
        <![endif]-->
    </body>

**4.内联**
jade 支持以自然的方式定义标签嵌套:
`ul`
    `li.first`
        `a(href='#') foo`
    `li`
        `a(href='#') bar`
    `li.last`
        `a(href='#') baz`
块展开可以帮助你在一行内创建嵌套的标签:
`ul`
    `li.first: a(href='#') foo`
    `li: a(href='#') bar`
    `li.last: a(href='#') baz`
上面两端代码都会渲染成

    <ul>
        <li class="first">
            <a href="#">foo</a>
        </li>
        <li>
            <a href="#">bar</a>
        </li>
        <li class="last">
            <a href="#">baz</a>
        </li>
    </ul>

###以上便是jade模板的基本使用方法，更全面的文档点击[这里](https://github.com/visionmedia/jade/blob/master/Readme_zh-cn.md)，里面还有更好玩的事情