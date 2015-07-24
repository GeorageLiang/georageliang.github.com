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










