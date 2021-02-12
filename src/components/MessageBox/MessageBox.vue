<script type="text/jsx">

import Global from '../../variables.json'

export default {
  name: 'RtMessageBox',
  data() {
    return {
      show: false
    }
  },
  props: {
    buttonText: {
      type: String,
      default: 'Перейти'
    },
    timeout: {
      type: Number,
      default: 20
    },
    link: {
      type: String
    },
    theme: {
      type: String,
      default: 'light'
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
        (this.isLightTheme ? ' rt-message-box--is-theme-light background-white color-main' : ' rt-message-box--is-theme-dark background-main-color color-white') +
        (this.show ? ' rt-message-box--is-show' : '') +
        ' sp-v-0-3 sp-h-0-4 td-sp-v-1 td-sp-h-1 md-sp-v-1-1'
    },
    closeIconColor() {
      return this.isLightTheme ? 'main-color05' : 'white'
    },
    buttonColor() {
      return this.isLightTheme ? 'orange' : 'full-white'
    },
    href() {
      return this.link || (this.isB2cSegment ? '/' : ('/' + this.segment))
    }
  },
  mounted() {
    setTimeout(() => this.show=true, this.timeoutInMs)
  },
  methods: {
    close() {
      this.fireGoogleAn('close_popup')
      this.show=false
    },
    action(e) {
      e.preventDefault()
      this.fireGoogleAn('home_page')
      global.location.href=this.href
    },
    fireGoogleAn(value) {
      if (!window.dataLayer) {
        window.dataLayer=[]
      }
      dataLayer.push({
        event: this.segment,
        type: 'popup_interaction',
        value
      })
    }
  },
  render(h) {
    return <div class={this.parentClasses}>
      <div class="td-d-flex td-flex-v-end td-space-between">
        <div>
          {this.$slots.default}
        </div>
        <a onClick={this.action} class="d-inline-block flex-fill sp-t-0-3 td-sp-t-none td-sp-l-1-2 md-sp-l-1">
          <rt-button small={true} color={this.buttonColor} bright={this.isDarkTheme}>
            {this.buttonText}
          </rt-button>
        </a>
      </div>

      <button class="rt-message-box__close flex-center-center rt-sys-icon-hover--orange" onClick={this.close}>
        <rt-system-icons name="close large" color={this.closeIconColor} />
      </button>

      <svg width="107" height="92" viewBox="0 0 107 92" xmlns="http://www.w3.org/2000/svg"
           class="rt-message-box__corner">
        <path d="M107 33 V0 C106 9 105 39 66 60 C90 48 99 46 107 33 Z" fill={this.segmentColor} />
        <path d="M65 60 L0 92 L107 92 V32 C103 44 78 53 65 60 Z" fill="#FF4F12" />
      </svg>
    </div>
  }
}
</script>
