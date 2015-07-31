---
layout: post
title:  "backbone"
date:   2015-07-31 09:19:11
categories: backbone
permalink: /md/backbone/
---


BackboneJS
====

---

####index.html


```
<div class="top-bar clearfix">
    <span class="logo fl"  title="">个灯广告专业投放系统</span>
    <p class="top-menu fr">Welcome, <span class="head-name">admin</span>&nbsp;&nbsp;<span class="logout"><a>退出</a></span></p>
</div>
<ul id="nav" class="fl clearfix">
    <li><a href="#"> <i class="iconfont">&#xe644;</i>首页</a></li>
    <li><a href="#promotion-new"><i class="iconfont">&#xe614;</i>新建推广计划</a></li>
    <li><a href="#promotion-management"><i class="iconfont">&#xf015f;</i>推广计划管理</a></li>
    <li class="nav-report"><a href="#report"><i class="iconfont">&#xf00ce;</i>数据报表</a></li>
    <li class="nav-customer"><a href="#customer"><i class="iconfont">&#xe75c;</i>客户管理</a></li>
    <li class="nav-account hide"><a href="#account"><i class="iconfont">&#xe60c;</i>账户管理</a></li>
</ul>
<i class="iconfont current-nav-arrow">&#xf01a8;</i>
<!--<div class="bottom-bar clearfix">-->
   <!--<div class="bottom-content">-->
       <!--<p>©2013~2014个灯专业投放系统，All Rights Reserved.</p>-->
       <!--<p><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2117094763&amp;site=qq&amp;menu=yes" class="QQservice">客服QQ：2117094763<img src="images/qq.png"></a></p>-->
   <!--</div>-->
<!--</div>-->

```



####index-view.js
```
define(function (require, exports, module) {
    var Backbone = require("backbone");
    var _ = require("underscore");
    var tpl = require("text!./index.html");
    var $ = require("jquery");
    var App = require("app");

    module.exports = Backbone.View.extend({
        events: {
            "click .logout":"logout"
        },
        initialize: function () {
            this.platForm = App.platForm;
            this.render();
            this.$arrow = this.$(".current-nav-arrow");
            Backbone.on("changeCurrentSiteNav", $.proxy(this.changeCurrentSiteNav, this));

        },
        render: function () {
            this.$el.html(tpl);

            if(this.platForm == "DOS") {
               $("#nav li").eq(1).html('<a href="#promotion-new"><i class="iconfont">&#xe614;</i>新建推送任务</a>');
               $("#nav li").eq(2).html('<a href="#push-task"><i class="iconfont">&#xf015f;</i>推送任务管理</a>');
               $("#nav li").eq(3).html('<a href="#sc-report"><i class="iconfont">&#xf00ce;</i>数据报表</a>');
               $("#nav li").eq(4).html('<a href="#data-manage"><i class="iconfont">&#xe75c;</i>资料管理</a>');
               $("#nav li").eq(5).addClass("hide");
                $(".logout a").html("返回");
            }else{
                $("#nav li").eq(3).html('<a href="#report"><i class="iconfont">&#xf00ce;</i>数据报表</a>');
                $("#nav li").eq(2).html('<a href="#promotion-management"><i class="iconfont">&#xf015f;</i>推广计划管理</a>');
                $("#nav li").eq(4).html('<a href="#customer"><i class="iconfont">&#xe75c;</i>客户管理</a>');
                $("#nav li").eq(5).removeClass("hide");
                $(".logout a").html("退出");
            }

            this.$(".head-name").html(window.sessionStorage.getItem("username"));
            return this;
        },
        changeCurrentSiteNav: function($nav) {
            var t;
            if (document.documentElement && document.documentElement.scrollTop) {
                t = document.documentElement.scrollTop;
            } else if (document.body) {
                t = document.body.scrollTop;
            }
            $(".current-nav").removeClass("current-nav");
            $nav.addClass("current-nav");
            this.$arrow.css("top", $nav.offset().top + 30 - t);
          //  this.$arrow.css("top", $nav.offset().top + 30 );

        },
        logout: function(){

                $.post(App.url.logout,function(data){
                    if(data.result){
                        that.alertInfo(data.errorInfo);
                        return false;
                    }
                    localStorage.setItem("username","");
                    if(data.redirect == undefined){
                        var url = window.location.href;
                        var baseUrl = url.split("/");
                        baseUrl[3].indexOf(".html")>0?
                            window.location.href="/login.html":window.location.href="/"+baseUrl[3]+"/login.html";

                    }else{
                        window.location.href=data.redirect;
                    }

                });

        }
    })
});

```

####调用
```
 new HeaderView();
```


----

```
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<div id="container"></div>
</body>
<script src="../lib/jquery-1.8.0.js"></script>
<script src="../lib/underscore.js"></script>
<script src="../lib/backbone.js"></script>

<script>

  (function(){
  var view = Backbone.View.extend({
    el:"#container",
    events: {
      "click .ww": "ww"
    },

    initialize: function () {
      this.Tpl ="<h2 class='ww'>hello world</h2>"
      this.render();
    },
    render: function () {

      this.$el.html(this.Tpl);

      return this;
    },
    ww: function(){
      alert("hello-world");
    }

  });
  new view();
})()
</script>
</html>
```
---


