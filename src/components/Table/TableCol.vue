<script type="text/jsx">
    import debounce from "debounce";
    import {deviceTypeStore} from "vue-rt-style-kit-atoms";

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
            }
        },

        data: () => ({
            isTablet: false,
            isMobile: false,
            containerWidth: null,
            singleColumn: null
        }),
        mounted() {
            this.calculateMobileOptions();
            this.columnsTemplate();
            deviceTypeStore.addWatcher(this._uid, this.calculateMobileOptions);
            window.addEventListener('resize', debounce(this.columnsTemplate, 35));
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

                if(this.widthInColsDesktop) {
                    let style = '';
                    let thisParent = this.$el.closest('.rt-table-colgroup');
                    let blockWidth;
                    if (!(this.isTablet || this.isMobile)) {
                        this.containerWidth = window.innerWidth <= 1520 ? window.innerWidth - 140 : 1320;
                        this.singleColumn = this.containerWidth / 12;
                        blockWidth = this.widthInColsDesktop * this.singleColumn;
                        if(this.$el === thisParent.firstChild || this.$el === thisParent.lastChild) {
                          blockWidth -= 10;
                        }
                        style = `${blockWidth}px`;
                        this.$el.style.width = style;
                    } else {
                        this.$el.style.width = '';
                    }
                }
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

            return <div class="rt-table-col" style={style}/>;
        }
    };
</script>
