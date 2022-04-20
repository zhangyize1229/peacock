<template>
  <div class="wm-filter-option">
    <component :is="source.component" v-bind="$props" v-on="$listeners" @change="handleChange" />
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
import Emitter from '../../../src/mixins/emitter';
import Input from "./input"
import Radio from "./autocomplete";
import Select from "./checkbox";
import DatePicker from "./picker"
import TabSelect from "./select"
export default {
  name: "WmFilterOption",
  componentName: 'WmFilterOption',
  mixins: [Locale , Emitter],
  components: {
    Input,
    Radio,
    Select,
    DatePicker,
    TabSelect
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
    handleChange() {
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch('WmFilter', 'change', '');
        }
      });
    },
  }
}
</script>