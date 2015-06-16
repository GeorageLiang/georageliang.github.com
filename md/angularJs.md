---
layout: post
title:  "Angular"
date:   2015-06-11 22:40:11
categories: Angular
permalink: /md/angularJs/
---


AngularJs 学习
===

---
####`内置指令篇` `注：笔记中双大括号暂用{}表示`
####1.ng-disabled

-  用途:禁用，类比于disabled

```javascript
	<input type="text" ng-model="someThing">
	<button ng-disabled="!someThing">Button</button>
```
####输入内容按钮才会取消禁止

---
####2.ng-readonly

- 用途:只读，类比于readonly

```javascript
	<input type="text" ng-model="hello1">
	<input type="text" ng-readonly="!hello1" value="sdsd">
```
####输入内容按钮才会取消只读

---
####3.ng-checked

- 用途:选中，类比于checked

```javascript
	<input type="checkbox" ng-init="chek=true" ng-checked="chek" ng-model="chek">
	<label>{/{chek}/}</label>
```
####点击复选框，label变化

---
####4.ng-selected

- 用途：选择，类比于select

```
	<input type="checkbox" ng-model="op">
	<select>
		<option   value="123">11</option>
		<option   ng-selected="op" value="1234">112</option>
	</select>
	<label>{op}</label>
```

####通过checkbox控制select

####`问题`

- 1.slect不变
- 2.select下拉框多出空白

```
	<input type="checkbox" ng-model="op">
	<select ng-model="slect">
		<option   value="123">11</option>
		<option   ng-selected="op" value="1234">112</option>
	</select>
	<label>{op}</label>
	<label>{slect}</label>
```

---

####`解惑` 

- 1.slect不变

> (ng-selected想象成类似于css的显示作用，所以改变option的选中状态，只改变显示不影响select的model变化)

- 2.select下拉框多出空白

> 由于select的model没有初始化，所以无法找到对应的option，就显示成一个空的option，当点击时直接选中第一个option

---

####5.ng-href & ng-src

- 用途：类似于href，src

```
	<body ng-App="mytry">
		<a ng-href="{ssrc}">{ssrc}</a>
		<script>
		angular.module("mytry",[]).run(function($rootScope){
			$rootScope.ssrc = "http://baidu.com"
		});
		</script>
	</body>
```

```
	<body ng-App="mytry">
		<div ng-controller="try">
			<img ng-src="{ssrc}">
		</div>
		<script>
		angular.module("mytry",[]).controller("try",function($scope){
			$scope.ssrc = "http://baidu.com"
		});
		</script>
	</body>
```

`扩展`

- $rootScope是controller外层ng-App的作用域
- $scope是controller局部作用域,
- 内部可以继承父层

```
	<body ng-App="mytry">
		<span >{{rootSrc}}</span>
		<div ng-controller="try">
		<a ng-href="{ssrc}">{ssrc}</a>
		</div>
		<script>
			angular.module("mytry",[]).run(function($rootScope){
				$rootScope.rootSrc = "http://baidu.com"
			}).controller("try",function($rootScope,$scope){
				$scope.ssrc = $rootScope.rootSrc
			});
		</script>
	</body>
```

- $scope上保存瞬时状态数据，持久化状态数据保存在服务中，服务的作用是处理模型持久化
- 不要将$scope赋值为值类型的对象
- 控制器尽量简单，业务逻辑写在服务和指令中

---

sublimetext2---
angular-snippets

```
// Settings in here override those in "User/Preferences.sublime-settings", and
// are overridden in turn by file type specific settings.
{
  "auto_complete_selector": "source - comment, meta.tag - punctuation.definition.tag.begin",
  "auto_complete_triggers":
    [
      {
      "characters": "ng-controller=\"*",
      "selector": "punctuation.definition.string"
      }
    ]
}
```

---

####ng-include

`问题`

使用ng-include 不显示插入内容

- 不能访问file协议资源（使用firfox可以解决）
- 建议使用 ng-include="'include.html'"


```
<body ng-app="hah">
	<div ng-controller="my">
		{h}
	</div>
	<div ng-include="'include.html'" ng-controller="my" onload="h=1"></div>
	<script type="text/javascript">
		angular.module('hah', []).controller('my',function($scope){
			$scope.h =0;
		});
	</script>

</body>
```
include.html

