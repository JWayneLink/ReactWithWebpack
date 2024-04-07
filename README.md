
### Webpack 5 + React 18
1. 安裝 Webpack 以及建置其設定檔
2. 透過 Babel 讓 Webpack 能夠編譯 React 檔案
3. 打包 JS、HTML 與 CSS 檔案
4. 用 dev server 啟用 hot reload

### Webpack
- 用途： Webpack 是一個靜態模塊打包工具，用於將前端項目中的各種資源（JavaScript、CSS、圖片、字體等）打包成靜態資源文件，以便在瀏覽器中加載。
- 模塊打包： Webpack 將項目中的各種模塊、資源按照依賴關係打包成一個或多個靜態資源文件，以優化加載性能和開發效率。
- 功能： Webpack 不僅僅是一個模塊打包工具，它還具有像代碼分割、懶加載、熱模塊替換（HMR）等功能，可以幫助開發者更高效地組織和管理前端項目。
  
### Concept of Webpack
1. Entry: 程式進入點
2. Output: 程式打包位置
3. Loader: 辨識不同檔案類型的module
4. Plugins: 用來處理特定類型的檔案
5. Mode: 預設值是 production，還可以是 development 或 none，透過這個設定，webpack 會自動啟用最佳化的策略。

### 安裝 webpack
- `npm init -y`
- `npm i webpack -D`
- `npm i webpack-cli -D`
- "-D" 指令套件被加入到 devDependencies 的項目中

```diff
{
  "name": "react_with_webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
+    "webpack": "^5.91.0",
+    "webpack-cli": "^5.1.4",
  }
}
```

### 安裝 babel
- `npm i babel-loader -D`
- `npm i @babel/core @babel/preset-env @babel/preset-react -D`
- ```diff
{
  "name": "react_with_webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
+    "@babel/core": "^7.24.4",
+    "@babel/preset-env": "^7.24.4",
+    "@babel/preset-react": "^7.24.1",
  }
}
```

### 安裝 React
- `npm i react react-dom`
```diff
{
  "name": "react_with_webpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### 設定 Webpack.config.js
```js
// webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

console.log('__dirname',__dirname);

module.exports = {
    mode: 'development', // or production or none
    entry: ['./src/index.js', './src/App.js'], // 程式進入點(可為多個檔案)
    output: {
        path: path.resolve(__dirname, './build'), //路徑
        filename: 'bundle.js', //文件名稱
        clean: true, //是否清空前一次打包內容
        publicPath: "/public/"
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/, // 正規表達式，確認哪些檔案要套用 loader (js or jsx都可編譯)
                exclude: /node_modules/, //排除的文件
                // use 可以是{} or []，陣列包含 loader & options key
                // []解析的順序是由右往左，由下往上
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: true,
            minify: true,
        }),
        new MiniCssExtractPlugin({
            filename: './css/index.css'
        })
    ],
    devServer: {
        port: 3000,
    }
};
```
