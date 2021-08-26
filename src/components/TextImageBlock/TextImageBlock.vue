<script type="text/jsx">

  export default {
    name: "RtTextImageBlock",
    props: {
      bgColor: {
        type: String,
        default: 'b2c-white'
      },
      image: {
        type: String,
        default: ''
      },
      imageX2: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      reversed: {
        type: Boolean,
        default: false
      },
      video: {
        type: String,
        default: ''
      },
      tightText: {
        type: Boolean,
        default: false
      },
      isNested: {
        type: Boolean,
        default: false
      },
      imageStyle: {
        type: String,
        default: ''  //full-height, center
      },
      tabletReversed: {
        type: Boolean,
        default: false
      },
      mobileReversed: {
        type: Boolean,
        default: false
      },
      width: {
        type: [Number, String],
        default: 12
      },
      indent: {
        type: String,
        default: 'small' //medium, large
      }
    },
    watch: {
      width(newVal){
        this.localWidth = +newVal
      }
    },
    data: () => ({
      backgroundColor: null,
      localWidth: null
    }),
    computed: {
      mainWrapperClass() {
        let classList = 'row text-image-block__inner';
        if (this.reversed) {
          classList += " text-image-block__inner--reversed";
        }
        if (this.tabletReversed) {
          classList += " text-image-block__inner--tablet-reversed";
        }
        if (this.mobileReversed) {
          classList += " text-image-block__inner--mobile-reversed";
        }
        return classList;
      },
      blockClass() {
        let classList = 'text-image-block';
        if(this.bgColor) {
          this.backgroundColor = this.bgColor.includes('b2c-') ? this.bgColor.replace('b2c-', '') : this.bgColor;
          classList +=  ` color-block--${this.backgroundColor}`;
        }
        if(this.isNested) {
          classList += ' text-image-block--is-nested'
        }
        return classList;
      },
      contentClass() {
        let classList = 'rt-col-td-6';
        if(this.localWidth == 12) {
          if(this.tightText && this.reversed) {
            classList += ' rt-col-5'
          } else {
            classList += ' rt-col-6'
          }
        }
        if(this.localWidth == 10){
          classList += ' rt-col-5'
        }
        if(this.localWidth == 8){
          classList += ' rt-col-4'
        }
        if(this.imageStyle == 'center') {
          classList += ' d-f-as-c'
        }
        return classList;
      },
      contentInnerClass() {
        let classList = 'text-image-block__content-inner'
        if(!this.isNested || this.imageStyle != 'center') {
          classList += ' sp-t-1'
        }
        if(this.tabletReversed) {
          classList += ' td-sp-b-2 td-sp-t-none'
        } else {
          classList += ' td-sp-t-2 td-sp-b-none'
        }
        if(this.mobileReversed) {
          classList += ' md-sp-b-1-3 md-sp-t-none'
        } else {
          classList += ' md-sp-t-1-3 md-sp-b-none'
        }
        return classList
      },
      containerClass() {
        let classList = '';
        if(this.isNested) {
          classList += 'row'
        } else {
          classList += 'rt-container'
          if(this.indent == 'large') {
            classList += ' sp-v-wine'
          }
          if(this.indent == 'medium') {
            classList += ' sp-v-pink'
          }
          if(this.indent == 'small') {
            classList += ' sp-v-orange'
          }
        }
        return classList;
      },
      imageSrc() {
        if(window.devicePixelRatio > 1 && !!this.imageX2) {
          return this.imageX2
        } else {
          return this.image
        }
      },
      imageWrapperClass() {
        let classList = 'rt-col-td-6';
        if(this.localWidth == 12){
          classList += ' rt-col-6'
        }
        if(this.localWidth == 10){
          classList += ' rt-col-5'
        }
        if(this.localWidth == 8){
          classList += ' rt-col-4'
        }
        if(this.imageStyle == 'center') {
          classList += ' d-f-as-c'
        }
        return classList;
      }
    },
    mounted(){
      this.localWidth = +this.width
    },
    methods: {},
    render: function(h) {
      const bottomContentPart = () => {
        if(this.$slots.footnote) {
          return <div class="text-image-block__content-inner sp-t-2">
            {this.$slots.footnote}
          </div>
        } else {
          return null;
        }
      };
      const visualContent = () => {
        if(!!this.video) {
          let ytId = [];
          ytId = this.video.split(',');
          return <div class="text-image-block__video-wrapper d-flex">
            <rt-youtube video-id={ytId} disable-buttons={true} let-fullscreen={true} auto-play={true} pause-image={this.image}/>
          </div>
        } else {
          return <div class={"text-image-block__image-wrapper d-flex" + (this.imageStyle == 'full-height' ? " text-image-block__image-wrapper--full-height" : "")}>
            <img class="text-image-block__image" src={this.imageSrc}/>
          </div>
        }
      };
      const emptyColumn = () => {
        if(this.tightText && this.localWidth == 12 && this.reversed) {
          return <div class="rt-col-1"/>
        } else {
          return null
        }
      };
      const titleBlock = () => {
        if(this.title.length > 0 || this.$slots.title) {
          return <h2 class='rt-font-h2 sp-b-1'>
            {this.title.length > 0 ? this.title : this.$slots.title}
          </h2>
        } else {
          return null
        }
      };
      const additionalColumns = () => {
        if(this.localWidth == 10) {
          return <div class="rt-col-1 td-d-none"/>
        }
        if(this.localWidth == 8) {
          return <div class="rt-col-2 td-d-none"/>
        }
        return null
      };
      return <div class={this.blockClass}>
        <div class={this.containerClass}>
          <div class="rt-col">
            <div class={this.mainWrapperClass}>
              {additionalColumns()}
              {emptyColumn()}
              <div class={this.contentClass}>
                <div class="d-flex d-space-between flex-column text-image-block__content">
                  <div class={this.contentInnerClass}>
                    {titleBlock()}
                    {this.$slots['upper-content']}
                  </div>
                  {bottomContentPart()}
                </div>
              </div>
              <div class={this.imageWrapperClass}>
                {visualContent()}
              </div>
              {additionalColumns()}
            </div>
          </div>
        </div>
      </div>
    }
  };
</script>
