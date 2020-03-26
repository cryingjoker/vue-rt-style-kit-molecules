<script type="text/jsx">
    export default {
        name: "RtSlideContentDottedContent",
        props: {
            isOpen: {
                type: Boolean,
                default: false
            },
        },
        render(h) {
            let slideContentClass = 'rt-slide-content-dotted-content';
            if (this.isOpen) {
                slideContentClass += ' rt-slide-content-dotted-content--is-active';
            }
            return <div class={slideContentClass} ref="header">{this.$slots.default}</div>
        }
    }


</script>
