<template>
  <div
    :class="cmpClasses"
  >
    <div :class="`${cmpName}-navi`" ref="navigationEl">
      <a :class="[
          `${cmpName}-navi__control`,
          { 'is--hidden': !allowNavLeft }
        ]"
        @click="navLeft"
      >
        <rt-system-icons name="chevron left"></rt-system-icons>
      </a>
      <slot name="navi"></slot>
      <a :class="[
          `${cmpName}-navi__control`,
          { 'is--hidden': !allowNavRight }
        ]"
        @click="navRight"
      >
        <rt-system-icons name="chevron right"></rt-system-icons>
      </a>
    </div>
    <div
      v-if="$slots.coni"
      :class="cmpName+'-coni'"
      :style="conveerStyles"
    >
      <slot name="coni"></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

const defaultConfig = () => {
  return {
    navList: [],
    cntList: [],
    activeKey: 0,
    activeTab: 0,
    allowNavLeft: false,
    allowNavRight: false,
    direction: 'right'
  }
}
export default {
  name: 'RtMicrotabs',
  data(){
    return {
      cmpName: 'rt-microtabs',
      ...defaultConfig()
    }
  },
  computed:{
    cmpClasses(){
      return [
        this.cmpName,
        `is--direction-${this.direction}`,
        !this.$slots.coni ? 'is--conveer' : 'is--tabs'
      ]
    },
    conveerStyles(){
      return {
        transform: `translateX(${this.activeTab ? -this.activeTab * 100 : 0}%)`
      }
    }
  },
  mounted(){
    this.$on('setActiveTab', key => {
      if (key !== this.activeTab) {
        this.direction = key > this.activeTab ? 'right' : 'left'
        this.activeTab = key
      }
    })
    this.fitItems()
  },
  methods:{
    activateNav(cmp){
      this.navList.push(cmp)
      let getPosLeft = el => el.getBoundingClientRect().left
      let offset = 8
      let navEl = cmp.$el
      return {
        key: this.navList.length - 1,
        rightPos: getPosLeft(navEl) + navEl.clientWidth + offset
      }
    },
    activateCnt(cmp){
      this.cntList.push(cmp)
      return this.cntList.length - 1
    },
    fitItems(){
      this.$nextTick(() => {
        let shown = []
        let hiddens = []
        let offset = 8
        let controlWidth = 32
        let distance = controlWidth
        let wrapWidth = this.$refs.navigationEl.clientWidth
        this.navList.forEach(nav => {
          if (
            nav.key < this.activeKey ||
            wrapWidth < distance + nav.$el.clientWidth + offset + controlWidth
          ) {
            hiddens[nav.key] = true
          } else {
            shown.push(nav.key)
          }
          if (nav.key >= this.activeKey) {
            distance += nav.$el.clientWidth + offset
          }
        })
        this.navList.forEach(nav => nav.hidden = !!hiddens[nav.key])
        this.allowNavLeft = this.navList[0].hidden
        this.allowNavRight = this.navList[this.navList.length - 1].hidden
        if (this.navList[this.activeTab].hidden) {
          this.activeTab = shown[this.direction === 'right' ? 0 : shown.length - 1]
        }
        this.navList.splice(0, 0)
      })
    },
    navLeft(){
      this.activeKey--
      this.direction = 'left'
      this.fitItems()
    },
    navRight(){
      this.activeKey++
      this.direction = 'right'
      this.fitItems()
    },
    destroy(){
      let config = defaultConfig()
      Object.keys(config).forEach(param => this[param] = config[param])
    }
  }
}
</script>
