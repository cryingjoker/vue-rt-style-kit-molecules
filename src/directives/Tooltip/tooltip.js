class Tooltip {
  constructor(element, data, vnode) {
    this.$el = element;
    this.value = data.value;
    this.vnode = vnode;
    this.active = false
    this.orientation = 'bottom'
    this.bind();
  }

  bind = () => {
    this.$el.addEventListener('mouseenter', this.mouseenter)
    this.$el.addEventListener('mouseleave', this.mouseleave)
  };
  update = (el) => {
    this.unbind()
    this.bind()
  };
  unbind = (el) => {
    this.$el.removeEventListener('mouseenter', this.mouseenter)
    this.$el.removeEventListener('mouseleave', this.mouseleave)
  };
  mouseenter = (event) => {
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
    this.timeout = setTimeout(() => {
      this.mouseenterAction()
    }, 300)
  }
  mouseenterAction = () => {
    this.active = true;
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


    this.renderTooltop()
  }
  mouseleave = () => {
    this.active = false;
    this.renderTooltop()
    if (this.timeout) {
      clearTimeout(this.timeout)
    }
  }
  renderTooltop = () => {
    if (this.active) {
      const toolTip = global.document.createElement("div");
      this.toolTip = toolTip;
      toolTip.classList.add('rt-tooltip')
      if (this.value.bright) {
        toolTip.classList.add('rt-tooltip-bright')
      }
      toolTip.classList.add('rt-tooltip-' + this.orientation)
      toolTip.innerHTML = this.value.text
      toolTip.style.left = this.pageX + 'px'
      toolTip.style.top = this.pageY + 'px'
      global?.document.body.appendChild(toolTip);
      setTimeout(() => {
        toolTip.classList.add('rt-tooltip-active')
      }, 0)
    } else {
      if (this.toolTip) {
        this.toolTip.classList.remove('rt-tooltip-active')
        setTimeout(() => {
          this.toolTip.remove();
        }, 300)
      }
    }
  }

}

export const TooltipDirective = {
  name: "Tooltip",
  bind(el, bindings, vnode) {
    vnode.tooltip  = new Tooltip(vnode.elm, bindings, vnode);
  },
  update(el, bindings, vnode,oldVnode) {
    oldVnode.tooltip.unbind()
    vnode.tooltip  = new Tooltip(vnode.elm, bindings, vnode);
  },

  unbind(el, bindings, vnode) {
    vnode.tooltip.unbind(el);
    vnode.tooltip.mouseleave();
  }
};



