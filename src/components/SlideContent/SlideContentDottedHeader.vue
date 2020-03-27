<script type="text/jsx">
    export default {
        name: "RtSlideContentDottedHeader",
        props: {
            isOpen: {
                type: Boolean,
                default: false
            },
        },

        render(h) {
            let headerClass = 'rt-slide-content-dotted-header';
            if (this.isOpen) {
                headerClass += ' rt-slide-content-dotted-header--is-active';
            }
            return <div class={headerClass} ref="header">{this.$slots.default}</div>
        }
    }

</script>
