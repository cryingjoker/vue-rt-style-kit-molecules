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
      },
      clientAutoComplete: {
        type: String,
        default: ''
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
        areaCodeLength: 3,
        selectWasInteracted: 0,
        areaCodeLocal: [],
        selectedValue: null,
        selectOpened: false,
        localClientAutoComplete: [],
        stickedAutoComplete: [],
        stickedStringAutoComplete: '',
        dropdownIsHovered: false,
        tempInputVal: null,
        searchCleared: false
      }
    },
    watch: {
      autoComplete(newVal, oldVal) {
        this.localAutoComplete = newVal.split('');
        this.countStartVal();
      },
      areaCode(newVal, oldVal) {
        this.areaCodeLocal = newVal;
        this.setStartCodeValue();
        this.countStartVal();
      },
      clientAutoComplete(newVal, oldVal) {
        this.localClientAutoComplete = newVal.split('');
        this.countStartVal();
        this.$forceUpdate();
      }
    },
    computed: {
      prefixClass() {
        let classList = '';
        if(this.prefix.toString().length > 1 && window.innerWidth <= parseInt(variables["mobile-upper-limit"])) {
          classList += ' rt-phone-input__prefix--separated'
        }
        return classList;
      },
      selectClasses() {
        let classList = "rt-phone-input__select";
        if(this.selectOpened) {
          classList += " rt-phone-input__select--active";
        }
        return classList;
      }
    },
    mounted(){
      this.localVal = this.autoComplete;
      this.areaCodeLocal = this.areaCode;
      this.localAutoComplete = this.localVal.split('');
      this.localClientAutoComplete = this.clientAutoComplete.split('');
      this.setStartCodeValue();
      this.countStartVal();
      setTimeout(() => {
        if(this.$refs.inputsWrapper.children.length) {
          this.setFocus();
        }
      },0);
      window.addEventListener('click', () => {
        !this.dropdownIsHovered ? this.selectOpened = false : false;
      })
    },
    methods: {
      countStartVal(){
        if(this.areaCodeLocal.length) {
          this.inputsLength = 11 - this.prefix.toString().length - this.areaCodeLength;
        }
        this.localAutoComplete.map((item, index) => {
          item == '\\' ? this.localAutoComplete.splice(index, 1) : false;
        });
        this.localClientAutoComplete.map((item, index) => {
          item == '\\' ? this.localClientAutoComplete.splice(index, 1) : false;
        });
        this.stickedAutoComplete.length = this.localAutoComplete.length;
        for(let i = 0; i < this.stickedAutoComplete.length; i++) {
          if(isNaN(this.localAutoComplete[i])) {
            if(!this.searchCleared) {
              this.stickedAutoComplete[i] = {"value": this.localClientAutoComplete[i], "disabled": false};
            } else {
              this.stickedAutoComplete[i] = {"value": "\\d", "disabled": false}
            }
          } else {
            this.stickedAutoComplete[i] = {"value": this.localAutoComplete[i], "disabled": true};
          }
        }
        this.stickedAutoComplete.map((item) => {
          if(item.value == 'd') {
            item.value = '\\d'
          }
        });
        this.stickedStringAutoComplete = '';
        this.stickedAutoComplete.map((item) => {
          this.stickedStringAutoComplete += item.value;
        });
        this.startVal = this.prefix.toString();
        if(this.areaCodeLocal.length) {
          if(this.areaCodeLocal.length > 1) {
            let hasPreselected = false;
            this.areaCodeLocal.map((item, index) => {
                if (item.preselected) {
                    hasPreselected = true;
                }
            });
            this.areaCodeLocal.map((item, index) => {
              if(hasPreselected) {
                if(item.preselected) {
                  if(isNaN(item.value)) {
                    for(let i = 0; i < this.areaCodeLength; i++) {
                      this.startVal += '\\d';
                    }
                  } else {
                    this.startVal += item.value;
                  }
                }
              } else if(index == 0){
                if(isNaN(item.value)) {
                  for(let i = 0; i < this.areaCodeLength; i++) {
                    this.startVal += '\\d';
                  }
                } else {
                  this.startVal += item.value;
                }
              }
            })
          } else {
            this.startVal += this.areaCodeLocal[0].value;
          }
        }
        if(this.autoComplete) {
          this.startVal += this.stickedStringAutoComplete;
        } else {
          for(let i = 0; i < this.inputsLength; i++) {
            this.startVal += '\\d';
            this.localAutoComplete.push('\\d')
          }
        }
        this.setFocus();
      },
      changeValue($event) {
        if($event.key.match(/\d/)) {
          if($event.target.value.length == 1) {
            $event.target.value = '';
            $event.target.value = $event.key;
          }
        }
        if($event.keyCode === 8) {
          this.tempInputVal.value = '';
          if($event.target.value != '') {
            $event.target.value = '';
          } else {
            if($event.target.previousSibling) {
              let activeIndex = Array.prototype.indexOf.call(this.$refs.inputsWrapper.children, $event.target);
              this.targetIndex = this.countActive('backward', activeIndex);
              this.$refs.inputsWrapper.children[this.targetIndex]?.focus()
            }
          }
        }
        this.$emit('interaction-detected');
      },
      moveFocus($event) {
        if($event.target.value.length > 1) {
          $event.target.value = $event.target.value.substr($event.target.value.length - 1);
        }
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
        this.stickNumber();
      },
      setFocus() {
        this.targetIndex = this.countActive('forward', -1);
        this.$refs.inputsWrapper.children.length ? this.$refs.inputsWrapper.children[this.targetIndex].focus() : false;
        this.stickNumber();
        if(this.selectWasInteracted > 0) {
          this.$emit('interaction-detected');
        }
        this.selectWasInteracted++;
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
        let position = Array.prototype.indexOf.call(this.$refs.inputsWrapper.children, $event.target);
        this.tempInputVal = {'value': $event.target.value, 'position': position};
        $event.target.value = ''
      },
      returnPlaceholder($event) {
        if(this.tempInputVal?.value && $event.target.value == '') {
          $event.target.value = this.tempInputVal.value;
        } else {
          $event.target.placeholder = 'X';
        }
      },
      stickNumber() {
        this.nowVal = this.prefix;
        if(this.$refs.dropdown) {
          if(!isNaN(this.selectedValue)) {
            this.nowVal += this.selectedValue.toString();
          } else {
            for(let i = 0; i < this.areaCodeLength; i++) {
              this.nowVal += '\\d';
            }
          }
        } else {
          this.nowVal += this.selectedValue.toString();
        }
        setTimeout(()=> {
          for(let i = 0; i < this.inputsLength; i++) {
            if(this.$refs['input-' + i]) {
              if(this.$refs['input-' + i].value == '') {
                if(this.tempInputVal?.position == i) {
                  this.nowVal += this.tempInputVal.value ? this.tempInputVal.value : '\\d';
                } else {
                  this.nowVal += '\\d';
                }
              } else {
                this.nowVal += this.$refs['input-' + i].value;
              }
            }
          }
        },0);
        setTimeout(()=> {
          this.eraseButton = this.startVal !== this.nowVal;
        },0);
      },
      emitOrder() {
        if(this.nowVal) {
          this.$emit('selected-number', this.nowVal);
        }
      },
      clearData() {
        this.searchCleared = true;
        this.$refs.dropdown ? this.selectedValue = this.startCode : false;
        this.tempInputVal.value = '';
        for(let i = 0; i < this.inputsLength; i++) {
          if(!this.$refs['input-' + i].hasAttribute('disabled')) {
            this.$refs['input-' + i].value = '';
            this.$refs['input-' + i].placeholder = 'X';
          }
        }
        this.localClientAutoComplete.map(item => {
          if(!isNaN(item)) {
            item = 'd';
          }
        });
        this.countStartVal();
        setTimeout(()=> {
          this.$emit('search-cleared', this.nowVal);
        }, 10)
      },
      open() {
        this.selectOpened = !this.selectOpened;
      },
      setStartCodeValue() {
        this.areaCodeLocal.map((item, index) => {
          if(item.preselected) {
           this.startCode = item.code;
           this.selectedValue = item.code;
          } else if(index == 0){
            this.startCode = item.code;
            this.selectedValue = item.code;
          }
        })
      },
      setHovered() {
        this.dropdownIsHovered = true;
      },
      removeHovered() {
        this.dropdownIsHovered = false;
      }
    },
    render: function(h) {
      const codeDropdown = () => {
        const selectOptions = () => {
          return this.areaCodeLocal.map((item, index) => {
            const setValue = () => {
              this.selectedValue = item.code;
              this.setFocus();
            };
            if(item.preselected) {
              return <div class="rt-phone-input__select-item rt-phone-input__select-item--selected"
                          selected={true} value={item.value.toString()} ref="preselected" onClick={setValue}>{item.code}</div>
            } else {
              if(index == 0) {
                return <div class="rt-phone-input__select-item rt-phone-input__select-item--selected"
                            selected={true} value={item.value.toString()} ref="preselected" onClick={setValue}>{item.code}</div>

              } else {
                return <div class="rt-phone-input__select-item" value={item.value.toString()} onClick={setValue}>{item.code}</div>
              }
            }
          })
        };
        if(this.areaCodeLocal.length) {
          if(this.areaCodeLocal.length > 1) {
            return <div class={this.selectClasses} ref="dropdown" onClick={this.open} onMouseenter={this.setHovered}
                        onMouseleave={this.removeHovered}>
              <span>{this.selectedValue}</span>
              <div class="rt-phone-input__select-items-wrapper">
                {selectOptions()}
              </div>
            </div>
          } else {
            return <p class="single-code" ref="preselected">{this.areaCode[0].code}</p>
          }
        }
      };
      const inputs = () => {
        return this.stickedAutoComplete.map((item, index) => {
          if(!isNaN(item.value)) {
            if(item.disabled) {
              return <input class="rt-phone-input__single-one" value={item.value} disabled ref={'input-' + index}>{item.value}</input>
            } else {
              return <input class="rt-phone-input__single-one" value={item.value} ref={'input-' + index}
                            onFocus={this.setCursor} type="number" onBlur={this.returnPlaceholder}
                            onKeyup={this.moveFocus} onKeydown={this.changeValue} placeholder="X">{item.value}</input>
            }
          } else {
            return <input class="rt-phone-input__single-one"
                          onFocus={this.setCursor} type="number" onBlur={this.returnPlaceholder}
                          onKeyup={this.moveFocus} onKeydown={this.changeValue} onInput={this.stickNumber}
                          placeholder="X" ref={'input-' + index}/>
          }
        })
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
