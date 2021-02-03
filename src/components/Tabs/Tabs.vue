<script type="text/jsx">
  import { tabsStore } from "./TabsStore";
  import variables from "../../variables.json";


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
      name:{
        type:String,
        default: ''
      },
      version:{
        type: Number,
        default: 1
      }
    },
    data: () => ({
      activeTabIndex: 0,
      tabletSize: null,
      mobileSize: null,
      deviceType: "pc"
    }),


    mounted: function() {

        if (!this.dontUseAdaptive) {
          this.tabletSize = parseInt(variables["tablet-upper-limit"]);
          this.mobileSize = parseInt(variables["mobile-upper-limit"]);
          window.addEventListener("resize", this.checkDeviceType);
          this.checkDeviceType();
        }
        if(this.ga.length > 0) {
          tabsStore.setGlobalAnalyticsSegment(this.ga);
        }

        tabsStore.addWatcher(this._uid,this.onUpdateTabsStore)

    },
    computed: {
        tabsClassNames(){
          const classes = ['rt-tabs'];

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
      if(this.showAsTags){
        classes.push("rt-tabs--tag-mode");
      }
      return classes.join(' ')
      // fillContent

        }
    },
    updated() {
      window.removeEventListener("resize", this.checkDeviceType);
      window.addEventListener("resize", this.checkDeviceType);
    },
    beforeDestroy: function() {
      // console.info('beforeDestroy')
      // tabsStore.unregisterWrapper(this.name)
    },
    methods: {
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
      onUpdateTabsStore(){

        // console.info('onUpdateTabsStore',tabsStore.getActiveIndexes(this._uid))

      },

      addTabName(name) {
        if (this.RtTabs.namesArray.length === 0) {
          this.setActiveTabName(name);
        }
        this.RtTabs.namesArray.push(name);
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
    render(h){

      let id = 'tabs-'+this._uid;
      const renderContent = ()=>{
        return <div class="rt-tabs-content">
          {this.$slots.content}
        </div>
      }
      if(this.version == 2){
        return <div id={id} class={this.tabsClassNames}>
          <div class="rt-tabs-v2-navigation-wrapper">
            <div style={this.navigationStyle} ref="navigation" class="rt-tabs-v2-navigation">
              {this.$slots.navigation}
            </div>
          </div>
          {renderContent()}
        </div>;
      }
      const renderNavigation = ()=>{
        if(this.roundTabletView){
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
        if(!this.reverseView) {
          return <div id={id} class={this.tabsClassNames}>
            <div class="rt-tabs-navigation-wrapper">
            {renderNavigation()}
            </div>
            {renderContent()}
          </div>;
        }else{
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
