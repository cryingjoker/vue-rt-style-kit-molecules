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
      _name: null
    }
  },
  computed:{
    cmpClasses(){
      return [
        'rt-microtabs-coni__item',
        this._name !== this.activeTab ? 'is--hidden' : null
      ]
    },
    activeTab(){
      return this.$parent.activeTab
    }
  },
  beforeMount(){
    this._name = this.$parent.activateCnt(this)
  },
  destroyed(){
    this.$parent.destroy()
  }
}
</script>
