<script type="text/jsx">
    import variables from "../../variables.json";
    import browser from "../../utils/browser";
    import {deviceTypeStore} from "vue-rt-style-kit-atoms";

    const componentsList = {};

    export default {
        name: "RtBannerItem",
        components: componentsList,
        props: {
            hasCustomContent: {
                type: Boolean,
                default: false
            },
            link: {
                type: String,
                default: null
            },
            mobileImageMaxHeight: {
                type: String,
                default: null
            },
            tabletImageMaxHeight: {
                type: String,
                default: null
            },
            linkTarget: {
                type: String,
                default: null
            },
            ancorHashLink: {
                type: String,
                default: null
            },
            ancorGetParamsLink: {
                type: String,
                default: null
            },
            contentMinHeight: {
                type: [Number, String],
                default: null
            },
            contentHeight: {
                type: [Number, String],
                default: null
            },
            contentMobileMinHeight: {
                type: [Number, String],
                default: null
            },
            contentMobileHeight: {
                type: [Number, String],
                default: null
            },
            contentTabletMinHeight: {
                type: [Number, String],
                default: null
            },
            contentTabletHeight: {
                type: [Number, String],
                default: null
            },
            contentMinWidth: {
                type: [Number, String],
                default: null
            },
            contentMaxWidth: {
                type: [Number, String],
                default: null
            },
            backgroundVideo: {
                type: String,
                default: null
            },
            backgroundColor: {
                type: String,
                default: null
            },
            backgroundImage: {
                type: String,
                default: null
            },
            backgroundImageMobile: {
                type: String,
                default: null
            },
            backgroundImageTablet: {
                type: String,
                default: null
            },
            backgroundImageWebp: {
                type: String,
                default: null
            },
            lazyImage: {
                type: String,
                default: null
            },
            lazyImageMobile: {
                type: String,
                default: null
            },
            lazyImageTablet: {
                type: String,
                default: null
            },
            preloadImage: {
                type: Boolean,
                default: false
            },
            isWhiteColor: {
                type: Boolean,
                default: false
            },
            backgroundPosition: {
                type: String,
                default: null
            },
            slideTime: {
                type: [String, Number],
                default: null
            },
            isGameBannerItem: {
                type: Boolean,
                default: false
            },
            ga: {
                type: Object,
                default: null
            },
            gaB2b: {
                type: Object,
                default: null
            },
            hasImageOnMobile: {
                type: Boolean,
                default: false
            },
            colorFillOnMobile: {
                type: Boolean,
                default: false
            },
            halfHeightImage: {
                type: Boolean,
                default: false
            }
        },
        inject: {
            RtBanners: {}
        },

        data() {
            return {
                id: this._uid,
                index: null,
                deviceType: 'desktop'
            };
        },
        beforeUpdate() {
            deviceTypeStore.removeWatcher(this._uid,this.calculateMobileOptions)

        },
        updated() {
            deviceTypeStore.addWatcher(this._uid,this.calculateMobileOptions);
        },
        beforeDestroy: function () {
            deviceTypeStore.removeWatcher(this._uid,this.calculateMobileOptions)
        },
        beforeMount: function () {
            this.calculateMobileOptions();
            if (this.RtBanners) {
                this.index = this.RtBanners.items.length;
                const bannerItemData = {
                    isWhiteColor: this.isWhiteColor,
                    id: this.id
                };
                if (this.computedBackgroundImage) {
                    bannerItemData.backgroundImage = this.computedLazyImage || this.computedBackgroundImage;
                    if (this.computedLazyImage) {
                        this.loadImageAsync(this.computedBackgroundImage, img => {
                            bannerItemData.backgroundImage = this.computedBackgroundImage;
                        });
                    }
                }
                if (this.backgroundColor) {
                    bannerItemData.backgroundColor = this.backgroundColor
                }

                if (this.hasImageOnMobile) {
                    bannerItemData.imageOnMobile = this.hasImageOnMobile;
                }
                if (this.backgroundVideo) {
                    bannerItemData.backgroundVideo = this.backgroundVideo;
                }
                if (this.slideTime) {
                    bannerItemData.slideTime = this.slideTime;
                }
                if (this.ancorHashLink) {
                    bannerItemData.ancorHashLink = this.ancorHashLink;
                }
                if (this.ancorGetParamsLink) {
                    bannerItemData.ancorGetParamsLink = this.ancorGetParamsLink;
                }
                if (this.link) {
                    bannerItemData.link = this.link;
                }
                if (this.linkTarget) {
                    bannerItemData.linkTarget = this.linkTarget;
                }
                if (this.isGameBannerItem) {
                    bannerItemData.isGameBannerItem = this.isGameBannerItem;
                }
                if (this.colorFillOnMobile) {
                    bannerItemData.colorFillOnMobile = this.colorFillOnMobile
                }
                if (this.halfHeightImage) {
                    bannerItemData.halfHeightImage = this.halfHeightImage
                }

                this.RtBanners.items.push(bannerItemData);
                if (this.ancorHashLink && location.hash) {
                    if (location.hash.replace(/#/, "") === this.ancorHashLink) {
                        this.RtBanners.activeIndex = this.RtBanners.items.length - 1;
                    }
                }
                if (this.ancorGetParamsLink) {
                    let getParams = location.href.split("?");
                    if (getParams.length > 1) {
                        if (getParams[1].search(this.ancorGetParamsLink) >= 0) {
                            this.RtBanners.activeIndex = this.RtBanners.items.length - 1;
                        }
                    }
                }
                if (this.preloadImage || this.computedLazyImage) {
                    const preloadImage = new Image()
                    preloadImage.src = this.computedBackgroundImage
                }
            }
        },
        computed: {
            bannerItemWrapperClass() {
                let bannerItemWrapperClass = "";
                if (this.isGameBannerItem) {
                    bannerItemWrapperClass += 'rt-banner__item-wrapper rt-banner__item-wrapper-game';
                }
                return bannerItemWrapperClass;
            },
            bannerStyle() {
                const styles = {};

                if (this.contentMinWidth !== null) {
                    styles.minWidth = this.normalizeVariable(this.contentMinWidth);
                }
                if (this.contentMaxWidth !== null) {
                    styles.maxWidth = this.normalizeVariable(this.contentMaxWidth);
                }
                switch (this.deviceType) {
                    case 'mobile':
                        if (this.contentMobileMinHeight !== null) {
                            styles.minHeight = this.normalizeVariable(
                                this.contentMobileMinHeight
                            );
                        }
                        if (this.contentMobileHeight !== null) {
                            styles.height = this.normalizeVariable(this.contentMobileHeight);
                        }
                        if (this.mobileImageMaxHeight) {
                            styles.maxHeight = this.mobileImageMaxHeight;
                        }
                        break
                    case 'tablet':
                        if (this.contentTabletMinHeight !== null) {
                            styles.minHeight = this.normalizeVariable(
                                this.contentTabletMinHeight
                            );
                        }
                        if (this.contentTabletHeight !== null) {
                            styles.height = this.normalizeVariable(this.contentTabletHeight);
                        }
                        break;
                    default:
                        if (this.contentMinHeight) {
                            styles.minHeight = this.normalizeVariable(this.contentMinHeight);
                        }
                        if (this.contentHeight) {
                            styles.height = this.normalizeVariable(this.contentHeight);
                        }

                }

                return styles;
            },
            bannerClass() {
                let className = " rt-banner__item-wrapper";
                if (this.RtBanners && this.RtBanners.activeIndex === this.index) {
                    className += " rt-banner-content--active";
                }

                return className;
            },

            computedBackgroundImage() {
                return this.computedBackgroundImageFn()
            },
            computedLazyImage() {
                let result
                if (this.deviceType === 'mobile' && this.lazyImageMobile) {
                    result = this.lazyImageMobile
                } else if (this.deviceType === 'tablet' && this.lazyImageTablet) {
                    result = this.lazyImageTablet
                } else {
                    result = this.lazyImage
                }
                return result
            }
        },
        mounted() {
            deviceTypeStore.addWatcher(this._uid,this.calculateMobileOptions);
            this.calculateMobileOptions();
            if (this.RtBanners.activeIndex < 0 && this.RtBanners.items.length) {
              this.RtBanners.activeIndex = 0
            }
            if (this.ga) {
                this.activateEventToLink('b2c', this.ga);
            }
            if (this.gaB2b) {
                this.activateEventToLink('b2b', this.gaB2b);
            }

            window.addEventListener('resize', () => {
                let computedBackgroundImage = this.computedBackgroundImageFn();
                if (computedBackgroundImage) {
                    this.$forceUpdate()

                    if (this.RtBanners.items[this.index]) {
                        this.RtBanners.items[this.index].backgroundImage = computedBackgroundImage;

                        if (this.computedLazyImage) {
                            this.loadImageAsync(computedBackgroundImage, img => {
                                this.RtBanners.items[this.index].backgroundImage = computedBackgroundImage;
                            });
                        }
                    }
                }
            })

        },
        methods: {
            calculateMobileOptions() {
                const type = deviceTypeStore.getStatus();
                this.deviceType = type;
            },
            computedBackgroundImageFn() {
                let result

                if (this.deviceType === 'mobile' && this.backgroundImageMobile) {
                    result = this.backgroundImageMobile
                } else if (this.deviceType === 'tablet' && this.backgroundImageTablet) {
                    result = this.backgroundImageTablet
                } else if (browser.supportedWebP && this.backgroundImageWebp) {
                    result = this.backgroundImageWebp
                } else {
                    result = this.backgroundImage
                }
                return result
            },
            normalizeVariable(variable) {
                if (typeof variable === "number") {
                    variable += "px";
                }
                return variable;
            },
            activateEventToLink(typeEvent, ga) {
                if (this.$el.querySelector('a')) {
                    let parentId = this.RtBanners.id;
                    let currentKey = this.index;
                    this.$el.querySelector('a').addEventListener('click', function (e) {
                        if (!this.getAttribute('data-ga-pushed')) {
                            e.preventDefault();
                            if (!window.dataLayer) {
                                window.dataLayer = [];
                            }
                            window.dataLayer.push({
                                event: typeEvent,
                                type: 'banner_click',
                                banner_name: ga.name,
                                banner_id: parentId,
                                banner_place: currentKey + 1,
                                banner_section: ga.section || window.location.pathname
                            });
                            this.setAttribute('data-ga-pushed', 'true');
                            this.click();
                        }
                    }, false);
                }
            },
            loadImageAsync(src, resolve, reject = function (err) {
            }) {
                let image = new Image();
                image.src = src;
                image.onload = function () {
                    resolve({
                        naturalHeight: image.naturalHeight,
                        naturalWidth: image.naturalWidth,
                        src: image.src
                    });
                };
                image.onerror = function (e) {
                    reject(e);
                };
            }
        },
        render(h) {
            const content = () => {
                if (this.isGameBannerItem) {
                    return <rt-banner-video-game-contron></rt-banner-video-game-contron>;
                }
                return null;
            };
            //return <div style={this.bannerStyle} class={"rt-banner__item" + (this.RtBanners.activeIndex === this.index ? " rt-banner__item--is-active" : "")} >{this.$slots.default}</div>
            if (this.hasCustomContent) {
                let bannerClass = "rt-banner__item";
                if (this.RtBanners.activeIndex) {
                    bannerClass += " rt-banner__item--is-active";
                }

                //return <div style={this.bannerStyle} class={"rt-banner__item" + (this.RtBanners.activeIndex === this.index ? " rt-banner__item--is-active" : "")} >{this.$slots.default}</div>
                return <div
                    class={"rt-banner__item" + (this.RtBanners.activeIndex === this.index ? " rt-banner__item--is-active" : "")}
                    style={this.bannerStyle}>
                    {this.$slots.default}
                    {content()}
                </div>;
            } else {

                return <div style={this.bannerStyle} class={"rt-banner-content" + this.bannerClass}>
                    <div class="rt-banner-content__inner">
                        {this.$slots.default}
                        {content()}
                    </div>
                </div>
            }
        }
    };
</script>
