<script type="text/jsx">
  export default {
    name: "RtPhoneNumberInput",
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
      autoCompletePosition: {
        type: Number,
        default: 0
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
    data: () => ({
      inputsLength: null,
      localAutoComplete: [],
      targetIndex: null,
      eraseButton: false,
      startVal: '',
      nowVal: '',
      startCode: '',
      areaCodeLength: null
    }),
    mounted(){
      if(!isNaN(this.areaCode[0].value)) {
        this.areaCodeLength = this.areaCode[0].value.toString().length;
      } else {
        this.areaCodeLength = this.areaCode[1].value.toString().length;
      }
      this.inputsLength = 11 - this.prefix.toString().length - this.areaCodeLength;
      this.localAutoComplete = this.autoComplete.split('');
      this.localAutoComplete.map((item, index) => {
        item == 'd' ? this.localAutoComplete.splice(index, 1) : false;
      });
      this.startVal = this.prefix.toString();
      if(this.areaCode.length > 1) {
        this.areaCode.map((item) => {
          if(item.preSelected) {
            if(isNaN(item.value)) {
              for(let i = 0; i < this.areaCodeLength; i++) {
                this.startVal += '\\d';
              }
            } else {
              this.startVal = item.value;
            }
          }
        });
      } else {
        this.startVal += this.areaCode[0].value;
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
    methods: {
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
      },
      setFocus() {
        this.$refs.inputsWrapper && this.$refs.inputsWrapper.children[0] ? this.$refs.inputsWrapper.children[0].focus() : false;
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
          if(this.$refs['input-' + i].value == '') {
            this.nowVal += '\\d';
          } else {
            this.nowVal += this.$refs['input-' + i].value;
          }
        }
        this.eraseButton = this.startVal !== this.nowVal;
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
      }
    },
    render: function(h) {
      const codeDropdown = () => {
        const selectOptions = () => {
          return this.areaCode.map((item) => {
            if(item.preSelected) {
              return <rt-select-option selected={true} value={item.value.toString()} ref="preselected">{item.code}</rt-select-option>
            } else {
              return <rt-select-option value={item.value.toString()}>{item.code}</rt-select-option>
            }
          })
        };
        if(this.areaCode.length > 1) {
          return <rt-select ref="dropdown" onInput={this.setFocus} onChange={this.stickNumber}>
            {selectOptions()}
          </rt-select>
        } else {
          return <p class="single-code" ref="preselected" value={this.areaCode[0].value.toString()}>{this.areaCode[0].code}</p>
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
                            onKeyup={this.moveFocus} onKeydown={this.changeValue} onChange={this.stickNumber}
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
      }
      return <div class="rt-phone-input">
        {this.prefix.toLocaleString()}
        {codeDropdown()}
        <div class="inputs-wrapper" ref="inputsWrapper">
          {inputs()}
        </div>
        <rt-button class="rt-button-orange" onClick={this.emitOrder} ref="submitBtn">{this.submitButtonText}</rt-button>
        {clearForm()}
      </div>;
    }
  };
</script>
