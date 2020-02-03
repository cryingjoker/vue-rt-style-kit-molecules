<script type="text/jsx">
  import variables from "../../variables.json";
  import debounce from "debounce";

  export default {
    name: "RtTableCol",
    components: {},
    inject: ["tableLabels"],
    props: {
      width: {
        type: [String, Number],
        default: null
      },
      columnWidth: {
        type: Boolean,
        default: false
      },
      widthInColsDesktop: {
        type: Number,
        dafault: null
      },
      widthInColsTablet: {
        type: Number,
        dafault: null
      },
      widthInColsMobile: {
        type: Number,
        dafault: null
      }
    },

    data: () => ({
      isTablet: window.innerWidth <= parseInt(variables["tablet-upper-limit"]) && window.innerWidth >= parseInt(variables["tablet-lower-limit"]),
      isMobile: window.innerWidth <= parseInt(variables["mobile-upper-limit"]),
      containerWidth: null,
      singleColumn: null
    }),
    mounted() {
      this.columnsTemplate();
      window.addEventListener('resize', debounce(this.columnsTemplate, 10));
    },
    methods: {
      columnsTemplate() {
        this.isTablet = window.innerWidth <= parseInt(variables["tablet-upper-limit"]) && window.innerWidth >= parseInt(variables["tablet-lower-limit"]);
        this.isMobile = window.innerWidth <= parseInt(variables["mobile-upper-limit"]);
        let style = '';
        if (this.isTablet) {
          this.containerWidth = window.innerWidth - 80;
          this.singleColumn = (this.containerWidth - 100) * 0.1666666;
//          this.tabletColumnsWidth.forEach(i => {
            let blockWidth = this.widthInColsTablet * this.singleColumn + (this.widthInColsTablet - 1) *20;
            style = `${blockWidth}px`;
//          });
        } else if (this.isMobile) {
          this.containerWidth = window.innerWidth - 40;
          this.singleColumn = (this.containerWidth - 40) * 0.3333333;
//          this.mobileColumnsWidth.forEach(i => {
            let blockWidth = this.widthInColsMobile * this.singleColumn + (this.widthInColsMobile - 1) * 20;
            style = `${blockWidth}px`;
//          });
        } else {
          this.containerWidth = window.innerWidth <= 1520 ? window.innerWidth - 160 : 1320;
          this.singleColumn = (this.containerWidth - 220) * 0.0833333;
//          this.columnsWidth.forEach(i => {
            let blockWidth = this.widthInColsDesktop * this.singleColumn + (this.widthInColsDesktop - 1) * 20;
            style = `${blockWidth}px`;
//          });
        }
        console.log(style);
        console.log(this.$el.style.width)
        this.$el.style.width = style;
      }
    },

    render(h) {
      const style = {};
      if (this.width) {
        style.width =
          String(this.width).replace(/[0-9]/gi, '').length === 0
            ? String(this.width) + "px"
            : this.width;
      }

      return <div class="rt-table-col" style={style} />;
    }
  };
</script>
