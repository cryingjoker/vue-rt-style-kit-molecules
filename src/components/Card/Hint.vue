<script type="text/jsx">
  import variables from "../../variables.json";
  import debounce from 'debounce';

  export default {
    name: "RtHint",
    props: {
      simpleToolTip: {
        type: Boolean,
        default: false
      },
      confirmation: {
        type: Boolean,
        default: false
      },
      confirmationPassed: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: false,
        styleWidth: '',
        isSmall: false,
        posBottom: false
      };
    },
    computed: {
      hintClass() {
        let className = 'rtb-hint';
        if(this.simpleToolTip) {
          className += ' rtb-hint--tooltip'
        }
        if(this.confirmation) {
          if(this.confirmationPassed) {
            className += ' rtb-hint--confirmed'
          } else {
            className += ' rtb-hint--denied'
          }
        }
        return className;
      }
    },
    mounted() {
      this.calcTextLength();
      this.calcWidth();
      this.countTextPos();
      window.addEventListener('resize', debounce(this.calcWidth, 35));
      window.addEventListener('resize', debounce(this.countTextPos, 35));
      window.addEventListener('scroll', debounce(this.countTextPos, 35));
      window.addEventListener('scroll', debounce(this.hideHint), 35);
    },
    created() {},

    methods: {
      showHint(){
        let hint = this.$el;
        if(hint.closest(".higher-z"))
          hint.closest(".higher-z").style.zIndex = 999;
        this.active = true;
        setTimeout(() => {
          this.active = true;
        }, 250)
      },
      hideHint(){
        let hint = this.$el;
        if(hint.closest(".higher-z"))
          hint.closest(".higher-z").style.zIndex = null;
        setTimeout(() => {
          this.active = false;
        }, 250)
      },
      calcWidth() {
        let el = document.querySelector('.rt-container');
        let styles = window.getComputedStyle(el);
        let contWidth = +styles.width.slice(0, -2) - (+styles.paddingLeft.slice(0, -2) + (+styles.paddingRight.slice(0, -2)));
        let hintWidth;
        if(window.innerWidth <= parseInt(variables["mobile-upper-limit"])){
          hintWidth = contWidth - 20;
        } else if(window.innerWidth <= parseInt(variables["tablet-upper-limit"])) {
          hintWidth = contWidth / 2 - 20;
        } else {
          hintWidth = contWidth / 4 - 20;
        }
        if(this.$slots.default[0].text.length <= 30) {
          this.isSmall = true;
          this.styleWidth = 'width: max-content';
        } else {
          this.styleWidth = 'width: ' + hintWidth + 'px';
        }
      },
      calcTextLength() {
        let text = this.$slots.default[0].text;
        while(text.length > 120) {
          text = text.slice(0, text.length - 1);
        }
        this.$slots.default[0].text = text;
      },
      countTextPos() {
        let classBuilder = '-';
        this.posBottom = !(this.$refs.hintBody.getBoundingClientRect().y > 140)
        if(!this.posBottom) {
          classBuilder += '-top';
        } else {
          classBuilder += '-bottom';
        }
        if(window.innerWidth > parseInt(variables["mobile-upper-limit"])) {
          if(this.$refs.hintBody.getBoundingClientRect().x > window.innerWidth - (window.innerWidth / 5)) {
            classBuilder += '-left';
          } else if(this.$refs.hintBody.getBoundingClientRect().x < window.innerWidth / 5){
            classBuilder += '-right';
          }
        } else {
          if(!this.isSmall) {
            setTimeout(() => {
              if(this.$refs.hintText) {
                let val = this.$refs.hintBody.getBoundingClientRect().x - 20;
                this.$refs.hintText.style.transform = 'none';
                this.$refs.hintText.style.left = -val + 'px';
                if(!this.posBottom) {
                  this.$refs.hintText.style.bottom = 'auto';
                  this.$refs.hintText.style.top = -this.$refs.hintText.getBoundingClientRect().height - 10 + 'px';
                } else {
                  this.$refs.hintText.style.top = 'auto';
                  this.$refs.hintText.style.bottom = '-30px';
                }
                this.$refs.textArrow.style.right = 'auto';
                this.$refs.textArrow.style.left = val + 'px';
              }
            },1);
          }
        }
        return(' rtb-hint__text' + classBuilder);
      }
    },
    render(h) {
      const toolTipType = () => {
        if(this.simpleToolTip) {
          return <span>?</span>
        }
        if(this.confirmation) {
          if(this.confirmationPassed) {
            return <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#57D9B7" cx="10" cy="10" r="10"/>
                <path stroke="#FFF" stroke-width="2" d="M5 10l3.793 3L16 7"/>
              </g>
            </svg>
          } else {
            return <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#FF0C0C" cx="10" cy="10" r="10"/>
                <path d="M10 10.207l-4.51 4.51 4.51-4.51 4.51 4.51-4.51-4.51zm0 0L14.207 6 10 10.207 5.793 6 10 10.207z"
                      stroke="#FFF" stroke-width="2"/>
              </g>
            </svg>
          }
        }
      };
      const hintText = () => {
        if(this.active) {
          return <div class={"rtb-hint__text" + this.countTextPos()} style={this.styleWidth} ref="hintText"
                      onMouseover={this.showHint} onMouseleave={this.hideHint}>
            {this.$slots.default}
            <div class="rtb-hint__text-triangle" ref="textArrow"/>
          </div>;
        } else {
          return null;
        }
      };

      return <div class={this.hintClass} ref="hintBody">
        <div class="rtb-hint__icon" onMouseover={this.showHint} onMouseleave={this.hideHint}>{toolTipType()}</div>
        {hintText()}
      </div>;
    }
  };
</script>
