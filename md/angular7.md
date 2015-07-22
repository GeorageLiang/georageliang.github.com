---
layout: post
title:  "Angular7"
date:   2015-07-22 22:40:11
categories: Angular
permalink: /md/angular7/
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