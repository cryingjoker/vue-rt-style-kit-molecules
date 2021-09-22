<script type="text/jsx">
    import './CheckboxTabs.styl'
    import {tabsStore} from "../Tabs/TabsStore.js";



    export default {
        name: "RtCheckboxTabs",

        props: {
            isActive: {
                type: Boolean,
                default: false
            },
            hideNotActive: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            deviceType: "pc",
            isActiveLocal: false
        }),


        mounted: function () {
            this.checkCheckboxOnLoad();
        },

        updated() {

        },
        beforeDestroy: function () {
        },
        methods: {
            checkCheckboxOnLoad() {
                if (this.$refs.checkbox && this.$refs.checkbox.$refs && this.$refs.checkbox.$refs.input && this.$refs.checkbox.$refs.input.checked) {
                    this.isActiveLocal = this.$refs.checkbox.$refs.input.checked;
                }
            },
            onChange(event) {
              if(event.target) {
                this.isActiveLocal = event.target.checked;
              }else{
                this.isActiveLocal = event
              }
            },
            setActiveTabName(name, hashAnchor = false) {
                tabsStore.setActiveTabName(name, hashAnchor);
                if (typeof(Event) === 'function') {
                  window.dispatchEvent(new Event('resize'));
                } else {
                  var evt = window.document.createEvent('UIEvents');
                  evt.initUIEvent('resize', true, false, window, 0);
                  window.dispatchEvent(evt);
                }
                if (hashAnchor) {
                    window.history.replaceState(undefined, undefined, "#" + hashAnchor);
                }
            },

            addTabName(name) {
                if (this.RtTabs.namesArray.length === 0) {
                    this.setActiveTabName(name);
                }
                this.RtTabs.namesArray.push(name);
            }


        },
        render(h) {
            const content = () => {
                if (this.hideNotActive) {
                    if (this.isActiveLocal) {
                        return <div class="rt-tabs-checklist-content">
                            <div class="rt-tabs-checklist-content__item">{this.$slots.content[1]}</div>
                        </div>
                    } else {
                        return <div class="rt-tabs-checklist-content">
                            <div class="rt-tabs-checklist-content__item">{this.$slots.content[0]}</div>
                        </div>
                    }
                } else {
                    return <div class="rt-tabs-checklist-content">
                        <div class="rt-tabs-checklist-content__item">{this.$slots.content[0]}</div>
                        <div class="rt-tabs-checklist-content__item">{this.$slots.content[1]}</div>
                    </div>
                }
            }
            return <div
                class={"rt-tabs-checklist" + (this.isActiveLocal && !this.hideNotActive ? " rt-tabs-checklist--is-active" : "")}>
                <div class="rt-tabs-checklist-input">
                    <rt-checkbox onChange={this.onChange} ref="checkbox"
                                 name={"rt-checkbox-" + this._uid}>{this.$slots.label}</rt-checkbox>
                </div>
                {content()}

            </div>;


        }
    };
</script>
