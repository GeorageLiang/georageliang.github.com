	---
	layout: post
	title:  "Angular5"
	date:   2015-06-19 22:40:11
	categories: Angular
	permalink: /md/angular5/
	---


AngularJS模块加载
===

####配置块

在应用启动之前，对模块进行配置

config阶段是你设置任何的provider的阶段。它也是你设置任何的指令，控制器，过滤器以及其它东西的阶段。
```
<body ng-app="myApp">
	<div ng-controller="haha">

	</div>
	<script>
		angular.module('myApp', []).config(function($provide,$routeProvider){
			$routeProvider.when('/',{
				controller:'balba',
				template:'babal.html'
			})

		})
	</script>
</body>
```
`注意：只有provider和constant可以注入到config（）中`

####运行块

在注入器创建之后执行

在run阶段，AngularJS会编译你的DOM并启动你的应用
```
angular.module("my",[]).run(function($scope){});
```

---
####Provider服务（$provide）

$provide服务负责告诉Angular如何创造一个新的可注入的东西：即服务(service)。

服务会被叫做provider的东西来定义，你可以使用

$provide来创建一个provider。你需要使用

$provide中的provider方法来定义一个provider

同时你也可以通过要求改服务被注入到一个应用的config函数中来获得$provide服务。下面是一个例子：

```
<body ng-app="myApp">
	<div ng-controller="haha as pp">
		{{pp.kk}}
	</div>
	<script>
	angular.module('myApp', []).config(function($provide){
		$provide.provider("greet",function(){
			this.$get = function(){
				return function(name){
					return "fuck"+name;
				}
			};
		});
	}).controller("haha",function(greet){
		this.kk = greet("you");
	})
</script>

</body>
```

在上面的例子中我们为一个服务定义了一个叫做greeting的新provider；我么可以把一个叫做greeting的变量注入到任何可注入的函数中（例如控制器，在后面会讲到）然后Angular就会调用这个provider的$get函数来返回这个服务的一个实例。

现在有趣的事情来了。factory，service以及value全部都是用来定义一个providr的简写，它们提供了一种方式来定义一个provider而无需输入所有的复杂的代码。例如，你可以用下面的代码定义一个和前面完全相同的provider：

```
app.config(function($provide) {
  $provide.factory('greeting', function() {
	return function(name) {
	  alert("Hello, " + name);
	};
  });
});
```

在幕后，AngularJS实际上是在调用前面出现的代码（就是$provide.provider的版本）

由于定义一个新的provider是如此的常用，AngularJS在模块对象上直接暴露了provider方法，以此来减少代码的输入量：

```
var myMod = angular.module('myModule', []);

myMod.provider("greeting", ...);
myMod.factory("greeting", ...);
myMod.value("greeting", ...);


myMod.provider('greeting', function() {
  this.$get = function() {
return function(name) {
  alert("Hello, " + name);
};
  };
});

myMod.factory('greeting', function() {
  return function(name) {
alert("Hello, " + name);
  };
});

myMod.value('greeting', function(name) {
  alert("Hello, " + name);
});
```

做的都是同一件事情

---

####注入器（$injector）

通过$provide注册的服务创建实例

每一个AngularJS应用都有唯一一个$injector

一旦你拥有了$injector，你可以动过调用get函数来获得任何一个已经被定义过的服务的实例。例如：

```
var greeting = $injector.get('greeting');
greeting('Ford Prefect');
```

你可以魔法般的将服务注入到任何函数中，只要你使用了注入器的invoke方法：

```
var myFunction = function(greeting) {
  greeting('Ford Prefect');
};
$injector.invoke(myFunction);
```

---

####配置provider
你可能会感到困惑：既然factorry和value能够节省那么多的代码，为什么还有人要使用provider。

原因：provider可以被注入到config函数中，你可以和它们进行一些交互。

```
myMod.provider('greeting', function() {
  var text = 'Hello, ';

  this.setText = function(value) {
     text = value;
  };

  this.$get = function() {
     return function(name) {
         alert(text + name);
     };
  };
});

myMod.config(function(greetingProvider) {
  greetingProvider.setText("Howdy there, ");
});

myMod.run(function(greeting) {
  greeting('Ford Prefect');
});
```

---
####controller

```
myMod.controller('MainController', function($scope) {
  // ...
});
```

实际上执行了

```
myMod.config(function($controllerProvider) {
  $controllerProvider.register('MainController', function($scope) {
// ...
  });
});
```

####filter等
[$provide具体内容请看](http://www.html-js.com/article/1980)