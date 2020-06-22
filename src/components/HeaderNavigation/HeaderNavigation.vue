<script type="text/jsx">
    export default {
        name: "RtHeaderNavigation",
        components: {},
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
                activeNodePath: '0'
            };
        },
        computed: {
            navigationClasses() {
                let navClass = 'header-navigation--mobile';
                return navClass;
            }
        },
        mounted() {},
        created() {},
        methods: {
            navigateBack() {
                this.activeNodePath = this.activeNodePath.split('/');
                this.activeNodePath.pop();
                let targetNodeIndex = this.activeNodePath[this.activeNodePath.length - 1];
                if(this.activeNodePath.length === 1) {
                    this.activeNode = this.navTree;
                    this.activeNodeTitle = null;
                } else {
                    this.activeNodeTitle = this.navTree[targetNodeIndex].label;
                    this.activeNode = this.navTree[targetNodeIndex].items;
                }
                this.activeNodePath = this.activeNodePath.length !== 0 ? this.activeNodePath.join('/') : null;
            }
        },
        render(h) {
            const navigationTitle = () => {
                if(this.activeNodeTitle) {
                    return <div class="header-navigation__item-label rt-font-control rt-font-bold" onClick={this.navigateBack}>
                        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                             class="header-navigation__item-arrow header-navigation__item-arrow--back">
                            <path d="M4.5 1L1 4.5L4.5 8" stroke="#101828"/>
                        </svg>
                        {this.activeNodeTitle}
                    </div>
                }
            }
            const navigationWrapper = () => {
                return this.activeNode.map((item, index) => {
                    const navigate = () => {
                        this.activeNode = item.items;
                        this.activeNodeTitle = item.label;
                        this.activeNodePath += '/' + index;
                    }
                    if(item.items && item.items.length > 0) {
                        return <div class="header-navigation__item rt-font-control" onClick={navigate}>
                            {item.label}
                            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg"
                                class="header-navigation__item-arrow header-navigation__item-arrow--next">
                                <path d="M1 8L4.5 4.5L1 1" stroke="#101828"/>
                            </svg>
                        </div>

                    } else {
                        return <a href={item.path}>
                            <div class="header-navigation__item rt-font-control">
                                {item.label}
                            </div>
                        </a>
                    }
                });
            }

            return <div class={this.navigationClasses}>
                {navigationTitle()}
                {navigationWrapper()}
            </div>
        }
    };
</script>
