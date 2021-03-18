<script type="text/jsx">
import { cmpName } from './common'

export default {
  name: 'RtMicrotabsNav',
  props:{
    theme:{
      type: String,
      default: 'default'
    }
  },
  data(){
    return {
      key: null,
      themeLocal: null,
      cmpName: `${cmpName}-nav__item`
    }
  },
  computed:{
    cmpClasses(){
      return [
        this.cmpName,
        this.key !== this.activeTab ? `is--from-${this.key > this.activeTab ? 'right' : 'left'}` : null,
        this.themeLocal !== 'default' ? `is--theme-${this.themeLocal}` : null,
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
  methods:{
    setActive(e){
      this.$parent.$emit('setActiveTab', this.key)
    }
  },
  mounted(){
    this.themeLocal = this.$parent.theme || this.theme
    let data = this.$parent.activateNav(this)
    this.key = data.key
  },
  destroyed(){
    this.$parent.destroy()
  },
  render(h){
    return <a class={this.cmpClasses} data-key={this.key} onClick={this.setActive}>
      {this.$slots.default}
      <div class={`${this.cmpName}-opacity`}>
        <div class={`${this.cmpName}-tgl`}></div>
        <div class={`${this.cmpName}-bg`}></div>
      </div>
    </a>
  }
}
</script>
