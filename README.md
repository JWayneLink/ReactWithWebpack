
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

### 安裝webpack
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
