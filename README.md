# 拉勾 `vue-app-base` 作业

### 说明文档

本项目配置分为 4 部分：

- `webpack.common.js`: 开发和生产环境共用的 webpack 配置项
- `webpack.dev.js`: 开发环境的 webpack 配置项
- `webpack.prod.js`: 生产环境的 webpack 配置项
- `.eslintrc.js`: eslint 配置

### `webpack.common.js`

#### 使用的 Loader 和其作用

1. `vue-loader`：由于该项目使用 vue 语言，需要配置相应的 loader 来加载`.vue`扩展名的文件
2. `babel-loader`：配合`@babel/preset-env` 使用转译 ES6
3. `eslint-loader`：在运行打包之前先验证特定文件的格式是否正确
4. `css-loader`&`style-loader`&`less-loader`：加载样式文件
5. `file-loader`：加载其他资源文件到`assets` 文件夹并指定保留文件名和扩展名

#### 使用的 Plugin 和其作用

1. `vue-loader/lib/plugin`: vue-loader 的必备插件
2. `html-webpack-plugin`：加载指定 html 文件，并传入上下文，指定 favicon 地址

### `webpack.dev.js`

1. `webpack`:

   - `webpack.DefinePlugin`：传入公共参数，如`BASE_URL`
   - `webpack.HotModuleReplacementPlugin`: HMR 必备插件，完成热刷新

2. `webpack-merge`:

   - `merge` 函数合并两个配置文件且只发生必要覆盖

3. `webpack-dev-server`: 完成打包后启动服务器，开启 HMR

#### 运行打包命令

```bash
# "dev": "webpack --config webpack.dev.js"
$ yarn dev
# "serve": "webpack-dev-server --open --config webpack.dev.js"
$ yarn serve
```

### `webpack.prod.js`

#### 使用的 Plugin 和其作用

1. `webpack`:

   - `webpack.DefinePlugin`：传入公共参数，如`BASE_URL`

2. `copy-webpack-plugin`：在生产模式下复制指定文件夹到生产目录
3. `clean-webpack-plugin`: 在生产模式下先清除以前生产目录

#### 运行打包命令

```bash
# "prod": "webpack-dev-server --open --config webpack.prod.js"
$ yarn prod
# "build": "webpack --config webpack.prod.js"
$ yarn build
```

### `.eslintrc.js`

```bash
# "lint": "eslint ./src/main.js"
$ yarn lint
```

### 作业内容

1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构
2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具）
3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务
4. 尽可能的使用上所有你了解到的功能和特性
   PS `base_code` 文件夹内有原始项目基础结构压缩文件
