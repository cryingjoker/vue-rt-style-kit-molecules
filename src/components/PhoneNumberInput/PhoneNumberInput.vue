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
      },
      showClearButton: {
        type: Boolean,
        default: false
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
        searchCleared: false,
        activeOptionIndex: 0,
        hoveredOptionIndex: null,
        localShowClearButton: this.showClearButton
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
        this.setClientAutoComplete();
      },
      activeOptionIndex(newVal, oldVal) {
        this.activeOptionIndex = newVal;
        this.setOptionClass(this.activeOptionIndex);
      },
      showClearButton(newVal, oldVal) {
        this.localShowClearButton = newVal;
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
      window.addEventListener('click', () => {
        !this.dropdownIsHovered ? this.selectOpened = false : false;
      });
      setTimeout(() => {
        this.setClientAutoComplete()
      },0)
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
            if(isNaN(this.areaCodeLocal[0].value)) {
              for(let i = 0; i < this.areaCodeLength; i++) {
                this.startVal += '\\d';
              }
            } else {
              this.startVal += this.areaCodeLocal[0].value;
            }
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
        // setTimeout(() => {
        //   this.setFocus();
        // },1)
      },
      changeValue($event) {
        // $event.preventDefault();
        if($event.key.match(/\d/)) {
          if($event.target.value.length > 0) {
            $event.target.value = '';
            $event.target.value = $event.key;
          }
        } else if($event.keyCode === 8) {
          if($event.target.value != '') {
            $event.target.value = '';
          } else {
            if($event.target.previousSibling) {
              let activeIndex = Array.prototype.indexOf.call(this.$refs.inputsWrapper.children, $event.target);
              this.targetIndex = this.countActive('backward', activeIndex);
              this.$refs.inputsWrapper.children[this.targetIndex]?.focus()
            }
          }
        } else if($event.keyCode === 13) {
          this.emitOrder();
        }
        this.$emit('input-interaction-detected');
      },
      moveFocus($event) {
        if($event.key.match(/\d/)) {
          $event.preventDefault();
          $event.target.value = $event.key;
        } else {
          $event.target.value = '';
        }
        let activeIndex = Array.prototype.indexOf.call(this.$refs.inputsWrapper.children, $event.target);
        if($event.target.value != '' && $event.target.nextSibling && $event.key.match(/\d/)) {
          this.targetIndex = this.countActive('forward', activeIndex);
          this.$refs.inputsWrapper.children[this.targetIndex].focus()
        }
        if($event.target.value != '' && activeIndex == this.$refs.inputsWrapper.children.length - 1) {
          this.$refs.submitBtn.$el.focus();
        }
        // this.eraseButton = this.startVal !== this.nowVal;
        this.stickNumber();
      },
      setFocus() {
        this.targetIndex = this.countActive('forward', -1);
        this.$refs.inputsWrapper.children.length ? this.$refs.inputsWrapper.children[this.targetIndex].focus() : false;
        if(this.selectWasInteracted > 0) {
          this.$emit('interaction-detected');
        }
        this.stickNumber();
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
        isNaN($event.target.value) ? $event.target.value = '' : false;
        $event.target.placeholder = 'X';
      },
      stickNumber() {
        setTimeout(() => {
          this.nowVal = this.prefix;
          if(!isNaN(this.selectedValue)) {
            this.selectedValue ? this.nowVal += this.selectedValue.toString() : false;
          } else {
            for(let i = 0; i < this.areaCodeLength; i++) {
              this.nowVal += '\\d';
            }
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
          // if(this.selectedValue) {
          //   this.eraseButton = this.startVal !== this.nowVal;
          // }
        },0)
      },
      emitOrder() {
        if(this.nowVal) {
          this.$emit('selected-number', this.nowVal);
        }
        this.eraseButton = true;
      },
      clearData() {
        this.searchCleared = true;
        this.$refs.dropdown ? this.selectedValue = this.areaCodeLocal[0].code : false;
        this.activeOptionIndex = 0;
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
        this.stickNumber();
        setTimeout(()=> {
          this.$emit('search-cleared', this.nowVal);
          this.eraseButton = false;
        }, 10)
      },
      open() {
        this.$emit('select-interaction-detected');
        this.selectOpened = !this.selectOpened;
        if(this.selectWasInteracted == 0) {
          let hasPreselection = false;
          this.areaCodeLocal.map((item, index) => {
            if(item.preselected) {
              hasPreselection = true;
            }
          });
          this.areaCodeLocal.map((item, index) => {
            if(hasPreselection) {
              item.preselected ? this.activeOptionIndex = index : false;
            } else {
              this.activeOptionIndex = 0;
            }
          })
        }
        if(this.selectOpened) {
          this.hoveredOptionIndex = this.activeOptionIndex;
          this.$refs.optionWrapper.children[this.activeOptionIndex].classList.add('rt-phone-input__select-item--selected');
          document.addEventListener('keydown', this.optionNavigation)
        } else {
          document.removeEventListener('keydown',this.optionNavigation)
        }
        this.selectWasInteracted++;
      },
      optionNavigation($event) {
        let options = this.$refs.optionWrapper.children;
        if($event.keyCode === 38) {
          if(this.hoveredOptionIndex > 0) {
            this.hoveredOptionIndex--;
            this.activeOptionIndex = this.hoveredOptionIndex;
          } else {
            this.hoveredOptionIndex = options.length - 1;
            this.activeOptionIndex = this.hoveredOptionIndex;
          }
        } else if($event.keyCode === 40) {
          if(this.hoveredOptionIndex < options.length - 1) {
            this.hoveredOptionIndex++;
            this.activeOptionIndex = this.hoveredOptionIndex;
          } else {
            this.hoveredOptionIndex = 0;
            this.activeOptionIndex = this.hoveredOptionIndex;
          }
        } else if($event.keyCode === 13) {
          this.selectedValue = this.areaCodeLocal[this.hoveredOptionIndex].code;
          this.selectOpened = !this.selectOpened;
          this.stickNumber();
        }
      },
      setStartCodeValue() {
        if(this.areaCodeLocal.length) {
          let hasPreselection = false;
          this.areaCodeLocal.map((item, index) => {
            if(item.preselected) {
              hasPreselection = true;
            }
          });
          this.areaCodeLocal.map((item, index) => {
            if(hasPreselection) {
              if(item.preselected) {
                this.startCode = item.code;
                this.selectedValue = item.code;
              }
            } else {
              this.startCode = this.areaCodeLocal[0].code;
              this.selectedValue = this.areaCodeLocal[0].code;
            }
          })
        }
      },
      setHovered() {
        this.dropdownIsHovered = true;
      },
      removeHovered() {
        this.dropdownIsHovered = false;
      },
      setClientAutoComplete() {
        this.stickedAutoComplete.map((item, index) => {
          if (!isNaN(item.value) && !item.disabled) {
            this.$refs['input-' + index].value = item.value;
            this.eraseButton = true;
          }
        });
      },
      setOptionClass(index) {
        let options = this.$refs.optionWrapper.children;
        for(let i = 0; i < options.length; i++) {
          options[i].classList.remove('rt-phone-input__select-item--selected');
        }
        options[index].classList.add('rt-phone-input__select-item--selected');
      }
    },
    render: function(h) {
      const codeDropdown = () => {
        const selectOptions = () => {
          return this.areaCodeLocal.map((item, index) => {
            const setValue = () => {
              this.selectedValue = item.code;
              this.activeOptionIndex = index;
              this.setOptionClass(this.activeOptionIndex);
              this.setFocus();
            };
            if(item.preselected) {
              return <div class="rt-phone-input__select-item"
                          selected={true} value={item.value.toString()} ref="preselected" onClick={setValue}>{item.code}</div>
            } else {
              if(index == 0) {
                return <div class="rt-phone-input__select-item" selected={true}
                            value={item.value.toString()} ref="preselected" onClick={setValue}>{item.code}</div>
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
              <div class="rt-phone-input__select-items-wrapper" ref="optionWrapper">
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
              return <input class="rt-phone-input__single-one" disabled ref={'input-' + index} value={item.value}/>
            } else {
              return <input class="rt-phone-input__single-one" ref={'input-' + index}
                            onFocus={this.setCursor} type="text" onBlur={this.returnPlaceholder} maxLength="1"
                            onKeyup={this.moveFocus} onKeydown={this.changeValue} placeholder="X"/>
            }
          } else {
            return <input class="rt-phone-input__single-one"
                          onFocus={this.setCursor} type="text" onBlur={this.returnPlaceholder} maxLength="1"
                          onKeyup={this.moveFocus} onKeydown={this.changeValue} onInput={this.stickNumber}
                          placeholder="X" ref={'input-' + index}/>
          }
        })
      };
      const clearForm = () => {
        if(this.eraseButton && this.localShowClearButton) {
          return <rt-button class="rt-button-cool-grey-border" onClick={this.clearData}>{this.clearButtonText}</rt-button>
        } else {
          return null
        }
      };
      const prefix = () => {
        if(this.prefix.toString().length > 1) {
          let localPrefix = this.prefix.toString().split('');
          localPrefix.shift();
          localPrefix.unshift('8', ' ');
          return localPrefix.join('')
        } else {
          return this.prefix;
        }
      };

      return <div class="rt-phone-input">
        <div class={"rt-phone-input__prefix" + this.prefixClass}>{prefix()}</div>
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
