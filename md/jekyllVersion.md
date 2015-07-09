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


[jekyll-gh]:https://github.com/mojombo/jekyll
[jekyll]: http://jekyllrb.com
[jekyll 环境搭建](http://poly.emptystack.net/docs/installation/)


电脑默认是采用SSL的方式提交会粗现如下的错误"fatal: unable to access 'https://XXX.xxx.com': server certificate verification failed. CAfile: /etc/ssl/certs/xxxxx.crt CRLfile: none"，大意就是证书认证不通过，所以不能访问https的网站。各种百度之后解决办法如下：
$ export GIT_SSL_NO_VERIFY=1 #意思是SSL不验证吧好像，export变量之后就可以输入密码和用户名了。
