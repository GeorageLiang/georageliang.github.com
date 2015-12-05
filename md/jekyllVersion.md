---
layout: post
title:  "jekyllVersion"
date:   2015-03-31 09:19:11
categories: jekyll update
permalink: /md/jekyllVersion/
---
>jekyll 稳定版本：1.4.2

```
gem install jekyll --version "=1.4.2"
gem uninstall pygments.rb --version "=0.5.4"
gem install pygments.rb --version "=0.5.0"
```

>  but you haven't included the `jekyll-paginate` gem. Ensure you have `gems: [jekyll-paginate]` in your configuration file.
解决：

```
gem install jekyll-paginate

```

在yml中添加配置

```
 gems: [jekyll-paginate]

```


[jekyll-gh]:https://github.com/mojombo/jekyll
[jekyll]: http://jekyllrb.com
[jekyll 环境搭建](http://poly.emptystack.net/docs/installation/)

---
####git problem
电脑默认是采用SSL的方式提交会粗现如下的错误"fatal: unable to access 'https://XXX.xxx.com': server certificate verification failed. CAfile: /etc/ssl/certs/xxxxx.crt CRLfile: none"，大意就是证书认证不通过，所以不能访问https的网站。各种百度之后解决办法如下：
$ export GIT_SSL_NO_VERIFY=1 #意思是SSL不验证吧好像，export变量之后就可以输入密码和用户名了。

---
####linux ubuntu
- sudo /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
- sudo /usr/local/nginx/sbin/nginx -s reload
- ps -e
- sudo kill port
- grep ngnix
-  sudo apt-get remove 软件名

---

####ubuntu安装注意点
1.安装选项，选择其他选项
2.分区（4步）

- 新建分区（1）
 > 分内存（逻辑分区，空间起始位置，交换空间）
 
- 新建分区（2）

 > 分引导区（200MB就可以）（主分区，空间起始位置，EXT4日志文件）
 > 载点/boot
 
- 新建分区（3）

	> 主分区（相当于c盘）(主分区，空间起始 ，EXT4日志文件)
	> 载点/

- 新建分区（4）

	> 剩余空间（用于存文件）(主分区，空间起始 ，EXT4日志文件)
	> 载点/home
	
[具体安装传送](http://jingyan.baidu.com/article/76a7e409bea83efc3b6e1507.html)
