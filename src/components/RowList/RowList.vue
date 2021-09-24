<script type="text/jsx">
  import './RowList.styl'
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
