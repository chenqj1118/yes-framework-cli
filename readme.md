# Yigo MobileApp(H5) 项目模板
## 前置要求
* nodejs([nodejs官网](https://nodejs.org)),推荐10.16.3
* npm,推荐6.9.0
* git客户端([git](https://gitforwindows.org/))
## 安装
1. git clone https://github.com/jefferscn/yes-framework-cli.git
2. cd yes-framework-cli && npm install
3. npm start启动webpackdevserver
## 在docker上启动
* 下载image
    docker pull jefferscn/yes-framework:0.0.1
* 创建container
    docker run -p 8080:80 jeferscn/yes-framework:0.0.1
* 在本地浏览器中访问http://localhost:8080
* 可以使用vscode的remote-containers插件直对container中的代码进行开发和调试
## tips
> 第一个版本中存在一些警告，在后续版本中会处理，不影响使用