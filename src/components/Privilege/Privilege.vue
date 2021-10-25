<script type="text/jsx">
import {deviceTypeStore} from "vue-rt-style-kit-atoms";
import './Privilege.styl'
export default {
  name: "RtPrivilege",
  props: {
    inLine: {
      type: Boolean,
      default: false
    },
    hasDotted: {
      type: Boolean,
      default: false
    },
    mobileDropdown: {
      type: Boolean,
      default: false
    },
    withCircle:{
      type: Boolean,
      default: false
    },
    normalizeIcon:{
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      deviceType: '',
      mobileDropdownOpen: false
    };
  },
  watch: {},
  mounted() {
    deviceTypeStore.addWatcher(this._uid, this.setDeviceType);
    this.setDeviceType()
  },
  methods: {
    triggerDropdown(){
      this.mobileDropdownOpen = !this.mobileDropdownOpen
    },
    setDeviceType() {
      const type = deviceTypeStore.getStatus()
      if (this.deviceType != type) {
        this.deviceType = type;
      }
    },
  },
  computed: {},
  render() {


    const renderContent = () => {
      if (this.$slots.content) {
        return this.$slots.content
      }
      return null
    }
    const renderLabel = () => {
      if (this.$slots.label) {
        const labelClassList = [];
        if (this.$slots.content && (!this.mobileDropdown || !this.$slots.label || !this.$slots.icon || !this.$slots.content  || this.deviceType.search('mobile') < 0)) {

            labelClassList.push('sp-b-x3')
        }
        if (this.$slots.icon) {
          return <div class={labelClassList}>{this.$slots.label}</div>
        } else {
          return <div class={labelClassList}>{this.$slots.label}
            <div class="sp-t-0-3">
              <rt-line class="rt-privilege-line"></rt-line>
            </div>
          </div>
        }
      }
      if (!this.$slots)
        return null
    }
    if ((this.inLine || this.deviceType.search(/desktop/g) < 0) && !this.withCircle) {
      const flexClassList = ['d-flex', 'flex-v-center']
      if (this.$slots.icon) {
        flexClassList.push('sp-l-x6')
      }

      if (this.mobileDropdown && this.$slots.icon && this.$slots.label && this.$slots.content  && this.deviceType.search('mobile') >= 0) {
        const dropdownClassList = ["sp-l-4", "rt-privilege-dropdown sp-r-1"]
        if(this.mobileDropdownOpen){
          dropdownClassList.push('rt-privilege-dropdown-active');
        }
        const arrowClassList = ['rt-privilege-arrow']
        if(this.mobileDropdownOpen){
          arrowClassList.push('rt-privilege-arrow--active')
        }
        const wrapClassList = ['d-flex', 'relative'];
        if(this.normalizeIcon){
          wrapClassList.push('rt-privilege-normalize-icon')
        }
        wrapClassList.push('sp-r-1')
        return <div  onClick={this.triggerDropdown}>
          <div class={wrapClassList}>
            <div>
              {this.$slots.icon}
            </div>
            <div class={flexClassList}>
              {renderLabel()}
            </div>
            <rt-system-icons class={arrowClassList} color="main-color03-no-opacity" name="chevron down"></rt-system-icons>
          </div>
          <div class={dropdownClassList}>
            {renderContent()}
          </div>

        </div>
      }
      const wrapClassList = ['d-flex','sp-r-1']

      if(this.normalizeIcon){
        wrapClassList.push('rt-privilege-normalize-icon')
      }
      return <div class={wrapClassList}>
        <div>
          {this.$slots.icon}
        </div>
        <div class={flexClassList}>
          <div>
            {renderLabel()}
            {renderContent()}
          </div>
        </div>
      </div>
    } else {
      const wrapClassList = []
      if(this.withCircle){
        wrapClassList.push('d-flex')
        wrapClassList.push('flex-column')
        wrapClassList.push('flex-v-center')
        wrapClassList.push('rt-font-center')
        wrapClassList.push('sp-h-1')
        if(this.hasDotted) {
          wrapClassList.push('td-sp-t-4')
          wrapClassList.push('rt-privilege-has-dotted')
        }
      }else{
        wrapClassList.push('sp-r-1')
      }
      if(this.normalizeIcon){
        wrapClassList.push('rt-privilege-normalize-icon')
      }
      return <div class={wrapClassList}>
        <div class="sp-b-x6">
          {this.$slots.icon}
        </div>
        {renderLabel()}
        {renderContent()}
      </div>
    }


  }
};
</script>
