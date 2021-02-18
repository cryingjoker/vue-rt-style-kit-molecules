<script type="text/jsx">
import {tabsStore} from "./TabsStore";

export default {
  name: "RtTabsNavItem",
  props: {
    anchor: {
      type: String,
      default: null
    },
    removeBaseTag: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: null
    },
    scrollOnTop: {
      type: Boolean,
      default: false
    },
    activeTab: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    parentid: "",
    isActive: false,
    parentElement: null,
    timeAnimate: 500,
    animateHide: false,
    animateShow: false,
    version: 1,
    index: -1,
  }),
  methods: {
    getIndex() {
      if(!this.$el.parentElement){
        return null
      }
      if(this.$el.parentElement.querySelectorAll('.rt-tabs-nav-v2_item').length > 0) {
        return Array.from(this.$el.parentElement.querySelectorAll('.rt-tabs-nav-v2_item')).findIndex((item) => {
          return item.__vue__._uid == this._uid
        })
      }
      return Array.from(this.$el.parentElement.querySelectorAll('.rt-tabs-navigation__item')).findIndex((item) => {
        return item.__vue__ ? item.__vue__._uid == this._uid : false
      })
    },
    setActiveTabName() {
      const thisIndex = this.getIndex()
      if(thisIndex == -1){
        setTimeout(()=>this.setActiveTabName,100)
      }
      tabsStore.setActiveTabName(this.name, this.anchor, thisIndex);

    },
    onUpdateTabsStore() {
      const data = tabsStore.tabsParents[this.$parent._uid]
      const indexThis = this.getIndex()
      const indexBefore = data.indexBefore;
      const indexActive = data.index
      this.version = data.version
      this.isActive = data[this.name]?.isActive

      if(indexActive <= indexThis && indexThis <= indexBefore || indexActive >= indexThis && indexThis >= indexBefore){
        this.fireAnimate(indexBefore,indexActive,indexThis)
      }
    },
    fireAnimate(before,active,index){
    },
    setGlobalAnalytics() {
      if (tabsStore.globalAnalyticsSegment) {
        if (!window.dataLayer) {
          window.dataLayer = [];
        }
        window.dataLayer.push({
          event: tabsStore.globalAnalyticsSegment,
          type: 'main_tab',
          value: this.name
        });
      }
    },
    onClick(){
      this.setActiveTabName()
      this.setGlobalAnalytics()
    }
  },
  mounted() {
    tabsStore.addTabUuid(this.$parent._uid, this.name);
    if(!document.querySelector('#tabs-' + this.$parent._uid)){
      return
    }
    if (document.querySelector('#tabs-' + this.$parent._uid).classList.contains('rt-tabs--round-tablet-view') ) {
      this.parentElement = document.querySelector('#tabs-' + this.$parent._uid + ' .rt-tabs-navigation-wrapper');
    } else {
      this.parentElement = document.querySelector('#tabs-' + this.$parent._uid + ' .rt-tabs-navigation');
    }

    if (this.removeBaseTag) {
      let baseNode = document.querySelector("base");
      if (baseNode) {
        baseNode.parentNode.removeChild(baseNode);
        let newBase = document.createElement("base");
        let url = location.href;
        url = url.split("#")[0];
        newBase.setAttribute("href", url);
        document.getElementsByTagName("head")[0].appendChild(newBase);
      }
    }
    if (this.anchor && document.location.hash) {
      if (document.location.hash.replace(/^\#/, "") === this.anchor) {
        setTimeout(()=>{
          this.setActiveTabName();
        },100)
      }
    }
    if (this.activeTab) {
      setTimeout(()=> {
        this.setActiveTabName();
      },300)
    }
    setTimeout(() => {
      if (this.$parent['roundTabletView'] && this.$parent['roundTabletViewMaxWidth']) {
        tabsStore.setTabWidth(this.$parent._uid, this.$el['offsetWidth'] + 2)
      }
    }, 2000)
  },

  created() {
    tabsStore.addWatcher(this.$parent._uid,this.onUpdateTabsStore);
  },
  computed:{
    tabsItemClass(){
      const navigatonClassList = [];
      navigatonClassList.push('rt-tabs-nav-v2_item')
      if(this.animateShow){
        navigatonClassList.push('rt-tabs-nav-v2_item--anim-show')
      }
      if(this.animateHide){
        navigatonClassList.push('rt-tabs-nav-v2_item--anim-hide')
      }
      if(!this.animateShow && !this.animateHide && this.isActive){
        navigatonClassList.push('rt-tabs-nav-v2_item--active')
      }
      return navigatonClassList.join(' ')
    }
  },
  render(h) {
    if(this.version == 2){
      return <div ref="tabItem" onClick={this.onClick} class={this.tabsItemClass}>
        <button class="rt-tabs-nav-v2_item-name d-flex flex-v-center">
          {this.$slots.default}
        </button>
      </div>
    }
    let tabsItemClass = "rt-tabs-navigation__item";
    if (this.isActive) {
      tabsItemClass += " rt-tabs-navigation__item--is-active";
    }

    if (this.scrollOnTop && this.$el) {
      const id = this.$el.closest('.rt-tabs').getAttribute('id');
      const scrollToTopData = '{ "scrollToId" : "' + id + '" }';
      if (tabsStore.tabsParents[this.$parent._uid] && tabsStore.tabsParents[this.$parent._uid].width) {
        let align = 'left';
        if (tabsStore.tabsParents[this.$parent._uid].centerText) {
          align = 'center';
        }
        return <div ref="tabItem" onClick={this.onClick} class={tabsItemClass}
                    v-rt-scroll-to-on-click={scrollToTopData}
                    style={{
                      'width': (tabsStore.tabsParents[this.$parent._uid].width + 'px'),
                      'text-align': align
                    }}>
          <button class="rt-tabs-navigation__item-name">
            {this.$slots.default}
          </button>
        </div>;
      } else {
        return <div ref="tabItem" onClick={this.onClick} class={tabsItemClass} v-rt-scroll-to-on-click={scrollToTopData}>
          <button class="rt-tabs-navigation__item-name">
            {this.$slots.default}
          </button>
        </div>;
      }
    } else {
      if (tabsStore.tabsParents[this.$parent._uid] && tabsStore.tabsParents[this.$parent._uid].width) {
        let align = 'left';
        if (tabsStore.tabsParents[this.$parent._uid].centerText) {
          align = 'center';
        }
        return <div ref="tabItem" onClick={this.onClick} class={tabsItemClass}
                    style={{
                      'width': (tabsStore.tabsParents[this.$parent._uid].width + 'px'),
                      'text-align': align
                    }}>
          <button class="rt-tabs-navigation__item-name">
            {this.$slots.default}
          </button>
        </div>;
      } else {
        return <div ref="tabItem" onClick={this.onClick} class={tabsItemClass}>
          <button class="rt-tabs-navigation__item-name">
            {this.$slots.default}
          </button>
        </div>;
      }
    }
  }
};
</script>

