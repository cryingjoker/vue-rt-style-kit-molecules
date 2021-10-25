<script type="text/jsx">
import { cmpName, resizeHandler, resizeHandlerDestroy } from './common.js'
import MicrotabsControl from './MicrotabsControl.vue'
import './Microtabs.styl'
const offset = 8
const controlWidth = 32

const defaultConfig = () => {
  return {
    navList: [],
    cntList: [],
    activeTab: 0,
    allowNavLeft: false,
    allowNavRight: false,
    direction: 'right'
  }
}

export default {
  name: 'RtMicrotabs',
  components: { MicrotabsControl },
  props:{
    theme:{
      type: String
    },
    fit:{
      type: Boolean,
      default: true
    },
    defaultTabIndex: {
      type: Number,
      default: 0
    }
  },
  data(){
    return {
      cmpName,
      ...defaultConfig()
    }
  },
  computed:{
    cmpClasses(){
      return [
        this.cmpName,
        !this.$slots.cnt ? 'is--conveer' : 'is--tabs',
        {
          'is--fit-content': this.fit
        }
      ]
    },
    conveerStyles(){
      return {
        transform: `translateX(${this.activeTab ? -this.activeTab * 100 : 0}%)`
      }
    }
  },
  methods:{
    activateNav(cmp){
      this.navList.push(cmp)
      return {
        key: this.navList.length - 1
      }
    },
    activateCnt(cmp){
      this.cntList.push(cmp)
      return this.cntList.length - 1
    },
    activateParentEvent(){
      this.$nextTick(() => this.$emit(
        'onChange',
        this.navList[this.activeTab].$el,
        // Опциональная последовательность для simple темы (отображение иконок)
        this.cntList?.[this.activeTab]?.$el)
      )
    },
    fitItems(){
      if (!this.$refs.navigationEl) return
      let shown = []
      let hiddens = []
      let distance = 0
      let wrapWidth = this.$refs.navigationEl.clientWidth
      let navHiddenActivated = false
      this.navList.forEach((nav, key) => {
        if (
          nav.key < this.activeTab ||
          // Сравниваем по ширине, учитывая текущую позицию
          wrapWidth < distance + nav.$el.clientWidth + (this.navList.length - 1 === key ? 0 : (controlWidth + offset))
        ) {
          hiddens[nav.key] = true
          if (!navHiddenActivated) {
            distance += controlWidth
            navHiddenActivated = true
          }
        } else {
          shown.push(nav.key)
        }
        if (nav.key >= this.activeTab) {
          distance += nav.$el.clientWidth + offset
        }
      })
      this.navList.forEach(nav => nav.hidden = !!hiddens[nav.key])
      this.allowNavLeft = this.navList[0].hidden
      this.allowNavRight = this.navList[this.navList.length - 1].hidden
      // Если активный таб остался "за бортом"
      if (this.navList[this.activeTab] && this.navList[this.activeTab].hidden) {
        this.activeTab = shown[this.direction === 'right' ? 0 : shown.length - 1]
      }
      this.navList.splice(0, 0)
    },
    navLeft(){
      if (this.activeTab < 1) return
      this.activeTab--
      this.direction = 'left'
      this.fitItems()
      this.activateParentEvent()
    },
    navRight(){
      if (this.activeTab >= this.navList.length) return
      this.activeTab++
      this.direction = 'right'
      this.fitItems()
      this.activateParentEvent()
    },
    destroy(){
      let config = defaultConfig()
      this.activeTab = this.defaultTabIndex
      Object.keys(config).forEach(param => this[param] = config[param])
      this.fitItems()
    }
  },
  created() {
    this.activeTab = this.defaultTabIndex
  },
  mounted(){
    this.$emit('onReady', true) // Используется для выравнивания группы карточек
    this.$on('setActiveTab', (key, calculateFitItems = true) => {
      if (key !== this.activeTab) {
        this.direction = key > this.activeTab ? 'right' : 'left'
        this.activeTab = key
        this.activateParentEvent(key)
        if (calculateFitItems) {
            this.fitItems()
        }
      }
    })
    this.fitItems()
    resizeHandler(this, this.fitItems)
  },
  destroyed(){
    resizeHandlerDestroy(this)
  },
  render(h){
    const contentRender = () => {
      if (!this.$slots.cnt) return
      return <div
        class={`${this.cmpName}-cnt`}
        style={this.conveerStyles}
      >
        {this.$slots.cnt}
      </div>
    }
    return <div class={this.cmpClasses}>
      <div class={`${this.cmpName}-nav`} ref="navigationEl">
        <microtabs-control
          onClick={this.navLeft}
          direction="left"
          active-tab={this.activeTab}
          hidden={!this.allowNavLeft}
        ></microtabs-control>

        {this.$slots.nav}

        <microtabs-control
          onClick={this.navRight}
          direction="right"
          hidden={!this.allowNavRight}
        ></microtabs-control>
      </div>

      {contentRender()}
    </div>
  }
}
</script>
