---
layout: post
title:  "Angular8"
date:   2015-07-22 22:40:11
categories: Angular
permalink: /md/angular8/
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






Angular学习之服务
===

> 控制器只有需要时才会被实例化，不需要时就被销毁了，当我们需要在应用整个生命周期中都保持数据，并能够在控制器之间进行通信的时候，这时我们就需要服务了

---

###什么是服务

服务是一个**单例对象**在应用中只实例化一次（被$injector实例）并且是延迟加载

---
####用途

服务提供了把与特定功能的方法集中在一起的接口

对底层操作的封装（例如将数据的请求，组装）

---

###服务的创建

####factory()

```
angular.module('mApp').factory('myservice',function(){

return {
"name":"my",
"getName": function(){}
}
});
```

factory 第二个参数这个函数整个生命周期只会被调用一次

####service()

```
angular.module('mApp').service('phoneService',function(){

this.getName= function(){

}
})
```

相当于factory，区别是factory 返回的是对象（{}）
而Service中定义的是个构造函数，service会自动通过new实例化服务返回服务实例

####constant()

将**常量**注册成服务

**常量**：(值和对象)

```
angular.module('myApp').constant('apiKey','123')
```

####value()

将**值**注册成服务

```
angular.module('myApp').value('api','123')
```

区别：

- 常量（constant）可以注入config，而值（value）不可以

用途：

- 配置config数据用constant
- 配置服务数据用value

####decorator()

$provider服务提供了在服务实例创建时对其进行拦截的功能

```
angular.module('myApp')
.config(function($provide){
$provide.decorator('Service',gitService)
})

//$delegate 服务对象
var gitService = function($delegate){

}
```


####provider()

所有服务工厂都是由$provide服务创建的，

$provider服务负责在在运行时期初始化这些提供者

提供者是一个具有$get()方法的对象，

$injector 通过调用

$get方法创建服务实例

所有服务的创建都构建在provider方法之上，provider()方法负责在$providerCache中注册服务

```
angular.module('myApp').factory('myservice',function(){
return {
	'username':'123'
}
})
```

两者等价

```
.provider('myservice',{

$get: function(){

return {
	'username':'asue'
}

}
})
```

如果希望在config()函数中可以对服务进行配置，必须要用provider()来定义服务



---


Angular学习之动画
===

> 由于angular中提倡尽量少使用jquery，这就使得强大的dom效果，动画，特效不能被方便的使用
> angular团队创建了ngAnimate模块，让我们的应用能够提供css和javascript动画

---

三种途径：
- css3
- js动画
- css3过渡

---

###安装

自1.2.0起，动画就不在是Angular核心的一部分了，他们存在于自己的模块中了

cdn地址
> http://cdn.bootcss.com/ionic/1.0.1/js/angular/angular-animate.js



---

#### $resource学习(简单了解下)

ngResource模块是一个可选的angularjs模块，如果需要使用，我们要单独引用js

```
<script type="text/javascript" src="/javascripts/angular-resource.js">
```

####应用

```
var User = $resource('/api/users/:userId', {userId:'@id'});
//后面的对象会最终匹配进url

User.get({id:'123'}, successFn, errorFn);

//get方法中的对象，最终传值并覆盖之前的{}

```

该方法向url发送一个get请求，并期望一个json类型的响应。这里会向/api/users/123发送一个请求，successFn处理请求成功响应，errorFn处理错误。

其他方法：

```
User.query(params, successFn, errorFn)
//同get()方法使用类似，一般用来请求多条数据。
```

```
save(params, payload, successFn, errorFn);
//save方法会发起一个post请求，params参数用来填充url中变量，对象payload会作为请求体进行发送
```

```
delete(params, payload, successFn,errorFn)
//delete方法一个DELETE请求，payload作为消息体进行发送
```

```
remove(params, payload, successFn, errorFn)
//同delete类似，不同的是remove用来移除多条数据
```

我们看可以定义处理成功以及处理失败的函数，这些函数接受的参数不仅仅是简单的对象，而是经过包装之后的对象，会被添加
- $save(), 
- $remove(), 
- $delete()

三个方法,调用这三个方法可以再次发送请求进行交互

```
User.get({id:'123'}, function(user){
  user.name = 'changeAnotherName';
  user.$save();
//这里等价于User.save({id:'123'},{name:'changeAnotherName'})
});
```

> get请求成功后返回user，我们调用save方法再次发送了请求

---

####Restangular

> 在xhr通信方面就不用$http那些了，restangular提供了更好的使用体验

####好处

#####1.promise

Restangular支持promise，这样就可以使用链式操作啦.haha

#####2.清晰明了

通俗易懂

#####3.全Http方法支持

支持所有http方法

#####4.忘记URL

不需要事先知道URL或提前指定他们（对比resource）

#####5.资源嵌套

直接处理嵌套资源，无需创建新的resangular实例

#####6.一个实例

在使用过程中仅需要创建一个res资源对象实例

---

####安装

[下载](https://github.com/mgonto/restangular)

`注`rest 依赖LO-Dash或Underscore，为了保证rest可以正常运行，需要至少引入一个包

```
angular.module('myAp',[]).factory('UserService',function(Restangular){

})
```

####Restangular对象介绍

两种方法创建拉取数据对象，可以为拉取数据的对象设置基础路由

```
var User =  Restangular.all('users');
```

请求根路径; /user

```
var allUser = User.getList();//get /users
```
通过单个对象发送嵌套请求

```
var oneUser = Restangular.one('users','abc123');
//get /users/abc123

oneUser.get().then(function(user){
user.getList('in');
//
})
//get /users/abc123/in
```

####创建主restangular对象的三种方法

```
var User =  Restangular.all('users');
```

```
// Stating main object
Restangular.one('accounts', 1234)
```

```
// Gets a list of all of those accounts
Restangular.several('accounts', 1234, 123, 12345);
```

---

####两种返回形式

then()
```
var baseAccounts = Restangular.all('accounts');

// This will query /accounts and return a promise.
baseAccounts.getList().then(function(accounts) {
  $scope.allAccounts = accounts;
});
```

$object
```
$scope.accounts = Restangular.all('accounts').getList().$object;
```

---

####post

```
var baseAccounts = Restangular.all('accounts');
var newAccount = {name: "Gonto's account"};
// POST /accounts
baseAccounts.post(newAccount);
```

```
var myBuilding = {
    name: "Gonto's Building",
    place: "Argentina"
  };

  // POST /accounts/123/buildings with MyBuilding information
  firstAccount.post("Buildings", myBuilding).then(function() {
    console.log("Object saved OK");
  }, function() {
    console.log("There was an error saving");
  });
```

####get

```
// Just ONE GET to /accounts/123/buildings/456
Restangular.one('accounts', 123).one('buildings', 456).get()
```

```
// Just ONE GET to /accounts/123/buildings
Restangular.one('accounts', 123).getList('buildings')
```

---






