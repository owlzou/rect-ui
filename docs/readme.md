组件文档的原文件。

`package.json` 里的脚本：

| 命令       | 说明                                     |
| ---------- | ---------------------------------------- |
| docs:dev   | 启动本地静态服务器，用于开发。           |
| docs:build | 编译文档，结果在 `.vitepress/dist` 里。  |
| docs:serve | 启动本地静态服务器，测试构建完后的文档。 |
| docs:gen   | 根据组件源文件生成组件文档。             |
| deploy     | 将构建后的文档推送到 gh-page 。          |