```
	<h3>{ h }</h3>
```

- 引入页享有controller的scope

---

####ng-switch
```
	<input type="text" ng-model="h">
	<div ng-switch on="h">
		<div ng-switch-when="123">{h}</div>
		<div ng-switch-default>switch-default</div>
	</div>
```

---

####ng-view

ng-view 用来设置路由管理的html视图

---

####ng-if

根据表达式的值在dom中生成或移除一个元素
`区别`于 ng-show，ng-hide：
- 并非通过css隐藏，而是正真的生成和删除节点

---

####ng-repeat

- $index
- $first
- $middle
- $last
- $even
- $odd

```
	<body ng-app="my">
	<table ng-controller="ha">
		<thead>
			<tr>
				<th>ind</th>
				<th>name</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="p in arr">
				<td ng-if="$even">{$index}</td>
				<td ng-if="$even">{p.name}</td>
			</tr>
		</tbody>
	</table>

	<script type="text/javascript">
	angular.module('my', []).controller("ha",function($scope){
		var ar1 = {
			name:"ar1"
		};
		var ar2 = {
			name:"ar2"
		}
		$scope.arr = [ar1,ar2];
	});
	</script>
```

`注意`
- even 和odd 是index 的值,index从0开始
- middle

---

####ng-init

小实例的变量初始化

---

####{} & ng-bind &ng-cloak
ng-bind的简略形式，常用于行内文本中
`注意`
- 页面加载时未渲染元素会发生闪烁

解决闪烁
- 使用ng-bind
- 使用ng-cloak

---

####ng-bind-template
绑定多个表达式

```
	<div ng-bind-template="{hello} {name}></div>
```

---

####ng-model
不用多说了

---

####ng-show & ng-hide
类似show ，hide

- 元素的显示和隐藏是通过添加和移除ng-hide这个css类实现的，.ng-hide被预先定义在angular的css文件中

---

####ng-change
表单元素变化便执行函数
- 类比于backbone event change

```
	<div ng-controller="ha">
		<input type="text" ng-model="x" ng-change="hh()">
		{ww}
	</div>
		

	<script type="text/javascript">
	angular.module('my', []).controller("ha",function($scope){
		$scope.hh = function(){
			$scope.ww = parseInt($scope.x)*2;
		}
	});
	</script>
```

---

####ng-form
用于form嵌套，比如一个父表单中有多个子表单，子表单中有3个验证通过时父表单便可以提交。

```
	<body ng-app="my">
	<form name="iForm" ng-controller="ha">
		<div ng-form ="vaD">
				<input 
					type="text" name="userName" 
					placeholder= {filed.placeholder}
					ng-required = {filed.isRequire} 
					ng-model="username"
				/>
			<span ng-show="!vaD.userName.$valid">
				erro
			</span>
			<span ng-show="vaD.userName.$error.required">
				must
			</span>
			
		</div>
		<input type="submit" ng-disabled="iForm.$invalid">
	</form>
		

	<script type="text/javascript">
	angular.module('my', []).controller("ha",function($scope){
		$scope.filed = {
			placeholder: "username",
				name:"username",
				isRequire:true
		}
	
	});
	</script>
</body>
```

`问题`
- 关于动态生成有验证功能的表单
- 无法动态生成ng-model

---

####ng-click 
不解释了，大家都懂得

---

####ng-select
动态生成select标签，感觉很强大
- 通常用法：ng-model + ng-option
- as 作为表现

```
	<div ng-controller="ha">
		<select ng-model="icity" 
			ng-options=
			"city.value as city.name group by city.group for city in citys"
		>
		</select>
		{icity}
	</div>
	<script type="text/javascript">
	angular.module('my', []).controller("ha",function($scope){
		$scope.citys = [
			{
				name:"1",
				value:"11",
				group:"r"
			},
			{
				name:"2",
				value:"22",
				group:"r"
			},
			{
				name:"23",
				value:"23",
				group:"rq"
			}
		]	
	});	
	</script>
```

---

####ng-submit
用于同onsubmit事件绑定

---

