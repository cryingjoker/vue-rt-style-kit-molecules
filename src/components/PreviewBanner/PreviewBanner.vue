<script type="text/jsx">
import './PreviewBanner.styl'

const componentsList = {};

export default {
  name: "RtPreviewBanner",
  props: {
    background:{
      type: String,
      default: 'main-color005'
    },
    color: {
      type:String,
      default: ''
    }
  },
  data: () => ({}),

  mounted: function () {
  },
  beforeMount() {

  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeDestroy: function () {
  },

  methods: {},
  computed: {
    wrapperClass(){
      const wrapperClassList = ['rt-preview-banner'];

      if(this.background.length>0){
        wrapperClassList.push('color-block--'+this.background)
      }
      if(this.color.length > 0){
        wrapperClassList.push('color-'+this.color)
      }
      return wrapperClassList.join(' ')
    },
    renderDate(){
      if(this.$slots.date){
        return <div class="rt-preview-banner__date">{this.$slots.date}</div>
      }
      return null
    },
    renderLabel(){
      if(this.$slots.label){
        return <div class="sp-t-0-3 sp-b-0-3">{this.$slots.label}</div>
      }
      return null
    },
    renderContent(){
      if(this.$slots.content){
        return <div>{this.$slots.content}</div>
      }
      return null
    },
    renderFooter(){
      if(this.$slots.footer){
        return <div class="sp-t-1-2">{this.$slots.footer}</div>
      }
      return null
    }
  },
  render(h) {


    return <div class="rt-container">
      <rt-col size={12}>
        <div class={this.wrapperClass}>

          <rt-row>
            <rt-col size={5} tablet-size={6}>
              <div class="rt-preview-banner__image d-flex flex-v-end">
              {this.$slots.image}
              </div>
            </rt-col>
            <rt-col size={1} t-hide={true}></rt-col>
            <rt-col size={6} tablet-size={6} class="d-flex flex-v-center rt-container__body">
              <div class="td-sp-h-2 td-sp-v-2 sp-r-2-3 md-sp-h-1 md-sp-v-1">
                {this.renderDate}
                {this.renderLabel}
                {this.renderContent}
                {this.renderFooter}
              </div>
            </rt-col>
          </rt-row>
        </div>
      </rt-col>

    </div>

  }
}

</script>
