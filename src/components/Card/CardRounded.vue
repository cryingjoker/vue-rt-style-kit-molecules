<script type="text/jsx">
const componentsList = {};
import browser from '../../utils/browser'
import variables from "../../variables.json";


export default {
  name: "RtCardRounded",
  components: componentsList,
  props: {
    needResize:{
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  },
  data: () => ({}),
  computed: {
    label() {
      if (this.$slots.label) {
        return <p class="rt-font-h3 sp-t-0-3 sp-b-0-2">{this.$slots.label}</p>
      }
      return null
    },
    content() {
      if (this.$slots.content) {
        const classList = []
        if(this.backgroundColor.length == 0){
          classList.push('color-main05')
        }
        return <p class={classList.join(' ')}>{this.$slots.content}</p>
      }
      return null
    },
    image() {
      if (this.$slots.image) {
        this.$slots.image.forEach((img) => {
          if (img?.data) {
            img.data.staticClass = img.data.staticClass || ""
            img.data.staticClass += ' rt-card-round-img'
          }
        })
        return <div class="rt-card-round-img-container">{this.$slots.image}</div>
      }
      return null
    },
    logo() {
      if (this.$slots.logo) {
        this.$slots.logo.forEach((img) => {
          if (img?.data) {
            img.data.staticClass = img.data.staticClass || ""
            img.data.staticClass += ' rt-card-round__logo-img'
          }
        })
        return <div class="rt-card-round__logo">
          {this.$slots.logo}
        </div>
      }
      return null
    },
    colorClass(){
      if(this.backgroundColor.length > 0){
        return ['rt-card-round-color','rt-card-round-color--'+this.backgroundColor].join(' ')
      }
      return ['rt-card-round-white']
    },
    innerContentClass(){
      if(this.$slots.arrowText){
        return 'flex-fill'
      }
      return null
    },
    contentClass(){
      const classNames = ['rt-card-round__content', 'sp-b-1', 'sp-h-0-3']

      if(this.backgroundColor.length == 0){
        classNames.push('sp-t-1')
        classNames.push('rt-card-round__content-s')
      }
      if(this.$slots.arrowText){
        classNames.push('d-flex')
        classNames.push('flex-column')
      }
      return classNames.join(' ')
    },
    headerHtml(){


      if(this.$slots.headerHtml){
        return this.$slots.headerHtml
      }
      return null
    },
    arrowText(){
      if(this.$slots.arrowText){
        return <div class="rt-card-round-arrow d-flex flex-start-center sp-t-1 sp-h-0-1">
          <span class="rt-card-round-arrow__text">{this.$slots.arrowText}</span>
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" class="rt-card-round-arrow-icon"
               xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.1827 7.74924L8.97105 11.939L10.029 13.0024L15.5289 7.53097C15.6704 7.39021 15.75 7.19886 15.75 6.99927C15.75 6.79968 15.6704 6.60832 15.5289 6.46756L10.0289 0.996093L8.97105 2.05951L13.1826 6.24924L2.29622e-07 6.24924L2.95189e-07 7.74924L13.1827 7.74924Z"
                  fill="#101828"/>
          </svg>
        </div>
      }
    },
    mainClass(){
      const classList = ["rt-card-round"]
      if(this.color.length>0){
        classList.push('color-'+this.color);
      }
      return classList.join(' ')
    }

  },


  mounted() {
    if(this.needResize>0){
      setTimeout(()=>{
        window.dispatchEvent(new Event("resize"));
      },this.needResize)
    }
  },
  methods: {},
  render(h) {
    return <div class={this.mainClass}>
      <div class={this.colorClass}>
        {this.image}
        <div class={this.contentClass}>
          <div class={this.innerContentClass}>
          {this.logo}
          <div class="sp-h-0-1">
            {this.headerHtml}
            {this.label}
            {this.content}
          </div>
          </div>
          {this.arrowText}
        </div>

      </div>
    </div>
  }
};
</script>
