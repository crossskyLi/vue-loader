<template>
<div>{{abc}}</div>
</template>
<script>
export default {
  name: "Input",

  options: {
    name: "Input"
  },

  data () {
    return {
      abc: '222'
    }
  },

  props: {
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    },
    tabindex: String,
    showWordLimit: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    abc (value) {
      console.log(value)
    }
  },

  methods: {
    foo () {
      console.log(this.abc)
    }
  }
}
</script>
