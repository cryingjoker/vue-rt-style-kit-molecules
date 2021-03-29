<script type="text/jsx">
import {commentSliderStore} from "./CommentSliderStore";
import {bannerStore} from "../BannerV2/BannerStore";

export default {
  name: "RtCommentSlider",

  props: {
    name: {
      type: String,
      default: false
    },
    duration: {
      type: [String, Number],
      default: 3000
    },
    slideDuration: {
      type: [String, Number],
      default: 200
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    preventScroll: {
      type: Boolean,
      default: true
    },

  },

  data: () => ({
    ids: [],
    touchmovex: 0,
    content: {},
    activeIndex: [0, 0, 0, 0, 0],
    activeIds: [0, 0, 0, 0, 0],
    goLeft: false,
    goRight: false,
    isHover: false,
    tickPersent: 0,
    timeout: null,
    mousedownFlag: false,
    touchdownFlag: true,
    mousedownX: 0,
    delta: 0,
    touchstartX: false,
    touchstartY: false,
    pauseAnimation: false,
    rowBoBack: false,
    buttonIsHover: false,
    containerHeight: 0

  }),


  mounted: function () {
    this.addInStore()
    this.addWatcher();

    this.tick();
    // this.$refs.row.scroll({
    //   left: this.lineLeft - window.innerWidth / 3,
    //   behavior: 'smooth'
    // });
  },

  updated() {
  },

  beforeDestroy: function () {
    this.removeWatcher()
  },
  methods: {
    mousedown(e) {
      this.mousedownFlag = true
      this.mousedownX = e.clientX
    },
    mousemove(e) {
      if (this.mousedownFlag) {
        const delta = e.clientX - this.mousedownX
        this.$refs.row.$el.style.transform = 'translateX(' + delta + 'px)'
        if (Math.abs(delta) > this.$refs.row.$el.childNodes[0].clientWidth * 0.3) {
          this.deltaRowMove(true)
          if (delta < 0) {
            this.setNextActive()
          } else {
            this.setPrewActive()
          }
          this.touchstartX = null;
          this.touchstartY = null;
        }

      }
    },
    mouseup() {
      if (this.mousedownFlag || this.touchdownFlag) {
        this.mousedownFlag = false
        this.touchdownFlag = false
        this.touchstartX = null;
        this.touchstartY = null;

        if(!this.goLeft && !this.goRight && !this.buttonIsHover){
          this.rowBoBack = true
          setTimeout(()=>{
            this.rowBoBack = false
          },500)
        }
        this.deltaRowMove()
      }
      let delta = parseInt(this.$refs.row.$el.style.transform.replace(/[a-z()]/gi, ''))
      if(this.pauseAnimation && Math.abs(delta)>1){
        this.pauseAnimation = false
        this.deltaRowMove(true)
      }

    },
    touchstart(event) {
      this.touchstartX = event.touches[0].clientX;
      this.touchstartY = event.touches[0].clientY;
      this.touchdownFlag = true

    },
    touchmove(event) {
      if (!this.touchdownFlag)
        return
      if (!this.touchstartX || !this.touchstartY) {
        return;
      }
      // this.touchmovex = event.touches[0].pageX
      var xUp = event.touches[0].clientX;
      var yUp = event.touches[0].clientY;

      var xDiff = xUp - this.touchstartX;
      var yDiff = this.touchstartY - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (this.preventScroll) {
          event.preventDefault();
        }
        this.$refs.row.$el.style.transform = 'translateX(' + xDiff + 'px)'
        if (Math.abs(xDiff) > this.$refs.row.$el.childNodes[0].clientWidth * 0.3) {
          this.deltaRowMove(true)
          if (xDiff < 0) {
            this.setNextActive()
            this.goLeft = true
          } else {
            this.setPrewActive()
            this.goRight = true
          }
          this.touchdownFlag = false
        }
      }


    },
    deltaRowMove(useDuration = false, step = 0) {

      // this.pauseAnimation = true;
      // this.$refs.row.$el.classList.add('rt-comment-slider-row--go-back')
      setTimeout(() => {
        // this.$refs.row.$el.classList.remove('rt-comment-slider-row--go-back')
        this.$refs.row.$el.style.transform = 'translateX(0px)'
        // this.pauseAnimation = false
      }, 500)


    },
    scrollToActive() {

    },
    addInStore() {
      commentSliderStore.createContainer(this.name)
    },

    getSliderContent() {
      ({
        content: this.content,
        _ids: this.ids,
        activeIndex: this.activeIndex,
        goLeft: this.goLeft,
        goRight: this.goRight
      } = commentSliderStore.getSliderContent(this.name));
      this.activeIndex = [...this.activeIndex]
      this.activeIds = this.activeIndex.map((index) => this.ids[index])
    },

    addWatcher() {
      commentSliderStore.addWatcher(this.name, this.getSliderContent, this._uid, true)
    },

    removeWatcher() {
      commentSliderStore.removeContainer(this.name)
    },
    setNextActive() {
      this.tickPersent = 0
      commentSliderStore.setNextSlide(this.name)
    },
    setPrewActive() {
      this.tickPersent = 0
      commentSliderStore.setPrewSlide(this.name)
    },
    setActiveId(id) {
      this.tickPersent = 0
      commentSliderStore.setActiveId(this.name, id)
    },
    mouseenter() {
      this.isHover = true
    },
    mouseleave() {
      this.isHover = false
      this.tick()
    },
    buttonMouseenter(){

      this.mouseenter()
      this.buttonIsHover = true
    },
    buttonMouseleave(){
      this.mouseleave()
      this.buttonIsHover = false
    },
    tick() {
      if (this.autoplay && !this.isHover) {
        this.tickPersent += 1
        clearTimeout(this.timeout)
        if (this.tickPersent >= 100) {
          this.setNextActive()
          setTimeout(() => {
            this.tickPersent = 0
            this.timeout = setTimeout(this.tick.bind(this), (this.duration - 0) / 100)
          }, 500)
        } else {
          this.timeout = setTimeout(this.tick.bind(this), (this.duration - 0) / 100)
        }
      }
    }
  },


  render(h) {
    const rowClassList =  ["rt-comment-slider-row","height-fill"]
    if (this.goRight) {
      rowClassList.push('rt-comment-slider-row-right')
    }
    if (this.goLeft) {
      rowClassList.push('rt-comment-slider-row-left')
    }
    if (this.rowBoBack) {
      rowClassList.push('rt-comment-slider-row-back')
    }
    const renderContent = () => {
      return this.ids.map((id) => {
        const content = this.content[id]
        const sliderItemClassList = ['rt-comment-slider-item', 'color-block--white', 'ovh', 'round-border'];
        const index = this.activeIds.indexOf(id)

        if (index >= 0) {
          sliderItemClassList.push('rt-comment-slider-item-i' + index)
          sliderItemClassList.push('rt-comment-slider-item-show')
        }

        return <div class={sliderItemClassList.join(' ')}  onMouseenter={this.mouseenter} onMouseleave={this.mouseleave}>

          <div class="color-block--main-color005 sp-t-1-3 sp-b-1-3 sp-h-1 rt-comment-slider-item-content">

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 12.9437L10.2535 5L11.5493 5.90141L7.88732 12.9437H10.5352V19.5352H4V12.9437ZM12.4507 12.9437L18.7042 5L20 5.90141L16.338 12.9437H18.9859V19.5352H12.4507V12.9437Z"
                fill="#101828"/>
            </svg>
            <div class="rt-font color-main sp-t-0-3 rt-comment-slider-item-text">
              {content.comment}
            </div>
            <a target="_blank" href={content.contentUrl} class="sp-t-0-2 color-main05 rt-comment-slider-link p3">Читать целиком</a>
          </div>
          <div class="sp-h-1 md-sp-b-1 sp-v-1-3 td-sp-v-1">
            <div class="d-flex rt-comment-slider-item-body">
              <div class="rt-comment-slider-item-image">
                <img class="rt-comment-slider-item-image-tag" src={content.authorImage} alt=""/>
              </div>
              <div class="sp-l-1 rt-comment-slider-item-author">
                <p class="rt-font-h4 rt-font-bold relative">{content.author_name}
                  <a target="_blank" class="rt-comment-slider-icon" href={this.authorLink}>
                    {this.authorLink}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.77883 19.3894C8.781 19.4979 10.0917 19.5 12 19.5C13.9083 19.5 15.219 19.4979 16.2212 19.3894C17.1953 19.2838 17.6984 19.0923 18.0572 18.8316C18.3544 18.6157 18.6157 18.3544 18.8316 18.0572C19.0923 17.6984 19.2838 17.1953 19.3894 16.2212C19.4979 15.219 19.5 13.9083 19.5 12C19.5 10.0917 19.4979 8.781 19.3894 7.77883C19.2838 6.80473 19.0923 6.3016 18.8316 5.94275C18.6157 5.64562 18.3544 5.38432 18.0572 5.16844C17.6984 4.90772 17.1953 4.71617 16.2212 4.61064C15.219 4.50206 13.9083 4.5 12 4.5C10.0917 4.5 8.781 4.50206 7.77883 4.61064C6.80473 4.71617 6.3016 4.90772 5.94275 5.16844C5.64562 5.38432 5.38432 5.64562 5.16844 5.94275C4.90772 6.3016 4.71617 6.80473 4.61064 7.77883C4.50206 8.781 4.5 10.0917 4.5 12C4.5 13.9083 4.50206 15.219 4.61064 16.2212C4.71617 17.1953 4.90772 17.6984 5.16844 18.0572C5.38432 18.3544 5.64562 18.6157 5.94275 18.8316C6.3016 19.0923 6.80473 19.2838 7.77883 19.3894ZM3.95491 5.06107C3 6.3754 3 8.25027 3 12C3 15.7497 3 17.6246 3.95491 18.9389C4.26331 19.3634 4.6366 19.7367 5.06107 20.0451C6.3754 21 8.25027 21 12 21C15.7497 21 17.6246 21 18.9389 20.0451C19.3634 19.7367 19.7367 19.3634 20.0451 18.9389C21 17.6246 21 15.7497 21 12C21 8.25027 21 6.3754 20.0451 5.06107C19.7367 4.6366 19.3634 4.26331 18.9389 3.95491C17.6246 3 15.7497 3 12 3C8.25027 3 6.3754 3 5.06107 3.95491C4.6366 4.26331 4.26331 4.6366 3.95491 5.06107ZM10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12ZM12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5ZM16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7Z"
                            fill="#101828"/>
                    </svg>
                  </a>

                </p>
                <p class="sp-t-0-2 color-main05 p3 md-sp-r-2">{content.author_about}</p>
              </div>
            </div>
          </div>
        </div>
      })
    }
    const renderPaginator = () => {
      return this.ids?.map((id) => {
        const index = this.activeIds.indexOf(id)
        const paginatorClassName = ['rt-n-banner-paginator-item']
        const roundStyle = {}
        if (index == 2) {
          roundStyle.strokeDashoffset = 45 - 45 * this.tickPersent / 100
          paginatorClassName.push('rt-n-banner-paginator-item--active')
        }
        const setActiveId = () => {
          this.setActiveId(id)
        }
        return <div class={paginatorClassName.join(' ')} onClick={setActiveId} onMouseenter={this.buttonMouseenter} onMousemove={this.buttonMouseenter} onMouseleave={this.buttonMouseleave}>
          <svg class="rt-n-banner-paginator-round" width="18px" height="18px" viewBox="0 0 18 18" version="1.1"
               style={roundStyle}
               xmlns="http://www.w3.org/2000/svg">
            <circle class="rt-n-banner-paginator-oval" stroke-width="1.5" cx="9" cy="9" r="7"
                    fill="none"></circle>
          </svg>
        </div>
      })
    }

    return <div class="rt-comment-slider" onMousedown={this.mousedown} onMousemove={this.mousemove}
                onTouchstart={this.touchstart} onTouchmove={this.touchmove} onTouchend={this.mouseup}

                onMouseup={this.mouseup}>
      <div class="rt-comment-slider-inner">
        <div class="rt-container relative height-fill rt-comment-slider-navigation">
          <div onMouseenter={this.buttonMouseenter} onMousemove={this.buttonMouseenter} onMouseleave={this.buttonMouseleave}
               class="rt-comment-slider-arrow rt-comment-slider-arrow--next" onClick={this.setNextActive}>
            <rt-system-icons name="chevron right"></rt-system-icons>
          </div>

          <div onMouseenter={this.buttonMouseenter} onMousemove={this.buttonMouseenter} onMouseleave={this.buttonMouseleave}
               class="rt-comment-slider-arrow rt-comment-slider-arrow--prew" onClick={this.setPrewActive}>
            <rt-system-icons name="chevron left"></rt-system-icons>
          </div>
        </div>
        <div class="rt-container rt-comment-slider-container height-fill">
          <rt-col size="12" class="height-fill d-flex">
            <rt-row class={rowClassList} ref="row">
              {renderContent()}

            </rt-row>
            <div class="rt-n-comment-slider-paginator d-flex" onMousemove={this.mouseenter}
                 onMouseleave={this.mouseleave}>
              {renderPaginator()}
            </div>
          </rt-col>
        </div>
      </div>
    </div>
  }
};
</script>
