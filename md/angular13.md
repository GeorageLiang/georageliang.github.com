---
layout: post
title:  "Angular扩展ui-blabla"
date:   2015-09-21 22:40:11
categories: Angular
permalink: /md/angular13/
---

Angular扩展ui-blabla
===

---

###AngularUI

####ui-router

> 安装

```
npm install bower -g

bower install angular-ui-router --save
```

```
angular.module('myApp',['ui.router']);

```

处理ngRouter时，我们不再使用ng-view，改使用ui-view指令

在ui-router处理路由和状态时，我们主要关心的是程序处在哪个状态

```
<div ng-controller="Dome">
<div ui-view></div>
</div>
```

> 定义路由

```
.config(function($stateProvider,$urlRouterProvider){
$stateProvider.state('start',{
	url:'/start',
	templateUrl: 'partials/start.html'
});
})
```

这一步给状态分配了一个名为start 的状态，它通过状态导航，而非url

当用户导航到/start时，应用状态转到start，加载相应模版，

路径必须严格匹配url

```
url:'/ibox/:boxId'

/ibox/   工作

/ibox    不工作

```

> 嵌套路由

```
$stateProvider.state('inbox',{
url: '/inbox/:inboxId',
template:'<div ui-view> </div>',
controller: function($scope,$stateParams){
			$stateParams.inboxId
}

}).state('ibox.priority',{

url:'/priority'
})
```


- /inbox/1   匹配第一个状态
- /inbox/1/priority 匹配第二个状态

通过state声明称父子关系，，匹配url继承父级

####onEnter，onExit 进入离开视图=的回调函数

####stateParams

匹配后会将参数注入这里

```

url: 'inbox/:id/message/{sort}?from&to'

/box/123/message/asd?from=10&to=20

$stateParams = {
	id:123,
	sort:'asd',
	from:10,
	to:20
}
```

####urlRouterProvider

```
.config(function($urlRouterProvider){
$urlRouterProvider.when('','/inbox');

$urlRouterProvider.otherwise('/');
})
```


####ui-utils[使用工具包]

> install

```
bower install --save angular-ui-utils

angular.module('myApp',['ui.mask']);
```

####1.mask
真对 信用卡，手机号验证

A--任意字母

9--任意数字

*--任意字母数字

```
credit card：
<input ui-mask="9999999999999">
```

####2.ui-event

当想要处理angular自身不支持的事件时

```
<div ui-event="{dbclick:'show()'}">

```

####3.ui-format

处理字符串的包装器









