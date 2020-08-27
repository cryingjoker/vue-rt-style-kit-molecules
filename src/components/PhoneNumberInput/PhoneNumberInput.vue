<script type="text/jsx">
  const componentsList = {};
  import variables from "../../variables.json";
  export default {
    name: "RtPhoneNumberInput",
    components: componentsList,
    props: {
      prefix: {
        type: Number,
        default: 8
      },
      areaCode: {
        type: Array,
        default: []
      },
      autoComplete: {
        type: String,
        default: ''
      },
      submitButtonText: {
        type: String,
        default: 'Подобрать номер'
      },
      clearButtonText: {
        type: String,
        default: 'Очистить фильтр'
      }
    },
    data(){
      return {
        localVal: '',
        inputsLength: null,
        localAutoComplete: [],
        targetIndex: null,
        eraseButton: false,
        startVal: '',
        nowVal: '',
        startCode: '',
        areaCodeLength: null,
        selectWasInteracted: 0,
        areaCodeLocal: []
      }
    },
    watch: {
      autoComplete(newVal, oldVal) {
        this.countStartVal();
      },
      areaCode(newVal, oldVal) {
        this.areaCodeLocal = newVal;
        this.countStartVal();
      }
    },
    computed: {
      prefixClass() {
        let classList = '';
        if(this.prefix.toString().length > 1 && window.innerWidth <= parseInt(variables["mobile-upper-limit"])) {
          classList += ' rt-phone-input__prefix--separated'
        }
        return classList;
      }
    },
    mounted(){
      this.localVal = this.autoComplete;
      this.areaCodeLocal = this.areaCode;

      this.countStartVal();
    },
    methods: {
      countStartVal(){
        if(this.areaCodeLocal.length) {
          if(!isNaN(this.areaCodeLocal[0].value)) {
            this.areaCodeLength = this.areaCodeLocal[0].value.toString().length;
          } else {
            this.areaCodeLength = this.areaCodeLocal[1].value.toString().length;
          }
          this.inputsLength = 11 - this.prefix.toString().length - this.areaCodeLength;
        }
        this.localAutoComplete = this.localVal.split('');
        this.localAutoComplete.map((item, index) => {
          item == '\\' ? this.localAutoComplete.splice(index, 1) : false;
        });
        this.startVal = this.prefix.toString();
        if(this.areaCodeLocal.length) {
          if(this.areaCodeLocal.length > 1) {
            if(isNaN(this.areaCodeLocal[0].value)) {
              for(let i = 0; i < this.areaCodeLength; i++) {
                this.startVal += '\\d';
              }
            } else {
              this.startVal += this.areaCodeLocal[0].value;
            }
          } else {
            this.startVal += this.areaCodeLocal[0].value;
          }
        }
        if(this.autoComplete) {
          this.startVal += this.autoComplete;
        } else {
          for(let i = 0; i < this.inputsLength; i++) {
            this.startVal += '\\d';
            this.localAutoComplete.push('\\d')
          }
        }
      },
      changeValue($event) {
        if($event.key.match(/\d/)) {
          if($event.target.value.length == 1) {
            $event.target.value = ''
          }
        }
        if($event.keyCode === 8) {
          if($event.target.value != '') {
            $event.target.value = '';
          } else {
            if($event.target.previousSibling) {
              let activeIndex = Array.prototype.indexOf.call(this.$refs.inputsWrapper.children, $event.target);
              this.targetIndex = this.countActive('backward', activeIndex);
              this.$refs.inputsWrapper.children[this.targetIndex].focus()
            }
          }
        }
        this.$emit('input-interaction-detected');
      },
      moveFocus($event) {
        if(isNaN(+$event.key - 1)) {
          $event.target.value = $event.target.value.substr(0, $event.target.value.length);
        }
        let activeIndex = Array.prototype.indexOf.call(this.$refs.inputsWrapper.children, $event.target);
        if($event.target.value != '' && $event.target.nextSibling && $event.key.match(/\d/)) {
          this.targetIndex = this.countActive('forward', activeIndex);
          this.$refs.inputsWrapper.children[this.targetIndex].focus()
        }
        if($event.target.value != '' && activeIndex == this.$refs.inputsWrapper.children.length - 1) {
          this.$refs.submitBtn.$el.focus();
        }
        this.eraseButton = this.startVal !== this.nowVal;
      },
      setFocus() {
        this.targetIndex = this.countActive('forward', -1);
        this.$refs.inputsWrapper.children[this.targetIndex].focus();
        this.stickNumber();
        this.selectWasInteracted++;
        if(this.selectWasInteracted > 1) {
          this.$emit('select-interaction-detected');
        }
      },
      countActive(dir, index) {
        let quantity = this.$refs.inputsWrapper.children.length;
        if(dir == 'forward') {
          for(let i = index + 1; i < quantity; i++) {
            if(this.$refs.inputsWrapper.children[i] && !this.$refs.inputsWrapper.children[i].hasAttribute('disabled')) {
              return i;
            }
          }
        } else if(dir = 'backward') {
          for(let i = index - 1; i >= 0; i--) {
            if(this.$refs.inputsWrapper.children[i] && !this.$refs.inputsWrapper.children[i].hasAttribute('disabled')) {
              return i;
            }
          }
        }
      },
      setCursor($event) {
        $event.target.placeholder = '';
      },
      returnPlaceholder($event) {
        $event.target.placeholder = 'X';
      },
      stickNumber() {
        this.nowVal = this.prefix;
        if(this.$refs.dropdown) {
          if(!isNaN(this.$refs.dropdown.localValue)) {
            this.nowVal += this.$refs.dropdown.localValue;
          } else {
            for(let i = 0; i < this.areaCodeLength; i++) {
              this.nowVal += '\\d';
            }
          }
        } else {
          this.nowVal += this.$refs.preselected.innerText;
        }
        for(let i = 0; i < this.inputsLength; i++) {
          if(this.$refs['input-' + i]) {
            if(this.$refs['input-' + i].value == '') {
                this.nowVal += '\\d';
            } else {
                this.nowVal += this.$refs['input-' + i].value;
            }
          }
        }
        this.eraseButton = this.startVal !== this.nowVal;
        if(this.wasInteracted > 0) {
          this.$emit('selected-number', this.nowVal);
        }
      },
      emitOrder() {
        this.$emit('selected-number', this.nowVal)
      },
      clearData() {
        this.$refs.dropdown ? this.$refs.preselected.setSelection() : false;
        for(let i = 0; i < this.inputsLength; i++) {
          !this.$refs['input-' + i].hasAttribute('disabled') ? this.$refs['input-' + i].value = '' : false;
        }
        this.stickNumber();
        this.$emit('search-cleared', this.nowVal)
      },
    },
    render: function(h) {
      const codeDropdown = () => {
        const selectOptions = () => {
          return this.areaCodeLocal.map((item, index) => {
            if(index == 0) {
              return <rt-select-option selected={true} value={item.value.toString()} ref="preselected">{item.code}</rt-select-option>
            } else {
              return <rt-select-option value={item.value.toString()}>{item.code}</rt-select-option>
            }
          })
        };
        if(this.areaCodeLocal.length) {
          if(this.areaCodeLocal.length > 1) {
            return <rt-select ref="dropdown" onInput={this.setFocus} onChange={this.stickNumber}>
              {selectOptions()}
            </rt-select>
          } else {
            return <p class="single-code" ref="preselected" value={this.areaCode[0].value.toString()}>{this.areaCode[0].code}</p>
          }
        }
      };
      const inputs = () => {
        for(let i = 0; i < this.inputsLength; i++) {
          return this.localAutoComplete.map((item, index) => {
            if(!isNaN(item)) {
              return <input class="rt-phone-input__single-one" value={item} disabled ref={'input-' + index}>{item}</input>
            } else {
              return <input class="rt-phone-input__single-one"
                            onFocus={this.setCursor} type="number" onBlur={this.returnPlaceholder}
                            onKeyup={this.moveFocus} onKeydown={this.changeValue} onInput={this.stickNumber}
                            placeholder="X" ref={'input-' + index}/>
            }
          })
        }
      };
      const clearForm = () => {
        if(this.eraseButton) {
          return <rt-button class="rt-button-cool-grey-border" onClick={this.clearData}>{this.clearButtonText}</rt-button>
        } else {
          return null
        }
      };

      return <div class="rt-phone-input">
        <div class={"rt-phone-input__prefix" + this.prefixClass}>{this.prefix.toLocaleString()}</div>
        {codeDropdown()}
        <div class="inputs-wrapper md-d-block" ref="inputsWrapper">
          {inputs()}
        </div>
        <div class="rt-phone-input__buttons-wrapper">
          <rt-button class="rt-button-orange" onClick={this.emitOrder} ref="submitBtn">{this.submitButtonText}</rt-button>
          {clearForm()}
        </div>
      </div>;
    }
  };
</script>
