<script type="text/jsx">
import {cmpName, resizeHandler, resizeHandlerDestroy} from './common.js'
import MicrotabsControl from './MicrotabsControl.vue'
import './Microtabs.styl'

const offset = 8
const controlWidth = 32

const defaultConfig = () => {
  return {
    navList: [],
    cntList: [],
    activeTab: 0,
    allowNavLeft: false,
    allowNavRight: false,
    direction: 'right',
    wheelPause: false,
    xDown:0,
    yDown:0,
  }
}

export default {
  name: 'RtMicrotabs',
  components: {MicrotabsControl},
  props: {
    theme: {
      type: String
    },
    fit: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      cmpName,
      ...defaultConfig()
    }
  },
  computed: {
    cmpClasses() {
      return [
        this.cmpName,
        !this.$slots.cnt ? 'is--conveer' : 'is--tabs',
        {
          'is--fit-content': this.fit
        }
      ]
    },
    conveerStyles() {
      return {
        transform: `translateX(${this.activeTab ? -this.activeTab * 100 : 0}%)`
      }
    }
  },
  methods: {
    activateNav(cmp) {
      this.navList.push(cmp)
      return {
        key: this.navList.length - 1
      }
    },
    activateCnt(cmp) {
      this.cntList.push(cmp)
      return this.cntList.length - 1
    },
    activateParentEvent() {
      this.$nextTick(() => this.$emit(
        'onChange',
        this.navList[this.activeTab].$el,
        // Опциональная последовательность для simple темы (отображение иконок)
        this.cntList?.[this.activeTab]?.$el)
      )
    },
    fitItems(twice = true) {
      if(this.$refs.wrapper) {
        let wrapWidth = this.$refs.wrapper.clientWidth;
        let positions = []
        this.allowNavLeft = false
        this.allowNavRight = false
        let endXBefore = 0
        this.navList.forEach((nav, index) => {
          nav.$el.style.transform = 'none'
          const rect = nav.$el.getClientRects()[0];
          const positionObj = {
            start: endXBefore
          }
          let margin = 0
          endXBefore += rect.width
          if (index > 0 && window.getComputedStyle) {
            margin = parseInt(window.getComputedStyle(this.navList[index - 1].$el).marginRight)
            endXBefore += margin
          }
          positionObj.end = endXBefore
          positions.push(positionObj)
          nav.$el.removeAttribute('style')
        })

        let beforeActive = this.activeTab;
        let nextActive = this.activeTab;
        if(this.activeTab > 0){
          beforeActive -= 1
        }
        if(this.activeTab < this.navList.length -1){
          nextActive += 1
        }
        const getItemWidth = (index)=>{
          return positions[index].end-positions[index].start
        }
        let visibleWidth = getItemWidth(this.activeTab)
        this.navList[this.activeTab].hidden = false
        const stepR = (index)=>{
          if(index+1 < this.navList.length ){
            index = index+1
            const itemWidth = getItemWidth(index)
            if(visibleWidth+itemWidth +controlWidth*2 > wrapWidth  || this.navList[index-1].hidden){
              this.navList[index].hidden = true
              if(!this.allowNavRight) {
                this.allowNavRight = true
              }
            }else{
              this.navList[index].hidden = false

              visibleWidth+=itemWidth
            }
          }
        }
        const stepL = (index)=>{
          if(index > 0){

            index = index-1
            const itemWidth = getItemWidth(index)

            if(visibleWidth+itemWidth + controlWidth*2 > wrapWidth || this.navList[index+1].hidden){
              this.navList[index].hidden = true
              if(!this.allowNavLeft) {
                this.allowNavLeft = true
              }
            }else{
              this.navList[index].hidden = false
              visibleWidth+=itemWidth
            }
          }
        }
        for(var i = 0; i < this.navList.length; i++) {
          stepR(this.activeTab + i);
          stepL(this.activeTab - i);
        }
      }
    },
    navLeft() {
      if (this.activeTab < 1) return
      this.activeTab--
      this.direction = 'left'
      this.fitItems()
      this.activateParentEvent()
    },
    navRight() {
      if (this.activeTab >= this.navList.length) return
      this.activeTab++
      this.direction = 'right'
      this.fitItems()
      this.activateParentEvent()
    },
    destroy() {
      let config = defaultConfig()
      Object.keys(config).forEach(param => this[param] = config[param])
      this.fitItems()
    },
    wheelMove(e) {
      if(!this.wheelPause) {
        if (Math.abs(e.deltaX) > 0) {
          e.stopImmediatePropagation()
          e.preventDefault()
        }
        if (Math.abs(e.deltaX) > 20) {
          const activeIndex = this.activeTab;
          const size = this.navList.length;
          const prev = (activeIndex - 1 + size) % size;
          const next = (activeIndex + 1) % size;
          this.wheelPause = true;
          setTimeout(()=>{
            this.wheelPause = false;
          },300)
          if (e.deltaX > 0) {
            if(next != 0) {
              this.activeTab = next
            }
          } else {
            if(prev != size - 1) {
              this.activeTab = prev
            }
          }
          this.fitItems()
        }
        return false
      }
    },
    touchstart(event){
      this.xDown = event.touches[0].clientX;
      this.yDown = event.touches[0].clientY;
    },
    touchmove(event){
      if (!this.xDown || !this.yDown) {
        return;
      }
      const xUp = event.touches[0].clientX
      const yUp = event.touches[0].clientY

      const xDiff = this.xDown - xUp
      const yDiff = this.yDown - yUp

      const activeIndex = this.activeTab;
      const size = this.navList.length;
      const prev = (activeIndex - 1 + size) % size;
      const next = (activeIndex + 1) % size;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/

        event.preventDefault();
        event.stopPropagation();


        if (xDiff > 0) {
          if(next != 0) {
            this.activeTab = next
          }

        } else {
          if(prev != size - 1) {
            this.activeTab = prev
          }
        }
        this.fitItems()
      }

      this.xDown = null;
      this.yDown = null;
    }
  },
  mounted() {
    this.$on('setActiveTab', (key, calculateFitItems = true) => {
      if (key !== this.activeTab) {
        this.direction = key > this.activeTab ? 'right' : 'left'
        this.activeTab = key
        this.activateParentEvent(key)
        // if (calculateFitItems) {
        this.fitItems()
        // }
      }
    })
    this.fitItems()
    resizeHandler(this, this.fitItems)
  },
  destroyed() {
    resizeHandlerDestroy(this)
  },
  render(h) {
    const contentRender = () => {
      if (!this.$slots.cnt) return
      return <div
        class={`${this.cmpName}-cnt`}
        style={this.conveerStyles}
      >
        {this.$slots.cnt}
      </div>
    }


    //onWheel={this.wheelMove} onTouchstart={this.touchstart} onTouchmove={this.touchmove}
    //todo посмотреть как превентить вверх евент
    return <div class={this.cmpClasses} ref="wrapper" >
      <div class={`${this.cmpName}-nav`} ref="navigationEl">
        <microtabs-control
          onClick={this.navLeft}
          direction="left"
          active-tab={this.activeTab}
          hidden={!this.allowNavLeft}
        ></microtabs-control>

        {this.$slots.nav}

        <microtabs-control
          onClick={this.navRight}
          direction="right"
          hidden={!this.allowNavRight}
        ></microtabs-control>
      </div>

      {contentRender()}
    </div>
  }
}
</script>
