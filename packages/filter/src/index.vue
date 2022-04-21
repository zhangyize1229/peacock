<template>
  <div class="wm-filter">
    <template v-if="schema && schema.length>0">
      <filter-option v-for="(i,index) in schema" :key="index" :model="i"></filter-option>
    </template>
    <slot v-else ></slot>
  </div>
</template>
<script>
import Locale from "../../../src/mixins/locale";
import Emitter from '../../../src/mixins/emitter';
import filterOption from "./filter-option"
export default {
  name: "WmFilter",
  componentName: 'WmFilter',
  components: { filterOption },
  mixins: [Locale, Emitter],
  props: {
    schema: Array,
    value: [],
  },
}
</script>