class Tooltip {
  constructor(element, data, vnode) {
    this.$el = element;
    this.value = data.value;
    this.vnode = vnode;
    this.orientation = 'bottom'
    this.bind();
  }

  bind = () => {
    if (this.$el.hover) {
      if (this.$el.updateValue) {
        this.mouseenterAction(true)
        this.$el.updateValue = false
      } else {
        this.renderTooltop()
      }
    }
    this.$el.listnerEnter = this.mouseenter
    this.$el.listnerLeave = this.mouseleave
    this.$el.addEventListener('mouseenter', this.mouseenter)
    this.$el.addEventListener('mouseleave', this.mouseleave)
  };
  update = (el) => {
    this.unbind()
    this.bind()
  };
  unbind = (el, value) => {
    if (this.$el.toolTip) {
      this.$el.toolTip.remove();
      this.$el.updateValue = true
      this.value = value
    }
    this.$el.removeEventListener('mouseenter', this.$el.listnerEnter)
    this.$el.removeEventListener('mouseleave', this.$el.listnerLeave)
  };
  mouseenter = (event) => {
    this.$el.hover = true
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {
      this.mouseenterAction()
    }, 300)
  }
  mouseenterAction = (notAnimate) => {
    this.$el.active = true;
    let {y, x, height, width, right, left, top} = this.$el.getBoundingClientRect();
    const screenHeight = global.innerHeight
    const screenWidth = global.innerWidth
    const bottom = screenHeight - y
    if (screenHeight - y < 100) {
      this.orientation = 'top'
    }
    if (bottom < 100 || left < 150 || screenWidth - left - width < 200) {
      this.orientation = 'left'
      if (left < 150) {
        this.orientation = 'right'
      }
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var style = getComputedStyle(this.$el, null);

    if (style.display == 'block' && !this.value['spec-content']) {
      const span = global.document.createElement("span");
      span.innerText = this.$el.innerText
      if (!span.innerText) {
        span.innerHTML = this.$el.innerHTML
      }

      this.$el.appendChild(span)

      span.style.position = 'absolute'
      span.style.opacity = '0'
      span.style.visibility = 'hidden'
      span.style.display = 'inline-block'
      span.style.left = 0
      width = span.clientWidth + parseInt(style.paddingLeft);
      height = span.clientHeight;
      span.remove();
    }

    switch (this.orientation) {
      case 'top':
        this.pageX = parseInt(x + width / 2)
        this.pageY = y + scrollTop - 4
        break
      case 'right':
        this.pageX = x + width + 4
        this.pageY = y + scrollTop + height / 2
        break
      case 'bottom':
        this.pageX = parseInt(x + width / 2)
        this.pageY = y + scrollTop + 4 + height
        break
      case 'left':
        this.pageX = parseInt(x) - 4 + parseInt(style.paddingLeft)
        this.pageY = y + scrollTop + height / 2
        break

    }
    this.renderTooltop(notAnimate)
  }
  mouseleave = () => {
    this.$el.hover = false
    this.$el.active = false;
    this.renderTooltop()
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }
  renderTooltop = (notAnimate) => {
    if (this.$el.active && this.value) {
      const toolTip = global.document.createElement("div");
      this.$el.toolTip = toolTip;
      toolTip.classList.add('rt-tooltip')
      if (this.value.bright) {
        toolTip.classList.add('rt-tooltip-bright')
      }
      toolTip.classList.add('rt-tooltip-' + this.orientation)
      toolTip.innerHTML = this.value.text
      toolTip.style.left = this.pageX + 'px'
      toolTip.style.top = this.pageY + 'px'

      if (!notAnimate) {
        global?.document.body.appendChild(toolTip);
        setTimeout(() => {
          toolTip.classList.add('rt-tooltip-active')
        }, 0)
      } else {
        toolTip.classList.add('rt-tooltip-active')
        global?.document.body.appendChild(toolTip);
      }
    } else {
      if (this.$el.toolTip) {
        this.$el.toolTip.classList.remove('rt-tooltip-active')
        setTimeout(() => {
          this.$el.toolTip.remove();
        }, 300)
      }
    }
  }

}

export const TooltipDirective = {
  name: "Tooltip",
  bind(el, bindings, vnode) {
    el.tooltip = new Tooltip(vnode.elm, bindings, vnode);
  },
  update(el, bindings, vnode, oldVnode) {
    el.tooltip.unbind(el, bindings.value)
    vnode.tooltip = new Tooltip(vnode.elm, bindings, vnode);
  },
  componentUpdated(el, bindings, vnode, oldVnode) {
    // if(el.tooltip) {
    //   el.tooltip.unbind(el,bindings.value);
    //   el.tooltip.bind()
    // }
  },
  unbind(el, bindings, vnode) {
    el.tooltip.unbind();
    el.tooltip.mouseleave();
  }
};