####ng-class
动态设置元素的类

```
	<div ng-class="{red:x>5}" ng-if="x>5">haha</div>
	<button ng-click="x = random()"></button>
	此处{}不为双引号
```

---

####ng-attr-(suffix)

有时浏览器会对属性进行很苛刻的限制，这个时候可以用这个

```
	<svg>
		<circle cx={cx}> </circle>
	</svg>
```

```
	<svg>
		<circle ng-attr-cx={cx}> </circle>
	</svg>
```

---

`directive practice`

```
	<html>
    <head>
        <script src="http://cdn.bootcss.com/angular.js/1.4.0-rc.2/angular.min.js"></script>
    </head>
    <body ng-app="mytry">
        <input type="text" ng-model="ii">
        <haha mytrr="{{ii}}"></haha>
       
        <script>
            angular.module("mytry",[]).directive("haha",function(){
                return {
                    restrict:"EA",
                    scope:{
                        yy:"@mytrr"
                    },
                    replace:true,
                    template:"<div>{{yy}}</div>"
                }
            })
        </script>
    </body>
</html>
```

---

`controller 作用域问题`

> 字符串，数字，布尔型变量为值复制（父作用域影响子作用域，子作用于不影响父作用域）；
> 数组，对象，函数是引用复制（相互影响）；

```
	 <div ng-controller="parent">
            <h3>{{parentt.aa}}</h3>
            //<h3>{{parentt}}</h3>
            <button ng-click="haha()">sss</button>
            <div ng-controller="child">
                <h3>{{parentt.aa}}</h3>
                //<h3>{{parentt}}</h3>
            <button ng-click="haha1()">sss</button>
            </div>
        </div>
        <script>
            angular.module("mytry",[]).controller("parent",function($scope){
                $scope.parentt ={
                    aa: "22sss"
                };
                // $scope.parentt = "22sss";
                $scope.haha = function(){
                    $scope.parentt.aa = "parent";
                     // $scope.parentt = "parent";
                }

            }).controller("child",function($scope){
                
                $scope.haha1 = function(){
                    $scope.parentt.aa = "child";
                     // $scope.parentt = "child";
                }
            });
        </script>
```

`扩展`

- 值复制时，子作用域点击，父级作用域影响解除，子作用独立，初始时由父作用域控制

---





AngularJs (第二弹)
===
`过滤器篇`

> 过滤器用来格式化给用户展示的数据，包括内置过滤器和自定义过滤器

---
####两种使用方式
- javascript 通过$filter调用过滤器

```
	app.controller("demo",function($scope,$filter){
		$scope.name = $filter('lowercase')('Ari');
	})	
```

> Uncaught Error: [ $injector:nomod ]
> 注入器错误

- html形式 使用过滤器

```
	{{123.123 | number:2}}
```

---

####currency

- 将数值格式化货币格式

```
	{{133 | currency}}
```

---

####date

- 日期过滤器

> Error: [ng:areq] 
> ng-app未指定或者controller指定未定义js

```
		<body ng-app = "mytry">
        <div ng-controller="demo">
         {{today | date:'MM'}}
        </div>
    
        <script>
                 angular.module("mytry",[]).controller("demo",function($scope){
                     $scope.today = new Date();
                  
                 })  
        </script>
    </body>
```

---

####filter
- 从给定数组中选择一个子集并生成一个新数组返回
- 例如做搜索时过滤结果

这个过滤器的第一个参数
- 字符串

```
	{{ ['ari','aa','bb'] | filter:'a'}}
```
- 对象

```
	 {{  [ {'name':'12'},{'name':'22'} ] | filter: {'name':'12'} }}
```

- 函数（自定义函数过滤）

```
	 <body ng-app="mytry" >
        
        <div ng-controller="demo">
        {{ [ 'Ai','bi' ] | filter: kk }}
        </div>
    
        <script>
                 angular.module("mytry",[]).controller("demo",function($scope){
                     $scope.kk = function(str){
                        return str[0] == str[0].toUpperCase()

                     }
                  
                 })  
        </script>
    </body>
```

这个过滤器的第二个参数

- true(严格)
- false(不区分大小写

---

####json

将对象过滤成json字符串


