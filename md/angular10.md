Angular学习之XHR通信
===

[$http][$resource]

---

#### $http

简单封装了原生的XMLHttpRequest对象，这个函数返回一个promise对象具有success和error两个方法

```
$http({
method: 'GET',
url：'/get/'
}).success(function(data,status,headers,config){})

.error(function(data,status,headers,config){

})

```

####返回处理

1. then()

```
promise.then(function(resp){
//正确响应
},function(resp){

//错误响应
}

)
```

2.success()&error()

```
promise.success(function(data,status,headers,config){
//成功处理
})

promise.error(function(data,status,headers,config){
//非成功处理
})
```

`区别`：then接收到的是完整的响应对象

`注`：在下一个digest循环执行之前，http方法调用后不会被真正执行

```
$scope.$apply(function(){
$http(function(){
method:'GET',
url:'/get/'
})

})
```

####快捷方法

```
$http.get('/gert/')
```

```
$http.post('/gert/',{})
```

```
$http.jsonp('/gert/')
```

####响应对象

- data
- status
- heads
- config
- statusText


####缓存

```
$http.get('/api/',{cache:true})

```

由于开启缓存设置，angular默认使用$cahceFactory,angular在启动时自动创建


```
var lru = $cacheFactory('lru',{capacity:20})

$http.get('api/',{cahce:lru})
.then()
```

最新的20个请求会被缓存

在config配置(自定义lru缓存)

```
.config(function($httpProvider,$cacheFactory){

$httpProvider.defaults.cache = $cacheFactory('lru',{capacity:20})

})
```

####拦截器

- request

- response

- requestError

- responseError


创建拦截器

```
.factory('myInterceptor',function($q){

var interceptor = {

'request':function(config){ return config },
'response':function(response){ return response },
'requestError':function(rejection){ return rejection
//或return response新的promise
}
'responseError':function(config){ return rejection
//或return response新的promise
}

}
})
```



注册拦截器

```
.config(function($httpProvider){
$httpProvider.interceptors.push('myInterceptor')
})
```




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


