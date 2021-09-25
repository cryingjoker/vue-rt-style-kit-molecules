<script type="text/jsx">
import './Sticky.styl'
export default {
  name: "RtSticky",
  render(h){
    return <div class="rt-sticky">
      {this.$slots.default}
    </div>;
  }
};
</script>
