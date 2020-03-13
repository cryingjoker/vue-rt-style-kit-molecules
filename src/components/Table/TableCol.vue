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
            columnWidth: {
                type: Boolean,
                default: false
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
            }
        },

        data: () => ({
            isTablet: false,
            isMobile: false,
            containerWidth: null,
            singleColumn: null
        }),
        mounted() {
            this.columnsTemplate();
            deviceTypeStore.addWatcher(this._uid, this.calculateMobileOptions);
            window.addEventListener('resize', debounce(this.columnsTemplate, 10));
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

                let style = '';
                if (this.isTablet) {
                    this.containerWidth = window.innerWidth - 80;
                    this.singleColumn = (this.containerWidth - 100) * 0.1666666;
                    let blockWidth = this.widthInColsTablet * this.singleColumn + (this.widthInColsTablet - 1) * 20;
                    style = `${blockWidth}px`;
                } else if (this.isMobile) {
                    this.containerWidth = window.innerWidth - 40;
                    this.singleColumn = (this.containerWidth - 40) * 0.3333333;
                    let blockWidth = this.widthInColsMobile * this.singleColumn + (this.widthInColsMobile - 1) * 20;
                    style = `${blockWidth}px`;
                } else {
                    this.containerWidth = window.innerWidth <= 1520 ? window.innerWidth - 160 : 1320;
                    this.singleColumn = (this.containerWidth - 220) * 0.0833333;
                    let blockWidth = this.widthInColsDesktop * this.singleColumn + (this.widthInColsDesktop - 1) * 20;
                    style = `${blockWidth}px`;
                }
                ;
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

            return <div class="rt-table-col" style={style}/>;
        }
    };
</script>
