<template>
  <div>select</div>
</template>
<script>
export default  {
  props: {
    source: {
      type: Object,
      default: () => {
        return {
          dic: [],
          label: '',
          placeholder: '',
        }
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>