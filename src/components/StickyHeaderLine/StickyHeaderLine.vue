<script type="text/jsx">
    import debounce from "debounce";
    import variables from "../../variables.json";
    import {
        backgroundColorPropsNames,
        backgroundColorProps,
        getBackgroundClassByProps,
        getBackgroundClass
    } from "vue-rt-style-kit-atoms";

    const localComponentProps = {
//        isActive: {
//            type: Boolean,
//            default: true
//        },
        zIndex: {
            type: Number,
            default: 2
        },
        startStopPoints: {
            type: Array,
            default: []
        },
        deltaBetweenBlocks: {
            type: Number,
            default: 0
        },
        hideOnDesktop: {
            type: Boolean,
            default: false
        },
        hideOnTablet: {
            type: Boolean,
            default: false
        },
        hideOnMobile: {
            type: Boolean,
            default: false
        },
        topOffsetHeightElementSelector: {
            type: String,
            default: ''
        },
        isInvisible: {
            type: Boolean,
            default: false
        },
        rightContent: {
            type: Boolean,
            default: false
        },
        checkAfterTime: {
            type: Number,
            default: 0
        },
        showSecondHeaderContentAfter: {
            type: Number,
            default: 0
        },
        stockId: {
            type: String,
            default: ''
        }
    }
    const componentProps = {...localComponentProps, ...backgroundColorProps};
    if (componentProps['backgroundColor']) {
        componentProps['backgroundColor'].default = 'white';
    }
    export default {
        name: "RtStickyHeaderLine",
        props: componentProps,
        data: () => ({
//            active: false,
            pointsStart: [],
            pointsEnd: [],
            activeIndex: -1,
            deviceType: "",
            lineHeight: 57,
            offsetTopHeight: 0,
            showSecondHeaderContentAfterIsActive: false,
            stockIdIndex: 0
        }),
//        watch: {
//            isActive: function () {
//                this.active = this.isActive;
//            }
//        },
        mounted() {
            if (this.startStopPoints.length > 0) {
                backgroundColorPropsNames
                this.setOffsetElementHeight();
                this.setStartStopPoints();

                this.setLineHeight();

                window.addEventListener("resize", debounce(this.setOffsetElementHeight, 100));
                window.addEventListener("resize", debounce(this.setLineHeight, 100));
                window.addEventListener("resize", debounce(this.setStartStopPoints, 100));
                window.addEventListener("scroll", debounce(this.detectActiveIndex, 10));

                if (this.hideOnDesktop || this.hideOnTablet || this.hideOnMobile) {
                    window.addEventListener("resize", debounce(this.setDeviceType, 100));
                    this.setDeviceType();
                }

                this.detectActiveIndex();
                if (this.checkAfterTime > 0) {
                    setTimeout(() => {
                        this.setOffsetElementHeight();
                        this.setStartStopPoints();
                        this.setLineHeight();
                        this.detectActiveIndex()
                    }, this.checkAfterTime)
                }

            }
        },
        methods: {
            setOffsetElementHeight() {
                if (this.topOffsetHeightElementSelector && this.topOffsetHeightElementSelector.length > 0) {
                    const topOffsetElement = document.querySelector(this.topOffsetHeightElementSelector);
                    if (topOffsetElement) {
                        this.offsetTopHeight = parseInt(topOffsetElement.clientHeight);
                    }
                }
            },
            setLineHeight() {
                if (this.$refs['line']) {
                    if (this.isInvisible) {
                        this.lineHeight = this.$refs['line'].childNodes[0].clientHeight;
                        ;
                    } else {
                        this.lineHeight = this.$refs['line'].clientHeight;
                    }
                }
            },
            setDeviceType() {
                var width = window.innerWidth;
                const beforeType = this.deviceType;
                if (width <= parseInt(variables["mobile-upper-limit"])) {
                    this.deviceType = "mobile";
                    if (beforeType != "mobile") {
                        setTimeout(() => {
                            this.detectActiveIndex();
                            this.checkOffsetLine();
                        }, 0);
                    }
                } else {
                    if (width <= parseInt(variables["tablet-upper-limit"])) {
                        this.deviceType = "tablet";
                        if (beforeType != "tablet") {
                            setTimeout(() => {
                                this.detectActiveIndex();
                                this.checkOffsetLine();
                            }, 0);
                        }
                    } else {
                        this.deviceType = "desktop";
                        this.detectActiveIndex();
                        this.checkOffsetLine();
                        if (beforeType != "desktop") {
                            setTimeout(() => {
                                this.detectActiveIndex();
                                this.checkOffsetLine();
                            }, 0);
                        }
                    }
                }
            },
            sort(arr) {
                arr.sort((a, b) => {
                    if (a < b) {
                        return -1;
                    }
                    return 1;
                });
            },
            compareArr(arrA, arrB, delta) {
                for (let endIndex = 0; endIndex < arrB.length; endIndex++) {
                    let endPoint = arrB[endIndex]
                    for (let startIndex = 0; startIndex < arrB.length; startIndex++) {
                        let startPoint = arrA[startIndex];
                        if (startPoint >= endPoint && Math.abs(startPoint - endPoint) <= this.deltaBetweenBlocks) {
                            arrA.splice(startIndex, 1);
                            arrB.splice(endIndex, 1);
                            endIndex--;
                        }
                    }
                    ;
                }
                ;
                arrA = arrA.filter((i) => {
                    return !i;
                });
                arrB = arrB.filter((i) => {
                    return !i;
                });


            },
            setStartStopPoints() {
                this.pointsStart = [];
                this.pointsEnd = [];
                const bodyRect = document.body.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                this.startStopPoints.forEach((id) => {
                    const el = document.getElementById(id);
                    if (el) {
                        const {top, height} = el.getBoundingClientRect();
                        this.pointsStart.push(top - bodyRect.top - this.lineHeight);
                        this.pointsEnd.push(top + height - bodyRect.top - this.lineHeight);
                        if (this.stockId === id) {
                            this.stockIdIndex = this.pointsStart.length - 1;
                        }

                    }
                });
                this.sort(this.pointsStart);
                this.sort(this.pointsEnd);
                this.compareArr(this.pointsStart, this.pointsEnd, windowHeight);

            },
            detectActiveIndex() {
                const doc = document.documentElement;
                const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
                let hasNotFound = true;
                const windowHeight = window.innerHeight;
                this.pointsStart.find((startPoint, index) => {
                    if (top >= startPoint - this.lineHeight && top <= this.pointsEnd[index] + this.lineHeight) {
                        hasNotFound = false;
                        if (this.activeIndex === -1) {
                            setTimeout(() => {
                                this.setLineHeight();
                                this.checkOffsetLine()
                            }, 100)
                        }
                        this.activeIndex = index;
                        if (this.showSecondHeaderContentAfter > 0) {
                            if ((this.showSecondHeaderContentAfter < top - startPoint || this.activeIndex > 0) && this.stockIdIndex !== this.activeIndex) {
                                this.showSecondHeaderContentAfterIsActive = true;
                            } else {
                                this.showSecondHeaderContentAfterIsActive = false;
                            }
                        }
                        return true;
                    }
                    return false

                });
                if (hasNotFound) {
                    this.activeIndex = -1;
                }
                if (this.activeIndex >= 0) {
                    this.checkOffsetLine(top);
                }
            },
            checkOffsetLine(top) {
                if (this.$refs["line"]) {
                    const start = this.pointsStart[this.activeIndex] - this.lineHeight;
                    const end = this.pointsEnd[this.activeIndex] - this.lineHeight + 15;
                    if (start + this.offsetTopHeight + this.lineHeight > top) {

                        let topPosition = top - start - this.lineHeight;

                        if (topPosition > 0) {
                            topPosition = 0;
                        }

                        if (this.isInvisible) {
                            this.$refs["line"].style.marginTop = topPosition + this.offsetTopHeight + "px";
                        } else {
                            this.$refs["line"].style.top = topPosition + this.offsetTopHeight + "px";
                        }

                    } else {

                        let offset = end - top;
                        if (offset > 0) {
                            offset = 0;
                        }
                        if (this.isInvisible) {
                            this.$refs["line"].style.marginTop = offset + this.offsetTopHeight + "px";
                        } else {
                            this.$refs["line"].style.top = offset + this.offsetTopHeight + "px";
                        }

                    }
                }

            }
        },
        computed: {
            lineClass() {
                const className = ['rt-sticky-header-line', ...(getBackgroundClassByProps.bind(this)())];
                if (this.isInvisible) {
                    className.push('rt-sticky-header-line--is-invisible')
                }
                if (this.showSecondHeaderContentAfter > 0) {
                    className.push('rt-sticky-header-line--has-switched-content')
                    if (this.showSecondHeaderContentAfterIsActive) {
                        className.push('rt-sticky-header-line--switched-content-is-active')
                    }
                }
                return className.join(' ')
            }
        },
        render(h) {
            if (this.deviceType === "desktop" && this.hideOnDesktop
                || this.deviceType === "tablet" && this.hideOnTablet
                || this.deviceType === "mobile" && this.hideOnMobile) {
                return null;
            }
            if (this.activeIndex >= 0) {
                if (this.isInvisible) {
                    if (this.rightContent) {
                        return <div ref="line" class={this.lineClass} style={{zIndex: this.zIndex}}>
                            <div class="flex-end-center">
                                <div class="rt-sticky-header-line__right-content d-inline-block">
                                    {this.$slots.default}
                                </div>
                            </div>
                        </div>;

                    } else {
                        return <div ref="line" class={this.lineClass} style={{zIndex: this.zIndex}}>
                            {this.$slots.default}
                        </div>;
                    }
                } else {
                    return <div ref="line" class={this.lineClass} style={{zIndex: this.zIndex}}>
                        <div class="rt-container">
                            <div class="rt-col-12">
                                {this.$slots.default}
                            </div>
                        </div>
                    </div>;
                }

            }


            return null;
        }
    };
</script>
