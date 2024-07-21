# 如何运行项目

## 前端

- 打开 frontend 文件夹 打开终端运行`npm i`安装所有依赖 然后运行 `npm run dev` 运行前端

## 后端

- 打开 IDEA 选择打开项目 选择 backend 文件夹打开 初次打开项目可能会加载 maven 较久 等待即可 如果右上角可以点击运行 就点击运行 如果不行 就找到 main/java 文件夹下的 BackendApplication 文件打开 然后就可以点击运行了

## 数据库

- 首先你需要下载安装 mysql 看这个=> https://blog.csdn.net/weixin_50002038/article/details/131041636

  - 安装器我发在了群里 直接从第三步安装开始即可
  - mysql 密码可以和我一样设置成 123456 这样就不用改 yml 配置文件了

- 然后创建一个数据库并运行数据库文件 我分为两种方式讲述：

  - Navicat：

    - 可以先看看这个：https://blog.csdn.net/m0_52318340/article/details/125504624
    - 注意点：数据库字符集选 utf8mb4 规则选 utf8mb4_general_ci
    - 跟教程一样打开数据库连接 然后运行数据库文件 选择 backend 文件夹里的 ocp.sql 即可

  - mysql 命令行：

    - 打开 mysql command line client 输入密码
    - 输入 `CREATE DATABASE ocp;` 命令创建数据库 ocp
    - 输入 `use ocp` 切换到 ocp 数据库
    - 输入 `source E:\Online-Consultation-Platform\backend\ocp.sql` 运行数据库文件

- 最后打开后端看看能否成功连接即可
