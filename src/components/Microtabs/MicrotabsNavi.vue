<template>
  <a
    :data-key="key"
    :class="cmpClasses"
    @click="setActive"
  >
    <slot></slot>
    <div :class="`${cmpName}-tgl`"></div>
  </a>
</template>

<script>
export default {
  name: 'RtMicrotabsNavi',
  props:{
    theme:{
      type: String,
      default: 'default'
    }
  },
  data(){
    return {
      key: null,
      rightPos: null,
      cmpName: 'rt-microtabs-navi__item'
    }
  },
  computed:{
    cmpClasses(){
      return [
        this.cmpName,
        `is--theme-${this.theme}`,
        {
          'is--active': this.key === this.activeTab,
          'is--hidden': this.$parent.navList[this.key] && this.$parent.navList[this.key].hidden
        }
      ]
    },
    activeTab(){
      return this.$parent.activeTab
    }
  },
  mounted(){
    let data = this.$parent.activateNav(this)
    this.key = data.key
    this.rightPos = data.rightPos
  },
  destroyed(){
    this.$parent.destroy()
  },
  methods:{
    setActive(e){
      this.$parent.$emit('setActiveTab', this.key)
    }
  }
}
</script>
