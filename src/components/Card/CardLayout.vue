<script type="text/jsx">

  import variables from "../../variables.json";

  const componentsList = {};

  export default {
    name: "RtCardLayout",
    components: componentsList,
    props: {
      width: {
        type: Number,
        default: 9
      },
      singleRow: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      layout: '',
      inTabs: false
    }),

    computed: {
      wrapperClass(){
        let className = 'card-layout';
        if(this.width) {
          className += ` card-layout-${this.width}`
        }
        if(this.singleRow) {
          className += ' card-layout--nowrap'
        }
        return className;
      }
    },

    mounted () {
      this.specifyLayout();
      window.addEventListener('resize', this.specifyLayout);
      this.inTabs = this.$el.parentNode.className === 'rt-tabs-content__item';
    },
    updated() {
      this.specifyCardClass();
      window.addEventListener('resize', this.specifyCardClass);
      this.inTabs = this.$el.parentNode.className === 'rt-tabs-content__item';
    },
    methods: {
      specifyLayout(){
        if(window.innerWidth <= parseInt(variables["tablet-upper-limit"])){
          this.layout = 'swiper';
        } else {
          this.layout = 'grid';
        }
      },
      specifyCardClass() {
        if(this.$slots.cards && window.innerWidth <= parseInt(variables["tablet-upper-limit"]) && this.$el.childNodes[0].childNodes[4] === document.querySelector('.rt-carousel__overlay')){
          this.$el.childNodes[0].childNodes[4].childNodes.forEach(el => {
            el.classList !== undefined && el.classList.contains('card-layout__slide') ? el.classList.add('rt-carousel__slide') : null;
          });
        } else if(!!this.$slots.cards && window.innerWidth <= parseInt(variables["laptop-upper-limit"]) && window.innerWidth >= parseInt(variables["laptop-lower-limit"])) {
          this.$refs.layout.childNodes.forEach(el => {
            el.classList !== undefined && el.classList.contains('card-layout__slide') ? el.classList.add('rt-carousel__slide') : null;
          });
        } else if(!!this.$slots.cards && window.innerWidth >= parseInt(variables["desktop-lower-limit"])) {
          this.$refs.layout.childNodes.forEach(el => {
            el.classList !== undefined && el.classList.contains('rt-carousel__slide') ? el.classList.remove('rt-carousel__slide') : null;
          });
        }
      }
    },
    render(h){
      if(this.inTabs) {
        if(this.layout === 'swiper'){
          return <div class="specified-card-layout">
            <rt-carousel>{this.$slots.cards}</rt-carousel>
            <div class="row">
              <div class="rt-col-3 rt-col-ld-12 rt-col-td-6 rt-col-md-3 rt-space-top">
                {this.$slots["side-text"]}
              </div>
            </div>
          </div>
        } else {
          return <div class="row">
            <div class="specified-card-layout" ref="layout">
              <div class={this.wrapperClass}>
                <div class="rt-col">
                  <div class="row">
                    {this.$slots.cards}
                  </div>
                </div>
              </div>
              <div class="rt-col-3 rt-col-ld-12 rt-col-td-6 rt-col-md-3 rt-space-top">
                {this.$slots["side-text"]}
              </div>
            </div>
          </div>
        }
      } else {
        if(this.layout === 'swiper'){
          return <div class="specified-card-layout">
            <rt-carousel>{this.$slots.cards}</rt-carousel>
            <div class="rt-container">
              <div class="rt-col">
                <div class="row">
                  <div class="rt-col-3 rt-col-ld-12 rt-col-td-6 rt-col-md-3 rt-space-top">
                    {this.$slots["side-text"]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        } else {
          return <div class="rt-container">
            <div class="rt-col">
              <div class="row">
                <div class="specified-card-layout" ref="layout">
                  <div class={this.wrapperClass}>
                    <div class="rt-col">
                      <div class="row">
                        {this.$slots.cards}
                      </div>
                    </div>
                  </div>
                  <div class="rt-col-3 rt-col-ld-12 rt-col-td-6 rt-col-md-3 rt-space-top">
                    {this.$slots["side-text"]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      }
    }
  };
</script>
