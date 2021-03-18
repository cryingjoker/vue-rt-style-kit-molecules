<script type="text/jsx">
import { cmpName } from './common'

export default {
  props:{
    hidden: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      cmpName
    }
  },
  computed:{
    cmpClasses(){
      return [
        `${this.cmpName}-nav__control`,
        { 'is--hidden': this.hidden }
      ]
    }
  },
  methods:{
    controlClick(e){
      return this.$emit('click', e)
    }
  },
  render(h){
    return <a class={this.cmpClasses} onClick={this.controlClick}>
      <rt-system-icons name={`chevron ${this.direction}`}></rt-system-icons>
      <div class={`${this.cmpName}-nav__item-opacity`}>
        <div class={`${this.cmpName}-nav__item-bg`}></div>
      </div>
    </a>
  }
}
</script>
