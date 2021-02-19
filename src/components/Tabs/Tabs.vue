<script type="text/jsx">
import {tabsStore} from "./TabsStore";
import variables from "../../variables.json";
import smoothscroll from 'smoothscroll-polyfill';

const componentsList = {};


export default {
  name: "RtTabs",
  components: componentsList,
  props: {
    roundTabletView: {
      type: Boolean,
      default: false
    },
    showAsTags: {
      type: Boolean,
      default: false
    },
    reverseView: {
      type: Boolean,
      default: false
    },
    roundTabletViewMaxWidth: {
      type: Boolean,
      default: false
    },
    fillContent: {
      type: Boolean,
      default: false
    },
    justifyAllWidth: {
      type: Boolean,
      default: false
    },
    dontUseAdaptive: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    navigationHorizontalPadding: {
      type: Number,
      default: null
    },
    vertical: {
      type: Boolean,
      default: false
    },
    positionCenter: {
      type: Boolean,
      default: false
    },
    ga: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    version: {
      type: Number,
      default: 1
    },
    background: {
      type: String,
      default: ''
    },
    bright: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    orange: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    activeTabIndex: 0,
    tabletSize: null,
    mobileSize: null,
    deviceType: "pc",
    lineWidth: 0,
    lineLeft: 0,
    showShadowLeft: false,
    showShadowRight: false
  }),


  mounted: function () {
    smoothscroll.polyfill();
    if (!this.dontUseAdaptive) {
      this.tabletSize = parseInt(variables["tablet-upper-limit"]);
      this.mobileSize = parseInt(variables["mobile-upper-limit"]);
      window.addEventListener("resize", this.checkDeviceType);
      this.checkDeviceType();
    }
    if (this.ga.length > 0) {
      tabsStore.setGlobalAnalyticsSegment(this.ga);
    }
    tabsStore.setVersion(this._uid, this.version);
    tabsStore.addWatcher(this._uid, this.onUpdateTabsStore)

    setTimeout(() => {
      this.onScroll();
      this.onUpdateTabsStore()
    }, 100)
  },
  computed: {
    tabsClassNames() {
      const classes = ['rt-tabs'];
      if (this.small) {
        classes.push('rt-tabs--small')
      }
      if (this.bright) {
        classes.push('rt-tabs--bright')
      }
      if (this.background.length > 0) {
        classes.push('rt-tabs--background')
        classes.push('rt-tabs--background-' + this.background)
      }
      if (this.vertical && window.innerWidth <= this.mobileSize) {
        classes.push("rt-tabs--vertical");
      } else {
        if (this.roundTabletView) {
          classes.push("rt-tabs--round-tablet-view");
        }
        if (this.deviceType && !this.dontUseAdaptive) {
          classes.push("rt-tabs-" + this.deviceType);
        }
      }
      if (this.positionCenter) {
        classes.push("rt-tabs--centered");
      }
      if (this.fillContent) {
        classes.push("rt-tabs--fill");
        if (this.justifyAllWidth) {
          classes.push("rt-tabs--justify-all-width");
        }
      }
      if (this.showAsTags) {
        classes.push("rt-tabs--tag-mode");
      }
      if (this.orange) {
        classes.push("rt-tabs--orange");
      }
      return classes.join(' ')
      // fillContent

    },
    lineStyle() {
      return {
        left: this.lineLeft + 'px',
        width: this.lineWidth + 'px'

      }
    }
  },
  updated() {
    window.removeEventListener("resize", this.checkDeviceType);
    window.addEventListener("resize", this.checkDeviceType);
  },
  beforeDestroy: function () {
    tabsStore.clearStore(this._uid)
  },
  methods: {
    onScroll() {
      if (this.$refs.scroller) {
        const scrollLeft = this.$refs.scroller.scrollLeft
        const scrollerWidth = this.$refs.scroller.clientWidth
        const navigationWidth = this.$refs.navigation.offsetWidth
        if (scrollLeft > 0) {
          this.showShadowLeft = true
          if (scrollLeft + scrollerWidth < navigationWidth - 20) {
            this.showShadowRight = true
          } else {
            this.showShadowRight = false
          }
        } else {
          if (scrollLeft + scrollerWidth < navigationWidth) {
            this.showShadowRight = true
          } else {
            this.showShadowRight = false
          }
          this.showShadowLeft = false
        }
      }


    },
    checkDeviceType() {
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
      const width = (iOS) ? screen.width : window.innerWidth;
      if (width <= this.mobileSize) {
        this.deviceType = "mobile";
      } else {
        if (width <= this.tabletSize) {
          this.deviceType = "tablet";
        } else {
          this.deviceType = "pc";
        }
      }
    },

    setActiveTabName(name, hashAnchor = false) {
      tabsStore.setActiveTabName(name, hashAnchor);
      window.dispatchEvent(new Event("resize"));
      if (hashAnchor) {
        window.history.replaceState(undefined, undefined, "#" + hashAnchor);
      }
    },
    onUpdateTabsStore() {
      var data = tabsStore.tabsParents[this._uid]
      if (data) {

        let index = data.index
        if (index < 0) {
          index = 0
        }
        if (index >= 0) {

          const updateStyle = () => {
            let rect = this.$refs['navigation'].querySelectorAll('.rt-tabs-nav-v2_item-name')[index]?.getBoundingClientRect();

            if (rect) {
              this.lineWidth = rect.width
              this.lineLeft = rect.x - this.$refs['navigation'].getBoundingClientRect().x
            } else {
              rect = this.$refs['navigation'].querySelectorAll('.rt-tabs-navigation__item-name')[index]?.getBoundingClientRect();
              if (rect) {
                this.lineWidth = rect.width
                this.lineLeft = rect.x + this.$refs['navigation'].scrollLeft
              }
            }
          }
          if (this.$refs['navigation'].querySelectorAll('.rt-tabs-nav-v2_item-name').length == 0) {
            setTimeout(() => {
              updateStyle()
            }, 200)
          } else {
            updateStyle()
          }

          if (this.$refs.scroller) {
            this.$refs.scroller.scroll({
              left: this.lineLeft - window.innerWidth / 3,
              behavior: 'smooth'
            });
          } else {
            if (this.$refs.navigation) {
              setTimeout(() => {
                this.$refs.navigation.scroll({
                  left: this.lineLeft - window.innerWidth / 3,
                  behavior: 'smooth'
                });

              }, 200)
            }
          }
        }
      }
    },
    navigationStyle() {
      const style = {};
      if (this.navigationHorizontalPadding) {
        style.paddingLeft = this.navigationHorizontalPadding + "px";
        style.paddingRight = this.navigationHorizontalPadding + "px";
      }
      return style;
    }
  },
  render(h) {
    let id = 'tabs-' + this._uid;
    const renderContent = () => {
      return <div class="rt-tabs-content">
        {this.$slots.content}
      </div>
    }
    const renderLine = () => {
      if (!this.showAsTags) {
        return <div class="rt-tabs-navigation_line" style={this.lineStyle}></div>
      }
      return null
    }
    if (this.version == 2) {
      return <div id={id} class={this.tabsClassNames}>
        <div class="rt-tabs-v2-navigation-wrapper">

          <div class="rt-tabs-v2-navigation-scoller" ref="scroller" onScroll={this.onScroll}>
            <div style={this.navigationStyle} ref="navigation" class="rt-tabs-v2-navigation">
              {this.$slots.navigation}
              {renderLine()}
            </div>
          </div>
          {this.showShadowLeft ? <div class="rt-tabs-v2-navigation-shadow-left"></div> : null}
          {this.showShadowRight ? <div class="rt-tabs-v2-navigation-shadow-right"></div> : null}
        </div>
        <div class="sp-t-1">
          {renderContent()}
        </div>
      </div>;
    }
    const renderNavigation = () => {
      if (this.roundTabletView) {
        return <div class="rt-tabs-navigation-round-wrapper">
          <div style={this.navigationStyle} ref="navigation" class="rt-tabs-navigation">
            {this.$slots.navigation}
          </div>
        </div>
      }
      return <div style={this.navigationStyle} ref="navigation" class="rt-tabs-navigation">
        {this.$slots.navigation}
      </div>
    }
    if (this.vertical && window.innerWidth <= this.mobileSize) {
      return <div id={id} class={this.tabsClassNames}>
        {renderNavigation()}
      </div>;
    } else {
      if (!this.reverseView) {
        return <div id={id} class={this.tabsClassNames}>
          <div class="rt-tabs-navigation-wrapper">
            {renderNavigation()}
          </div>
          {renderContent()}
        </div>;
      } else {
        return <div id={id} class={this.tabsClassNames}>
          {renderContent()}
          <div class="rt-tabs-navigation-wrapper">
            {renderNavigation()}
          </div>
        </div>;
      }
    }
  }
};
</script>
