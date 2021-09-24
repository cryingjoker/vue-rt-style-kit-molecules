<script type="text/jsx">
import './DownloadContent.styl'
export default {
  name: "RtDownloadContent",
  props: {
    expansion: {
      type: String,
      default: ''
    },
    fileSize: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  computed: {},
  mounted() {
    if (this.link) {
      if (!this.exception) {
        this.exception = this.link
          .split(".")
          .pop()
          .split(/\?#/)[0];
      }
    }
  },
  render: function(h) {
    return (
      <div class="download-content">
        <div class="download-content__icon">
          <svg width="17px" height="22px" viewBox="0 0 17 22" xmlns="http://www.w3.org/2000/svg" class="download-content__icon-svg">
            <g stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
              <g transform="translate(1.000000, 0.000000)">
                <g transform="translate(0.000000, 1.000000)">
                  <polygon points="14.4782609 4.08695652 14.4782609 19.8695652 0.304347826 19.8695652 0.304347826 0.130434783 10.5652174 0.130434783"/>
                  <polyline points="14.4782609 4.8 9.86406581 4.8 9.86406581 0.130434783"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="download-content__text">{this.$slots.default}</div>
        <div class="download-content__info">
          {this.fileSize}
          {this.expansion ? ", " + this.expansion : ""}
        </div>
      </div>
    );
  }
};
</script>
