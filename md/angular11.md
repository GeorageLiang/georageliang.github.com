Angular学习之Restangular
===

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

```
// Second way of creating Restangular object. URL and ID :)
var account = Restangular.one("accounts", 123);

// GET /accounts/123?single=true
$scope.account = account.get({single: true});
```

####支持http方法

```
var author = Restangular.one('author','123')

author.get()
author.getList("books")
author.post()
```

`个人理解`：one用来拼url串，get，getList，post用来操作

---

####自定义查询参数和头

---

####设置restangular

#####baseUrl

为发送后端api的所有请求设置baseUrl

```
angular.module('myApp',[’restangular])
.config(function(RestangularProvider){
RestangularProvider.setBaseUrl('');
})
```

#####添加元素转换？

----

####拦截器

- responseInterceptors（响应）

```
angular.module('myApp',['restangular'])
.config(function(RestangularProvider){
RestangularProvider.setResponseInterceptor(function(data,operation,what){
return data//对返回结果做操作并返回
})
})
```

- requestInterceptors （请求）

```
angular.module('myApp',['restangular'])
.config(function(RestangularProvider){

RestangularProvider.setRequestInterceptor(function(elem,operation,what){

return elem
})
})
```


- errorInterceptors (错误捕获)

```
angular.module('myApp',['restangular'])
.config(function(RestangularProvider){
RestangularProvider.setErrorInterceptor(function(resp){
	displayError();
	return false;
})
})
```

- 自定义Restangular服务

强烈建议将REs封装到一个自定义服务对象内，这样做非常有用，在每个自定义服务中都可以对Res进行独立设置

将Res服务注入到工厂函数中，就可以对Res进行封装，在工厂函数内部使用withConfig()创建自定义设置

```
angular.module('myApp',['restangular'])
.factory('MessageService',function(Restangular){
	var restAngular = Restangular.withConfig(function(Configurer){
		Configurer.setBaseUrl('/api/v2/messages');
})
})
```

---