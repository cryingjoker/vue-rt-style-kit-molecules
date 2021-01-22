<template>
  <div
    :class="cmpClasses"
    @click="setActive"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RtMicrotabsNavi',
  data(){
    return {
      _name: null
    }
  },
  computed:{
    cmpClasses(){
      return [
        'rt-microtabs-navi__item',
        this._name === this.activeTab ? 'is--active' : null
      ]
    },
    activeTab(){
      return this.$parent.activeTab
    }
  },
  beforeMount(){
    this._name = this.$parent.activateNav(this)
  },
  destroyed(){
    this.$parent.destroy()
  },
  methods:{
    setActive(e){
      this.$parent.$emit('setActiveTab', this._name)
    }
  }
}
</script>
