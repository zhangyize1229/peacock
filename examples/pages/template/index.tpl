<style scoped>
  .banner {
    text-align: center;
  }
  .banner-desc {
    padding-top: 50px;

    h1 {
      font-size: <%= titleSize >px;
      margin: 0;
      line-height: 48px;
      color: #555;
    }

    p {
      font-size: <%= paraSize >px;
      line-height: 28px;
      color: #888;
      margin: 10px 0 5px;
    }
  }
</style>
<template>
  <div>
    <div class="banner">
      <div class="banner-desc">
        <h1><%= 1 ></h1>
        <p><%= 2 ></p>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
  import throttle from 'throttle-debounce/throttle';
  
  export default {
    created() {
      this.throttledHandleScroll = throttle(10, true, index => {
        this.handleScroll(index);
      });
    },
    methods: {
      handleScroll(index) {
        const ele = this.$refs.indexMainImg;
        const rect = ele.getBoundingClientRect();
        const eleHeight = ele.clientHeight + 55;
        let calHeight = (180 - rect.top) * 2;
        if (calHeight < 0) calHeight = 0;
        if (calHeight > eleHeight) calHeight = eleHeight;
        this.mainImgOffset = calHeight;
      }
    },
    data() {
      return {
        lang: this.$route.meta.lang,
        mainImgOffset: 0
      };
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.throttledHandleScroll);
    },
    mounted() {
      window.addEventListener('scroll', this.throttledHandleScroll);
    }
  };
</script>