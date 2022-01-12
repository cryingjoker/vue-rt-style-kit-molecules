<script type="text/jsx">
  import debounce from "debounce";
  import { deviceTypeStore } from 'vue-rt-style-kit-atoms/src/stores/deviceTypeStoreMixin.js'

  export default {
    name: "RtTableCol",
    components: {},
    inject: ["tableLabels"],
    props: {
      width: {
        type: [String, Number],
        default: null
      },
      widthInColsDesktop: {
        type: Number,
        default: null
      },
      widthInColsTablet: {
        type: Number,
        default: null
      },
      widthInColsMobile: {
        type: Number,
        default: null
      },

    },

    data: () => ({
      isTablet: false,
      isMobile: false,
      containerWidth: null,
      singleColumn: null,
      columnWidth: null,
      componentStyle: {}

    }),
    mounted() {
      this.columnWidth = this.$parent._props.columnWidth;
      this.calculateMobileOptions();
      deviceTypeStore.addWatcher(this._uid, this.calculateMobileOptions);
      this.columnsTemplate();
      window.addEventListener('resize', ()=> {
        this.componentStyle = {}
        setTimeout(()=>{
          this.columnsTemplate();
        },100)
      });
    },
    beforeUpdate() {
      deviceTypeStore.removeWatcher(this._uid, this.calculateMobileOptions);
    },
    beforeDestroy() {
      deviceTypeStore.removeWatcher(this._uid, this.calculateMobileOptions);
    },
    updated() {
      deviceTypeStore.addWatcher(this._uid, this.calculateMobileOptions);
    },
    methods: {
      calculateMobileOptions() {
        const type = deviceTypeStore.getStatus();
        this.isTablet = type == 'tablet';
        this.isMobile = type == 'mobile';
      },
      columnsTemplate() {
        if (this.columnWidth) {
          let style = '';
          let thisParent = this.$el.closest('.rt-table-colgroup');
          let blockWidth;
          if (this.isTablet && this.widthInColsTablet) {
            this.containerWidth = window.innerWidth - 60;
            this.singleColumn = this.containerWidth / 6;
            blockWidth = this.widthInColsTablet * this.singleColumn;
            if (this.$el === thisParent.firstChild || this.$el === thisParent.lastChild) {
              blockWidth -= 10;
            }
            style = `${blockWidth.toFixed(2)}px`;
          } else if (this.isMobile) {
            // this.containerWidth = window.innerWidth - 20;
            // this.singleColumn = this.containerWidth / 3;
            // blockWidth = this.widthInColsMobile * this.singleColumn;
            // if (this.$el === thisParent.firstChild || this.$el === thisParent.lastChild) {
            //   blockWidth -= 10;
            // }
            // style = `${blockWidth.toFixed(2)}px`;
            style = ''
          } else {
            if (!this.isMobile && !this.isTablet && this.widthInColsDesktop) {
              this.containerWidth = window.innerWidth <= 1520 ? window.innerWidth - 140 : 1320;
              this.singleColumn = this.containerWidth / 12;
              blockWidth = this.widthInColsDesktop * this.singleColumn;
              if (this.$el === thisParent.firstChild || this.$el === thisParent.lastChild) {
                blockWidth -= 10;
              }
              style = `${blockWidth.toFixed(2)}px`;
            }
          }
          if (style) {
            this.componentStyle = {width: style}
          } else {
            this.componentStyle = {}
          }
        } else {
          this.componentStyle = {}
        }
      },
    },
    computed: {},

    render(h) {
      return <div class="rt-table-col" ref="col" style={this.componentStyle}></div>;
    }
  };
</script>
