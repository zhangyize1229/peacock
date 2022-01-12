## Quick start

This part walks you through the process of using peacock9 in a webpack project.

### Import peacock9

In main.js:

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
