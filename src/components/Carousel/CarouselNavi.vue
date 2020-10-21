<script>
import debounce from "debounce"

const name = 'RtCarouselNavi'
const cssSelector = 'rt-carousel__navi'

export default {
  name: name,
  props: {
    overlayEl: null,
    hSpace: {
      type: Number,
      default: 0
    },
    containerName: {
      type: String,
      default: ''
    },
    buttonSize: {
      type: Number,
      default: 53
    },
    isPending: {
      type: Boolean,
      default: false
    },
    showTipsNext: {
      type: Boolean,
      default: false
    },
    hideArrows: {
      type: Boolean,
      default: false
    },
    nextCount: {
      type: Number,
      default: 0
    },
    navsPosStart: {
      type: Number,
      default: 0
    },
    navsPosEnd: {
      type: Number,
      default: 0
    },
    navContainerChanged: {
      type: Boolean,
      default: false
    },
    navigationContainer: {
      type: String,
      default: ''
    },
    canAdvanceForward: {
      type: Boolean,
      default: false
    },
    canAdvanceBackward: {
      type: Boolean,
      default: false
    },
    advancePage: {
      type: Function,
      default: () => {}
    },
    arrowTopFixed: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      position: 'absolute',
      topPos: null,
      bottomPos: null,
      offset: null
    }
  },
  mounted() {
    this.activateNavi()
    this.checkTopFixed()
  },
  updated() {
    if (!this.navContainerChanged && this.navigationContainer !== '') {
      let els = document.querySelectorAll(this.navigationContainer)
      if (els.length) {
        els[0].insertBefore(this.$el, els[0].firstChild)
      }
      this.navContainerChanged = true
    }
  },
  destroyed () {
    this.deactivateNavi()
  },
  methods: {
    stickNavs () {
      if (this.overlayEl) {
        const getTop = (this.overlayEl.getBoundingClientRect().top + window.pageYOffset) || document.documentElement.scrollTop
        let posY = window.pageYOffset + window.innerHeight / 2
        let posStart = getTop + this.navsPosStart
        let posEnd = getTop + this.overlayEl.clientHeight - this.navsPosEnd - this.buttonSize
        if ((posY >= posStart) && posY < posEnd) {
          // Scrolled
          this.position = 'fixed'
          this.topPos = null
          this.bottomPos = 'auto'
        } else if (posY >= posEnd) {
          // After scrolling zone
          this.position = 'absolute'
          this.topPos = 'auto'
          this.bottomPos = `${this.navsPosEnd}px`
        } else {
          // Before scrolling zone
          this.position = 'absolute'
          this.topPos = `${this.navsPosStart}px`
          this.bottomPos = 'auto'
        }
        this.checkTopFixed()
      }
    },
    checkTopFixed () {
      if (this.arrowTopFixed) {
        this.position = 'absolute'
        this.topPos = this.arrowTopFixed
        this.bottomPos = 'auto'
      }
    },
    triggerPageAdvance (e) {
      let el = e && e.target ? e.target : null
      if (el && el.getAttribute('data-pos'))
        this.advancePage(el.getAttribute('data-pos'))
    },
    activateNavi () {
      if (this.$parent.$el.scrollHeight > (this.navsPosStart + this.navsPosEnd)) {
        this.offset = null
        window.addEventListener('scroll', debounce(this.stickNavs, 1), { passive: true })
        window.addEventListener('resize', debounce(this.stickNavs, 1), { passive: true })
        this.stickNavs()
      } else {
        // Если заданная высота отступа выше зоны просмотра, то центрируем стрелочки
        this.offset = 'auto'
        this.topPos = '0px'
        this.bottomPos = '0px'
      }
    },
    deactivateNavi () {
      window.removeEventListener('scroll', debounce(this.stickNavs, 1))
      window.removeEventListener('resize', debounce(this.stickNavs, 1))
    }
  },
  render (h) {

    const sideRender = (pos) => {
      let n = cssSelector + '-side'
      let className = n + ' ' + n + '-' + pos
      return <div
        class={ className }
        data-pos={ pos }
        onClick={ this.triggerPageAdvance }
        style={{ width: this.hSpace + 'px' }}
      />
    }
    const sideLeftBlock = () => {
      if (this.canAdvanceBackward)
        return sideRender('prev')
    }
    const sideRightBlock = () => {
      if (this.canAdvanceForward)
        return sideRender('next')
    }
    const moreTextBlock = () => {
      if (this.showTipsNext && this.nextCount > 0)
        return <div
          class={ cssSelector + '-more-text' }
        >Ещё&nbsp;{this.nextCount}</div>
    }
    const btnRender = (pos) => {
      if (!this.hideArrows)
        return <a
          class={[
            cssSelector + '-btn',
            cssSelector + '-btn-' + pos,
            {
              'is-disabled' : pos === 'next' ? !this.canAdvanceForward : !this.canAdvanceBackward,
              'is-pending' : this.isPending
            }
          ]}
          data-pos={ pos }
          onClick={ this.triggerPageAdvance }
          style={{
            width: this.buttonSize + 'px',
            height: this.buttonSize + 'px'
          }}
        >
          <i class={ cssSelector + '-circle-icon' } />
          { pos === 'next' ? moreTextBlock() : null }
        </a>
    }

    return <div
        class={cssSelector}
      >
        { sideLeftBlock() }
        <div
          class={[
            cssSelector + '-arrows',
            this.containerName
          ]}
          style={{
            position: this.position,
            height: this.buttonSize + 'px',
            top: this.topPos,
            bottom: this.bottomPos,
            marginTop: this.offset,
            marginBottom: this.offset,
          }}
        >
          { btnRender('prev') }
          { btnRender('next') }
        </div>
        { sideRightBlock() }
      </div>
  }
};
</script>
