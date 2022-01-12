## 快速上手

本节将介绍如何在项目中使用 peacock9。

### 引入 peacock9

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import peacock9 from 'peacock9';
import 'peacock9/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(peacock9);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
