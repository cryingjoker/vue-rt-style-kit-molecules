<template>
  <div class="rt-container">
    <div class="function-list row">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import FunctionItem from './FunctionItem.vue'

  export default {
    name: 'functionList',
    created () {
      this.$slots.default = this.$slots.default.filter(item => item.componentOptions && item.componentOptions.tag === 'function-item')
    },
    components: {
      FunctionItem
    }
  }
</script>
