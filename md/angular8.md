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

####annotate()

返回一个由服务名称组成的数组

---

####get()

返回一个服务实例

---

####has()

找服务

---

####instantiate()

---

####invoke()

---

####ngMin

Angular设计的预压缩工具，能够减少定义依赖关系的工作量，它会遍历整个应用帮我们设置好依赖注入

```
angular.module('myApp',[])
.directive('myDirective',function($http){

})

.controller('IndexController'，function($scope,$q){

})
```


会将上面的转换成行内注入声明

> npm install -g ngmin

可编写在gulp 或 grunt里

ngmin input.js(输入文件) out.js（输出文件）
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








