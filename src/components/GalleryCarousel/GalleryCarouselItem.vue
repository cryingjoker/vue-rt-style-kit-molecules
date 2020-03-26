<script type="text/jsx">
    import variables from "../../variables.json";

    export default {

        name: "RtGalleryCarouselItem",

        mounted() {

        },

        render(h) {
            return <div class="rt-gallery-carousel-item">{this.$slots.default}</div>;
        }
    }
</script>
