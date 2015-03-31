---
layout: post
title:  "RequireJs"
date:   2015-03-31 09:19:11
categories: javascript
permalink: /md/require/
---


RequireJs Note
=============
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