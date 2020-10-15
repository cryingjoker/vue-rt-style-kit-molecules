<script type="text/jsx">
    const componentsList = {};
    export default {
        name: "RtHeaderNavigation",
        components: componentsList,
        props: {
            navTree: {
                type: Array,
                default: () => ([])
            }
        },
        data() {
            return {
                activeNode: this.navTree,
                activeNodeTitle: null,
                activeNodePath: '0',
                adTitle: null,
                adSubTitle: null,
                adImage: null,
                adText: null,
                adLink: null,
                adLinkText: null,
                gaValue: [],
                gotBanner: false
            };
        },
        computed: {
            navigationClasses() {
                let navClass = 'header-navigation--mobile';
                return navClass;
            }
        },
        mounted() {
            if(this.gotBanner) {
                this.bindBannerClick()
            }
        },
        beforeUpdate() {
            if(this.gotBanner) {
                this.unbindBannerClick();
            }
        },
        updated(){
            if(this.gotBanner) {
                this.bindBannerClick();
            }
        },
        created() {},
        methods: {
            navigateBack() {
                if (!window.dataLayer) {
                    window.dataLayer = [];
                }
                this.activeNodePath = this.activeNodePath.split('/');
                this.activeNodePath.pop();
                let targetNodeIndex = this.activeNodePath[this.activeNodePath.length - 1];
                if(this.activeNodePath.length === 1) {
                    this.activeNode = this.navTree;
                    this.activeNodeTitle = null;
                } else {
                    this.activeNodeTitle = this.navTree[targetNodeIndex].label;
                    this.activeNode = this.navTree[targetNodeIndex].items;
                    this.adTitle = this.navTree[targetNodeIndex].adTitle;
                    this.adImage = this.navTree[targetNodeIndex].image;
                    this.adText = this.navTree[targetNodeIndex].adText;
                    this.adLink = this.navTree[targetNodeIndex].linkTarget;
                    this.adLinkText = this.navTree[targetNodeIndex].linkText;
                }
                this.activeNodePath = this.activeNodePath.length !== 0 ? this.activeNodePath.join('/') : null;
                this.gaValue.pop();
            },
            pushData($event) {
                $event.preventDefault();
                this.gaValue.push($event.target.innerText);
                let targetLink;
                if($event.target.localName == 'div') {
                    targetLink = $event.target.closest('a').getAttribute('href');
                } else if($event.target.localName == 'a') {
                    targetLink = $event.target.getAttribute('href');
                }
                if (!window.dataLayer) {
                    window.dataLayer = [];
                }
                window.dataLayer.push({
                    'event': window.RTK_UTILS ? window.RTK_UTILS.currentSegment : 'b2c',
                    'type': 'main_nav',
                    'value': this.gaValue.join(' | ')
                });
                window.location = targetLink;
            },
            bindBannerClick(){
                this.$refs.promoBanner.$el.addEventListener('click', ($event) => {
                    this.pushBannerData($event)
                })
            },
            unbindBannerClick(){
                this.$refs.promoBanner.$el.removeEventListener('click', ($event) => {
                    this.pushBannerData($event)
                })
            },
            pushBannerData($event) {
                $event.preventDefault();
                this.gaValue.push(this.adTitle);
                if (!window.dataLayer) {
                    window.dataLayer = [];
                }
                window.dataLayer.push({
                    'event': window.RTK_UTILS ? window.RTK_UTILS.currentSegment : 'b2c',
                    'type': 'banner_nav',
                    'value': this.gaValue.join(' | ')
                });
                window.location = this.adLink;
            }
        },
        render(h) {
            const navigationTitle = () => {
                if(this.activeNodeTitle) {
                    return <div class="header-navigation__item-label rt-font-small-paragraph rt-font-bold" onClick={this.navigateBack}>
                        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="header-navigation__item-arrow header-navigation__item-arrow--back">
                            <path d="M4.5 1L1 4.5L4.5 8" stroke="#101828"/>
                        </svg>
                        <span domPropsInnerHTML={this.activeNodeTitle}/>
                    </div>
                }
            };
            const navigationWrapper = () => {
                return this.activeNode.map((item, index) => {
                    const navigate = () => {
                        this.activeNode = item.items;
                        this.activeNodeTitle = item.label;
                        this.activeNodePath += '/' + index;
                        this.adTitle = item.adTitle;
                        this.adImage = item.image;
                        this.adText = item.adText;
                        this.adLink = item.linkTarget;
                        this.adLinkText = item.linkText;
                        if (!window.dataLayer) {
                            window.dataLayer = [];
                        }
                        this.gaValue.push(item.label);
                    };
                    if(item.items && item.items.length > 0) {
                        return <div class="header-navigation__item rt-font-small-paragraph" onClick={navigate}>
                            <p domPropsInnerHTML={item.label}/>
                            {item.subTitle ? <p class="rt-font-control color-main05 sp-t-0-1" domPropsInnerHTML={item.subTitle}/> : null}
                            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="header-navigation__item-arrow header-navigation__item-arrow--next">
                                <path d="M1 8L4.5 4.5L1 1" stroke="#101828"/>
                            </svg>
                        </div>

                    } else {
                        return <a href={item.path} onClick={this.pushData}>
                            <div class={"header-navigation__item rt-font-small-paragraph " + item.class}>
                                <div domPropsInnerHTML={item.label}/>
                                {item.subTitle ? <p class="rt-font-control color-main05 sp-t-0-1" domPropsInnerHTML={item.subTitle}/> : null}
                            </div>
                        </a>
                    }
                });
            }

            const navigationAdvertisement = () => {
                this.gotBanner = true;
                if(this.activeNodePath.length === 3 && this.adTitle) {
                    return <rt-header-advertisement-block image={this.adImage}
                                                          link-target={this.adLink}
                                                          link-text={this.adLinkText}
                                                          ref="promoBanner">
                        <template slot="title">{this.adTitle}</template>
                        <template slot="paragraph">{this.adText}</template>
                    </rt-header-advertisement-block>
                } else {
                    this.gotBanner = false;
                }
            };

            return <div class={this.navigationClasses}>
                {navigationTitle()}
                {navigationWrapper()}
                {navigationAdvertisement()}
            </div>
        }
    };
</script>
