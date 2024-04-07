
console.log('hello webpack')

import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import '../public/index.css'


// 最新版本使用的是ReactDOM.createRoot
// 如果使用ReactDOM.render()控制台會報warnning錯誤
const root = ReactDOM.createRoot(document.getElementById("root"));

// 渲染
root.render(<App />);
