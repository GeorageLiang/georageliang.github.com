---
layout: post
title:  "Angular6"
date:   2015-07-02 22:40:11
categories: Angular
permalink: /md/angular6/
---

Angular学习之路由
===
angular1.2 之后 ngRoute被抽成独立模块

####使用

```
<script src="angular.js"></script>
<script src="angular-route.js"></script>

<body ng-app="myApp">
	<h4>ooooo</h4>
	<a href="#haha">hhh</a>
	<div ng-view></div>

	<script>
	angular.module('myApp', ['ngRoute']).config(function($routeProvider){
		$routeProvider.when('/haha',{
			template:'<h2>what</h2>'
		});

	});
	</script>
```

```
http://localhost:63342/angul/disabled.html#/haha
```

注：

- angular.module('myApp', ['ngRoute'])

---

####URL参数
参数以：开头（例如：name）

```
.when（'/inbox/:name',function(){}）

```

获取：
使用$routeParams,后面介绍

---

####意外定位(redirectTo)

找不到匹配url后重定位

```
.when()
.when()
.otherwise({
	redirectTo:'/'
})
```
---

####controller

路由中template对应的controller

---
####template & templateUrl

---
####resolve

---

####routeParams
路由参数对象

```
.when('/index/:name',function(){
controller:'hhh',
templateUrl:'views/ibox.html'
})
```

$routeParams对象

```
{
name:'all'
}
```

注意：要在控制器中访问这些变量，要把$routeParams注入到控制器里

```
app.controller('hhh',function($scope,$routeParams){
})
```
---

####$location服务

对window.location对象的API优雅的封装

当应用需要内部跳转时是$location服务的最佳场景·(#后的路由修改)

$location 没有刷新能力,这时候用到

> $window.location.href="http://www.baidu.com"

- **replace（）**
- **path（）**
- **host（）**
- **port（）**
- **url（）**
- **search()**

```
$location.search({
name:'a',
username:'as'
})

$location.search('name=a&username=as')
```

> http://localhost:63342/angul/disabled.html#?name=hh

通过传入新的查询参数，来修改URL中的查询部分

---
####路由模式
(angular)$location 默认是标签模式
即以#开头

```
$locationProvider.html5Mode(false);
$locationProvider.hashPrefix("!");
```
---

####HTML5模式
另一种路由模式

> http://your/index/all

---

####关于搜索引擎索引
为了便利爬虫

```
<meta name="fragment" content="!"/>
```
####路由事件
要给路由设置监听事件，用$rootScope监听

---

####异步地址变化
如果想在作用域声明周期外使用$location服务，要使用

$apply将函数变化抛到应用外部

---

待续：

- resolve
- HTML5模式
- 路由事件
- reloadOnsearch




---

AngularJs学习之依赖注入
===
####对象有三种方式获取对其依赖的控制权
- 内部创建依赖
- 全局变量引用
- 参数传递

依赖注入是通过第三种方式实现的

---

- 依赖注入会事先自动查找依赖关系
- 在运行期，注入器会创建依赖的实例
- angular 使用$injector 管理依赖关系和实例化
- 任何模块启动时，$injector 会负责实例化，并将所有依赖传进去

####annotate
提取依赖参数列表

```
 injector.annotate(function($q,greete){})
 //["$q","greete"]
```
---

####推断式注入声明
> 当编写控制器时，没有使用[]或显式声明，$injector会以此方式（分析函数参数注入）

原理：

```
$injector.invoke(function($http,greeter){});
```

缺点：压缩混淆代码会破坏，不适用压缩混淆

---

####显式注入声明

```
var control = function($scope,greet){}

control.$inject = ['$scope','greeter']


angular.module('myApp',[]).controller('my',control)
```

优点：压缩混淆不受影响
缺点：代码繁多

---

####行内注入声明（推荐）

优点：代码相对少，且压缩不受影响

```
angular.module('myApp')
.controller('my',['$scope','greete',function($scope,greete){

}])
```

---

###$injector API

---

####get()

---

####has()

---

####instantiate()

---

####invoke()

---

####ngMin

---


