<template>
  <div class="wm-filter-option">
    <component :is="source.component" v-bind="$props" v-on="$listeners" @change="handleChange" />
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
import Emitter from '../../../src/mixins/emitter';
import search from "./input"
import size from "./autocomplete";
import status from "./checkbox";
import picker from "./picker"
import user from "./select"
export default {
  name: "WmFilterOption",
  componentName: 'WmFilterOption',
  mixins: [Locale , Emitter],
  components: {
    search,
    size,
    status,
    picker,
    user
  },
  props: {
    source: Object,
    props: Object,
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'WmFilter') {
          parent = parent.$parent;
        } else {
          return true;
        }
      }
      return false;
    },
  },
  methods: {
    handleChange(data) {
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch('WmFilter', 'change', '');
        }
      });
    },
  }
}
</script>