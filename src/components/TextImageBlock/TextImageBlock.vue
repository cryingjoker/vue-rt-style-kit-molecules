<script type="text/jsx">
  import variables from "../../variables.json";

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
      }
    },
    data: () => ({
      backgroundColor: null
    }),
    computed: {
      wrapperClass() {
        let classList = 'row text-image-block__inner';
        if (this.reversed) {
          classList += " text-image-block__inner--reversed";
        }
        return classList;
      },
      blockClass() {
        let classList = 'text-image-block';
        if(this.bgColor) {
          this.backgroundColor = this.bgColor.includes('b2c-') ? this.bgColor.replace('b2c-', '') : this.bgColor;
          classList +=  ` color-block--${this.backgroundColor}`;
        }
        return classList;
      },
      contentClass() {
        let classList = 'rt-col-td-6';
        if(this.tightText) {
          classList += ' rt-col-5'
        } else {
          classList += ' rt-col-6'
        }
        return classList;
      },
      containerClass() {
        let classList = 'sp-v-4 td-sp-v-3 md-sp-v-2';
        if(!this.isNested) {
          classList += ' rt-container'
        }
        return classList;
      },
      imageSrc() {
        if(window.devicePixelRatio > 1 && !!this.imageX2) {
          return this.imageX2
        } else {
          return this.image
        }
      }
    },
    mounted(){},
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
          return <div class="text-image-block__image-wrapper d-flex">
            <img class="text-image-block__image" src={this.imageSrc}/>
          </div>
        }
      };
      const emptyColumn = () => {
        if(this.tightText) {
          return <div class="rt-col-1"/>
        } else {
          return null
        }
      };
      return <div class={this.blockClass}>
        <div class={this.containerClass}>
          <div class="rt-col">
            <div class={this.wrapperClass}>
              <div class={this.contentClass}>
                <div class="d-flex d-space-between flex-column text-image-block__content">
                  <div class="text-image-block__content-inner">
                    <h2 class="rt-font-h2 sp-t-1 td-sp-t-2 md-sp-t-1-3">
                      {this.title.length > 0 ? this.title : this.$slots.title}
                    </h2>
                    {this.$slots['upper-content']}
                  </div>
                  {bottomContentPart()}
                </div>
              </div>
              {emptyColumn()}
              <div class="rt-col-6 rt-col-td-6">
                {visualContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  };
</script>
