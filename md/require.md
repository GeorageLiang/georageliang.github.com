---
layout: post
title:  "RequireJs"
date:   2015-03-31 09:19:11
categories: javascript
permalink: /md/require/
---


RequireJs Note
=============

###什么是requireJS

> 基于 AMD（Asynchronous Module Definition）的 JavaScript 设计已经在目前较为流行的前端框架中大行其道，
> jQuery、Dojo、MooTools、EmbedJS 等纷纷在其最新版本中加入了对 AMD 的支持。
> 既想使用 AMD 的特性又不想引入一个庞大的库的开发人员，不妨试试 RequireJS。
> RequireJS 可以帮助用户异步按需的加载 JavaScript 代码，并解决 JavaScript 模块间的依赖关系，提升了前端代码的整体质量和性能。

###使用：

- ###HTML
                <html>
                <head>
                    <title>requirejs入门（一）</title>
                    <meta charset="utf-8">

                </head>
                <body>

                 <script data-main="main" src="require.js" defer async="true"></script>// 配置js入口
                 <script>

                 </script>

                </body>
            </html>


- ###main.js
                require.config({

                        paths:{                             //配置js文件路径
                          "jquery":"jquery-1.8.0",
                          "map":"22",
                          "qq":"33"
                        },
                        shim:{                               //非模块形式 配置依赖关系
                        	"map":{
                        		deps:["jquery"],
                        		exports:"$"
                        		//其他js文件(模块模式)以require("包地址")形式引入;用此符号进行使用
                        	}
                        }
                });
                    require(["jquery","map","qq"],function($,M,Q){
                    //数组是js文件数组，，后面的回调函数在js文件加载完毕之后执行

                    console.log($);
                    console.log(M);
                    console.log(Q);

                    });

- ###22.js

            $("body").css("width","100px");//非模块形式，依赖Jquery，需要在main.js中进行配置

- ###33.js

            define(function(require,exports,module){                        //模块模式
                        require("jquery");                                  //引入jquery
                        $("body").css("background-color","black");
            });