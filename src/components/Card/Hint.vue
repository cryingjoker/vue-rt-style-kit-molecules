<script type="text/jsx">
  import variables from "../../variables.json";
  import debounce from 'debounce';
  import {hintStore} from "./HintStore";

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
        styleWidth: '',
        isSmall: false,
        posBottom: false,
        classList: '',
        isDesktop: false,
        hintText: ''
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
      this.determineDeviceType();
      this.calcTextLength();
      hintStore.initStore(this._uid, this.hintText);
      window.addEventListener('resize', debounce(this.determineDeviceType, 35));
      window.addEventListener('scroll', () => {
        this.hideHint();
      })
    },
    created() {},
    methods: {
      showHint($event) {
        if(hintStore.getHintData().hovered && $event.type === 'click') {
          this.hideHint();
        } else {
          this.pushCoords();
          setTimeout(() => {
            this.pushCoords();
          }, 25)
        }
      },
      hideHint() {
        hintStore.setActive(this._uid, null, false)
      },
      pushCoords(){
        let coords = {};
        let el = this.$el;
        coords.x = el.getBoundingClientRect().x;
        coords.y = el.getBoundingClientRect().y;
        hintStore.setActive(this._uid, coords, true)
      },
      determineDeviceType() {
        this.isDesktop = window.innerWidth > parseInt(variables["tablet-upper-limit"]);
      },
      calcTextLength() {
        this.hintText = this.$slots.default[0].text.replace(/\s+/g, ' ').trim().slice(0, 120);
      },
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

      if(this.isDesktop) {
        return <div class={this.hintClass} ref="hintBody">
          <div class="rtb-hint__icon" onMouseenter={this.showHint} onMouseleave={this.hideHint}>{toolTipType()}</div>
        </div>;
      } else {
        return <div class={this.hintClass} ref="hintBody">
          <div class="rtb-hint__icon" onMouseleave={this.hideHint} onClick={this.showHint}>{toolTipType()}</div>
        </div>;
      }
    }
  };
</script>
