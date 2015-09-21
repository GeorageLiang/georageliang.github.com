---
layout: post
title:  "七牛云配置"
date:   2015-08-11 09:19:11
categories: other
permalink: /md/qiniu/
---



七牛云配置h5 Zip工程
===

---

####创建工程目录
【解压】

![Alt text](http://7xkj5m.com1.z0.glb.clouddn.com/微博桌面截图_20150811114630.jpg)


***例如***：

- 到E:盘中新建一个名为qiniu的文件夹
- 名为nongfuPage的zip包，在其中解压，生成同名文件
- 这个工程的***`工程目录名`***就为`nongfuPage`

工程目录创建成功



####进入cnzz统计，获取统计代码

- 用账号登录
- 点击添加站点（如图所示）
![Alt text](http://7xkj5m.com1.z0.glb.clouddn.com/微博桌面截图_20150811143424.jpg)

- 点击后出现以下界面

![Alt text](http://7xkj5m.com1.z0.glb.clouddn.com/微博桌面截图_20150811143458.jpg)

- 填好信息

> 域名：7xksmb.com2.z0.glb.qiniucdn.com
> 网站首页：http://域名/工程目录名/工程主网页
> `工程主页面`(通常是index.html，具体要看解压文件主目录里的.html文件)

- 点击确定添加站点

![Alt text](http://7xkj5m.com1.z0.glb.clouddn.com/微博桌面截图_20150811143629.jpg)

- 复制第二个（精简代码）后粘贴到主工程网页的代码中（如下）
- 将工程目录中的.html文件以记事本打开（例子中是index.html）
- 找到《/body》,紧贴着在上面粘贴之前复制的代码并保存即可

![Alt text](http://7xkj5m.com1.z0.glb.clouddn.com/微博桌面截图_20150811143851.jpg)


---

####准备上传

####首先需要下载一个上传工具

[下载链接](http://devtools.qiniu.io/qiniu-devtools-windows_386-current.zip)



####下载成功后
- 解压


- 找到qrsbox.exe文件
- 双击qrsbox.exe文件

####出现这样的界面
![enter image description here](http://developer.qiniu.com/docs/v6/tools/img/qrsbox-demo.png)

####按配置填好
- access_key
- secret_key
- 同步源目录
- 空间名

> 同源目录：工程本地所在地址

![Alt text](http://7xkj5m.com1.z0.glb.clouddn.com/微博桌面截图_20150811114630.jpg)

> 这里 `E:/qiniu` 就是同源目录
> `上传时别忘了删掉压缩包，别把压缩包也传上去`

`注意：`上传时请保证同源目录中仅有一个工程，且工程目录名唯一

***--配置信息详情请见配置文档--***

---

####点击确认

完成这些设置后，点击确认，QRSBox 便会开始进行初始化。初始化完成后，就开始文件的同步。用户可以在qrsbox的界面上看到同步的进程，大致如下图所示：

![enter image description here](http://developer.qiniu.com/docs/v6/tools/img/qrsbox-sync.png)

---

####访问

#####7xksmb.com2.z0.glb.qiniucdn.com/工程目录名/工程主页面

- 工程主页面(通常是index.html，具体要看解压文件主目录里的.html文件)

![Alt text](http://7xkj5m.com1.z0.glb.clouddn.com/微博桌面截图_20150811151615.jpg)

能访问的话就说明你成功了：）
