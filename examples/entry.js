import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import peacock9 from 'main/index.js';
import hljs from 'highlight.js';
import title from './i18n/title';
import routes from "./route.config";
import i18n from './i18n';
import demoBlock from './components/demo-block';
import MainHeader from './components/header';
import SideNav from "./components/side-nav";

import "element-ui/lib/theme-chalk/index.css";
import "../packages/theme-chalk/lib/index.css";
import './demo-styles/index.scss';
import './assets/styles/common.css';

Vue.use(peacock9);
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component("side-nav", SideNav);
Vue.component('main-header', MainHeader);



Vue.config.productionTip = false;
console.log(routes);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  const data = title[route.meta.lang];
  for (let val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val];
      return;
    }
  }
  document.title = 'peacock9';
});
new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
