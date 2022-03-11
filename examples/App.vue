<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header v-if="lang !== 'play'"></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { use } from '../src/locale';
  import zhLocale from '../src/locale/lang/zh';
  import enLocale from '../src/locale/lang/en';
  const lang = location.hash.replace('#', '').split('/')[1] || 'zh-CN';
  console.log(lang);
  const localize = lang => {
    switch (lang) {
      case 'zh-CN':
        use(zhLocale);
        break;
      case 'en-US':
        use(enLocale);
        break;
      default:
        use(enLocale);
    }
  };
  localize(lang);

  export default {
    name: 'app',

    computed: {
      lang() {
        return this.$route.path.split('/')[1] || 'zh-CN';
      },
      isComponent() {
        return /^component-/.test(this.$route.name || '');
      }
    },

    watch: {
      lang(val) {
        localize(val);
      }
    },

    mounted() {
      localize(this.lang);
    }
  };
</script>
