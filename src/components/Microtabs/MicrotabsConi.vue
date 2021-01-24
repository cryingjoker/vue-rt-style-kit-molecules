<template>
  <div
    :class="cmpClasses"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RtMicrotabsConi',
  data(){
    return {
      key: null
    }
  },
  computed:{
    cmpClasses(){
      return [
        'rt-microtabs-coni__item',
        this.key !== this.activeTab ? 'is--hidden' : null
      ]
    },
    activeTab(){
      return this.$parent.activeTab
    }
  },
  beforeMount(){
    this.key = this.$parent.activateCnt(this)
  },
  destroyed(){
    this.$parent.destroy()
  }
}
</script>
