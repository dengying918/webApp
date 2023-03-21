# ant4.0 迁移到5.0 过程
1、npm install --save antd@5.x
2、如果你需要使用 v4 废弃组件如 Comment、PageHeader，请安装 @ant-design/compatible 与 @ant-design/pro-layout 做兼容：
npm install --save @ant-design/compatible@v5-compatible-v4
执行 npm install --save @ant-design/pro-layout 报错  原因   pro-layout 6.3的版本与antd5.0不适配

报错提示 npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! Could not resolve dependency:
npm ERR! peer antd@"4.x" from @ant-design/pro-layout@6.32.1

执行 npm uninstall --save @ant-design/pro-layout
接着执行 npm install --save @ant-design/pro-layout 

3、全局样式替换
弃用 less，采用 CSS-in-JS，更好地支持动态主题。底层使用 @ant-design/cssinjs 作为解决方案。
所有 less 文件全部移除，less 变量不再支持透出。
产物中不再包含 css 文件。由于 CSS-in-JS 支持按需引入，原本的 antd/dist/antd.css 也已经移除，如果需要重置一些基本样式请引入 antd/dist/reset.css。
如果需要组件重置样式，又不想引入 antd/dist/reset.css 从而导致污染全局样式的话，可以尝试在应用最外层使用App 组件，解决原生元素没有 antd 规范样式的问题。

4、组件调整  5.0 对比4.0 组件做了很多调整  
执行npx -p @ant-design/codemod-v5 antd5-codemod src 批量修改 文件夹中的4.0组件到5.0
