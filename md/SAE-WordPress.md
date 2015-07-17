---
layout: post
title:  "SAE-WordPress"
date:   2015-07-15 09:19:11
categories: wordpress
permalink: /md/SAE-WordPress/
---


SAE+wordpress搭建
===

[SAE搭建过程](http://jingyan.baidu.com/article/e5c39bf59af78639d7603383.html)

---
sina sae搭建wordpress数据库配置

**wp-config.php**


```
<?php
/**
 * WordPress 基础配置文件。
 *
 * 本文件包含以下配置选项：MySQL 设置、数据库表名前缀、密钥、
 * WordPress 语言设定以及 ABSPATH。如需更多信息，请访问
 * {@link http://codex.wordpress.org/zh-cn:%E7%BC%96%E8%BE%91_wp-config.php
 * 编辑 wp-config.php} Codex 页面。MySQL 设置具体信息请咨询您的空间提供商。
 *
 * 这个文件用在于安装程序自动生成 wp-config.php 配置文件，
 * 您可以手动复制这个文件，并重命名为“wp-config.php”，然后输入相关信息。
 *
 * @package WordPress
 */

// ** MySQL 设置 - 具体信息来自您正在使用的主机 ** //
/** The name of the database for WordPress */
define('DB_NAME', SAE_MYSQL_DB);

/** MySQL database username */

define('DB_USER', SAE_MYSQL_USER);

/** MySQL database password */

define('DB_PASSWORD', SAE_MYSQL_PASS);

/** MySQL hostname */
define('DB_HOST', SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT);


/** 创建数据表时默认的文字编码 */
define('DB_CHARSET', 'utf8');

/** 数据库整理类型。如不确定请勿更改 */
define('DB_COLLATE', '');

/**#@+
 * 身份认证密匙设定。
 *
 * 您可以随意写一些字符
 * 或者直接访问 {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org 私钥生成服务}，
 * 任何修改都会导致 cookie 失效，所有用户必须重新登录。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');

/**#@-*/

/**
 * WordPress 数据表前缀。
 *
 * 如果您有在同一数据库内安装多个 WordPress 的需求，请为每个 WordPress 设置不同的数据表前缀。
 * 前缀名只能为数字、字母加下划线。
 */
$table_prefix  = 'wp_';

/**
 * WordPress 语言设置，中文版本默认为中文。
 *
 * 本项设定能够让 WordPress 显示您需要的语言。
 * wp-content/languages 内应放置同名的 .mo 语言文件。
 * 要使用 WordPress 简体中文界面，只需填入 zh_CN。
 */
define('WPLANG', 'zh_CN');

/**
 * 开发者专用：WordPress 调试模式。
 *
 * 将这个值改为“true”，WordPress 将显示所有用于开发的提示。
 * 强烈建议插件开发者在开发环境中启用本功能。
 */
define('WP_DEBUG', false);

/* 好了！请不要再继续编辑。请保存本文件。使用愉快！ */

/** WordPress 目录的绝对路径。 */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

/** 设置 WordPress 变量和包含文件。 */
require_once(ABSPATH . 'wp-settings.php');
```

---

####XAMPP 本地运行wordpress

[连接](http://jingyan.baidu.com/article/148a192193a9984d71c3b191.html)

[wordpress下载](http://cn.wordpress.org/)

[XAMPP下载](http://pan.baidu.com/s/1pJDWuJx)

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
