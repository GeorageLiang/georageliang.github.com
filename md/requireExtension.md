---
layout: post
title:  "Require extension"
date:   2015-10-19 09:19:11 +0800
categories: javascript
permalink: /md/requireExtension/
---


requireJs-Extension
===
###---config---

---

###paths
键值对，key 是名称，value是地址

```
require.config({
    baseUrl: "/another/path",
    paths: {
        "some": "some/v1.0"
    },
    waitSeconds: 15
  });
```


###shim

由于使用require加载时，是异步调用，当相互依赖的两个js加载时，无法保证依赖的js先加载完事后再加载另一个js，所以需要配置shim，有些js会按照AMD的形式编写，这时就不需要配置shim例如：

backbone 1.1.2版本已经支持AMD，不需要配置shim，只需要配置下jquery paths即可

```
(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $)
```

---

AMD模块定义

```
define(['bar','foo'],function(bar,foo){
....

/* return ..*/
})
```

第一个参数是依赖，，定义这样一个匿名模块，依赖于bar，foo，
后面的回调函数中就可以使用这两个依赖模块中的方法了，最后可以选择性的提供模块出口（return）

```
define(function(require){

require("bar");
require("foo");

})
```
直接回调require，内部配置require依赖

---

CommonJS模块格式 定义模块

```
define(function(require, exports, module) {
        var a = require('a'),
            b = require('b');

        //Return the module value
        return function () {};
    }
);
```

如果你想你的模块是一个特定的类型就用module.exports。如果你想的模块是一个典型的“实例化对象”就用exports











