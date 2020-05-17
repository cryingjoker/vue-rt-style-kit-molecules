<script type="text/jsx">
  import variables from "../../variables.json";
  import debounce from 'debounce';
  import {hintStore} from "./HintStore";

  export default {
    name: "RtHintBody",
    props: {},
    data() {
      return {
        active: true,
        styleWidth: '',
        isSmall: false,
        posBottom: false,
        classList: '',
        isDesktop: false,
        textContent: '',
        activeUid: null,
        posLeft: '',
        posTop: '',
        isHovered: false
      };
    },
    computed: {
      hintTextClass() {
        let className = 'rtb-hint__text';
        if(this.isSmall) {
          className += ' rtb-hint__text--small'
        }
        return className;
      }
    },
    mounted() {
      hintStore.addWatcher(this._uid, ()=> {
        this.getActiveUid();
      });
      window.addEventListener('resize', debounce(this.calcWidth, 35));
      window.addEventListener('resize', debounce(this.countTextPos, 35));
      window.addEventListener('scroll', this.hideHint);
    },
    created() {},

    methods: {
      showHint() {
        this.calcWidth();
        setTimeout(() => {
          this.active = true;
        }, 15)
      },
      hideHint() {
        setTimeout(() => {
          this.active = false;
        }, 15)
      },
      setHovered() {
        this.isHovered = true;
      },
      removeHovered() {
        this.isHovered = false;
        !hintStore.getHintData().hovered ? this.hideHint() : false;
      },
      getActiveUid() {
        if(this.textContent != hintStore.getHintData().text) {
          this.textContent = hintStore.getHintData().text;
        }
        if(hintStore.getHintData().hovered) {
          this.posLeft =
            (window.innerWidth <= parseInt(variables["mobile-upper-limit"]) && !this.isSmall)
              ? 20
              : hintStore.getHintData().coords.x;
          this.posTop = hintStore.getHintData().coords.y;
          this.countTextPos();
        }
        if(!hintStore.getHintData().hovered && !this.isHovered)
          this.hideHint();
        else
          this.showHint();
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
        if(this.textContent && this.textContent.length <= 30) {
          this.isSmall = true;
          this.styleWidth = 'width: max-content';
        } else {
          this.isSmall = false;
          this.styleWidth = 'width: ' + hintWidth + 'px';
        }
      },
      countTextPos() {
        let classBuilder = '-';
        this.classList = '';
        if(hintStore.getHintData().coords) {
          this.posBottom = !(hintStore.getHintData().coords.y > 140);
          if(!this.posBottom) {
            classBuilder += '-top';
          } else {
            classBuilder += '-bottom';
          }
          if(window.innerWidth > parseInt(variables["mobile-upper-limit"])) {
            if(hintStore.getHintData().coords.x > window.innerWidth - (window.innerWidth / 5)) {
              classBuilder += '-left';
            } else if(hintStore.getHintData().coords.x < window.innerWidth / 5){
              classBuilder += '-right';
            }
          } else {
            if(!this.isSmall) {
              setTimeout(() => {
                if(this.$refs.hintText) {
                  let val = hintStore.getHintData().coords.x - 20;
                  this.$refs.textArrow.style.right = 'auto';
                  this.$refs.textArrow.style.left = val + 'px';
                }
              },1);
            } else {
              if(hintStore.getHintData().coords.x > window.innerWidth - (window.innerWidth / 3)) {
                classBuilder += '-left';
              } else if(hintStore.getHintData().coords.x < window.innerWidth / 3){
                classBuilder += '-right';
              }
            }
          }
          this.classList = ' rtb-hint__text' + classBuilder;
        }
      }
    },
    render(h) {
      if(this.active) {
        return <div class={this.hintTextClass + this.classList} style={this.styleWidth + ";left:" + this.posLeft + "px;top:" + this.posTop + "px"} ref="hintText"
                    onMouseenter={this.setHovered} onMouseleave={this.removeHovered}>
          {this.textContent}
          <div class="rtb-hint__text-triangle" ref="textArrow"/>
        </div>;
      } else {
        return null;
      }
    }
  };
</script>
