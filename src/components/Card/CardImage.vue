<script type="text/jsx">
export default {
  name: "RtCardImage",
  props: {
    cardImage: {
      type: String,
      default: '',
      required: true
    },
    version: {
      type: Number,
      default: 1
    },
    sizeType:{
      type: String,
      default: ''
    },
    href:{
      type: String,
      default: ''
    }
  },
  computed: {
    figureImageStyle() {
      const styleObject = {};
      styleObject.backgroundImage = "url(" + this.cardImage + ")";
      return styleObject;
    },
    cardClass(){
      const cardClassName = ["rt-card"]
      if(this.version == 1){
        cardClassName.push("rt-card-image")
      }else{
        cardClassName.push("rt-card-image-v"+this.version)
      }
      if(this.sizeType.length > 0){
        cardClassName.push("rt-card-image-type--"+this.sizeType)
      }
      return cardClassName.join(' ')
    },
    renderlabel(){
      if(this.$slots.label){
        return <div class="rt-card-image__label rt-font-h4 sp-b-0-4">
          {this.$slots.label}
        </div>
      }
      return null
    }
  },
  mounted: function () {
  },
  render: function (h) {
    if(this.version == 2){
      const gaObj = {
        type: 'card_click'
      }
      if(this.href.length > 0){
        return <a href={this.href} class={this.cardClass} v-ga-click={{data:gaObj}}>
          <span class="rt-card-image__figure-wrapper">
            <span style={this.figureImageStyle} class="rt-card-image__figure"/>
          </span>
          <span class="rt-card-image__content">
            {this.renderlabel}
            <span class="rt-card-image__body rt-font-small-paragraph">
              {this.$slots.body}
            </span>
            <span class="rt-card-image__arrow rt-font-small-paragraph sp-t-0-2">
              Подробнее <rt-system-icons name="arrow right"></rt-system-icons>
            </span>
          </span>
        </a>
      }
      return <div class={this.cardClass} v-ga-click={{data:gaObj}}>
        <div class="rt-card-image__figure-wrapper">
        <div style={this.figureImageStyle} class="rt-card-image__figure"/>
        </div>
        <div class="rt-card-image__content">
          {this.renderlabel}
          <div class="rt-card-image__body rt-font-small-paragraph">
            {this.$slots.body}
          </div>
          <div class="rt-card-image__arrow rt-font-small-paragraph sp-t-0-2">
            Подробнее <rt-system-icons name="arrow right"></rt-system-icons>
          </div>
        </div>
      </div>
    }
    return <div class={this.cardClass}>
      <div style={this.figureImageStyle} class="rt-card-image__figure"/>
      <div class="rt-card-image__content">
        <div class="rt-card__body">
          {this.$slots.body}
        </div>
        {this.$slots.list}
      </div>
    </div>
  }

}
;
</script>
