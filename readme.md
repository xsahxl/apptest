
> 注：当前项目为 Serverless Devs 应用，由于应用中会存在需要初始化才可运行的变量（例如应用部署地区、服务名、函数名等等），所以**不推荐**直接 Clone 本仓库到本地进行部署或直接复制 s.yaml 使用，**强烈推荐**通过 `s init ` 的方法或应用中心进行初始化，详情可参考[部署 & 体验](#部署--体验) 。

# shltest 帮助文档
<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=shltest&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=shltest" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=shltest&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=shltest" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=shltest&type=packageDownload">
  </a>
</p>

<description>

简短的描述/介绍

</description>

<codeUrl>

- [:smiley_cat: 代码](这是一个测试应用)

</codeUrl>
<preview>

- [:eyes: 预览](http://auto.serverless-cd.1740298130743624.ap-southeast-1.fc.devsapp.net/)

</preview>


## 前期准备

使用该项目，您需要有开通以下服务：

<service>



| 服务 |  备注  |
| --- |  --- |
| 函数计算 |  部署函数 |
| 对象存储 |  oss 存储 |
| 容器镜像服务 |  使用镜像 |
| SAE |  测试样式 |

</service>

推荐您拥有以下的产品权限 / 策略：
<auth>



| 服务/业务 |  权限 |  备注  |
| --- |  --- |   --- |
| 函数计算 | AliyunFCFullAccess |  fc xx |
| 硬盘挂载 | AliyunNASFullAccess |  nas xx |
| VPC | AliyunVPCFullAccess |  vpc xx |
| 其它 | AliyunECSFullAccess |  ecs xx |

</auth>

<remark>

您还需要注意：   
个人项目，仅测试用

</remark>

<disclaimers>

免责声明：   
个人项目，仅测试用

</disclaimers>

## 部署 & 体验

<appcenter>
   
- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=shltest) ，
  [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=shltest) 该应用。
   
</appcenter>
<deploy>
    
- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
  - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
  - 初始化项目：`s init shltest -d shltest `
  - 进入项目，并进行项目部署：`cd shltest && s deploy - y`
   
</deploy>

## 应用详情

<appdetail id="flushContent">

# 帮助文档

- a
- b
- c

</appdetail>

## 使用文档

<usedetail id="flushContent">

# 使用文档

- a1
- b1
- c1

</usedetail>


<devgroup>


## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">  

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <center>微信公众号：`serverless`</center>                                                                                         | <center>微信小助手：`xiaojiangwh`</center>                                                                                        | <center>钉钉交流群：`33947367`</center>                                                                                           |
</p>
</devgroup>
