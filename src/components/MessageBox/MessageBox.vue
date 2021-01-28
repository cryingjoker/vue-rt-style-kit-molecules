<script type="text/jsx">

import Global from "../../variables.json";

export default {
  name: "RtMessageBox",
  data() {
    return {
      show: false
    }
  },
  props: {
    title: {
      type: String,
      default: 'Не нашли, что искали?',
      required: false
    },
    description: {
      type: String,
      default: 'Больше информации и предложений на нашем сайте',
      required: false
    },
    buttonText: {
      type: String,
      default: 'Перейти',
      required: false
    },
    timeout: {
      type: Number,
      default: 1, // TODO: поменять при релизе на 20
      required: false
    },
    link: {
      type: String,
      required: false
    },
    theme: {
      type: String,
      default: 'light',
      required: false
    }
  },
  computed: {
    segment() {
      return window[Global.globalSettingsKey].segment
    },
    isB2cSegment() {
      return this.segment === 'b2c'
    },
    isB2bSegment() {
      return this.segment === 'b2b'
    },
    segmentColor() {
      return this.isB2cSegment ? '#7700FF' : '#7B929B'
    },
    timeoutInMs() {
      return this.timeout * 1000
    },
    isDarkTheme() {
      return this.theme === 'dark'
    },
    isLightTheme() {
      return this.theme === 'light'
    },
    parentClasses() {
      return 'rt-message-box' +
      (this.isLightTheme ? ' rt-message-box__theme-light background-white color-main' : ' background-main-color color-white') +
      (this.show ? ' rt-message-box__show' : '') +
      ' sp-v-0-3 sp-h-0-4'
    },
    closeIconColor() {
      return this.isLightTheme ? 'main-color05' : 'white'
    },
    buttonColor() {
      return this.isLightTheme ? 'orange' : 'full-white'
    },
    href() {
      return this.link || ( '/' + this.segment )
    }
  },
  mounted() {
    // TODO: Show animation
    setTimeout(() => this.show = true, this.timeoutInMs)
  },
  methods: {
    close() {
      this.show = false
    }
  },
  render(h) {
    return <div class={ this.parentClasses }>
      <p class="rt-font-small-paragraph rt-font-bold">{ this.title }</p>
      <p class="rt-font-control sp-t-0-2">{ this.description }</p>
      <a href= { this.href } class="d-inline-block sp-t-0-3">
        <rt-button small={ true } color={ this.buttonColor } bright={ this.isDarkTheme }>{ this.buttonText }</rt-button>
      </a>

      <button class="rt-message-box-close flex-center-center rt-sys-icon-hover--orange" onClick={ this.close }>
        <rt-system-icons name="close large"  color={ this.closeIconColor }/>
      </button>

      <svg width="107" height="92" viewBox="0 0 107 92" xmlns="http://www.w3.org/2000/svg" class="rt-message-box-corner">
        <path d="M107 33 V0 C106 9 105 39 66 60 C90 48 99 46 107 33 Z" fill={ this.segmentColor }/>
        <path d="M65 60 L0 92 L107 92 V32 C103 44 78 53 65 60 Z" fill="#FF4F12"/>
      </svg>
    </div>
  }
}
</script>
