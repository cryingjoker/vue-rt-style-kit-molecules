<script type="text/jsx">
  export default {
    name: "RtRowList",
    props: {},
    render(h){
      return <div class="rt-row-list row">
        {this.$slots.default}
      </div>;
    }
  };
</script>
