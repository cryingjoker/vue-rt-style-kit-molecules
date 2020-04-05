import debounce from "debounce";
import {getVariable} from "vue-rt-style-kit-atoms";
class ResizeContentHeight {
  constructor(element, data, vnode){
    this.$el = element;
    this.data = data.value;
    this.tabletUpperLimit = getVariable('tabletUpperLimit');
    this.mobileUpperLimit = getVariable('mobileUpperLimit');
    Object.keys(data.value).forEach((key)=>{
      this[key] = data.value[key];
    })
    this.vnode = vnode;
    this.init();
  }
  init(){
    if(!this.notRun) {
      if (this.reactive) {
        this.initReactiveWaiter();
      } else {
        setTimeout(() => {
          if (this.querySelectorsNames.length > 0) {
            this.bindResize();
            this.calculateMaxHeight();
          }
        }, 0);
        setTimeout(() => {
          if (this.querySelectorsNames.length > 0) {
            this.calculateMaxHeight();
          }
        }, 500);
      }

      window.addEventListener('resizeTrigger', () => {
        this.calculateMaxHeight();
      })
    }
  }
  debounceCalculateResize = debounce(() => {
    this.calculateMaxHeight()
  }, 5)

  bindResize() {
    window.addEventListener("resize", this.debounceCalculateResize);
  }
  unbindResize() {
    window.removeEventListener("resize", this.debounceCalculateResize);
  }
  calculateMaxHeight() {
    const innerWidth = window.innerWidth;
    const isMobile = innerWidth <= this.mobileUpperLimit;
    const isTablet = innerWidth <= this.tabletUpperLimit && innerWidth > this.mobileUpperLimit;

    this.isMobile = isMobile;
    this.isTablet = isTablet;
    if (isMobile && this.mobileNotResize || isTablet && this.tabletNotResize || !isMobile && !isTablet && this.desktopNotResize) {

      this.querySelectorsNames.forEach((selectorName) => {
        this.$el.querySelectorAll(`${selectorName}`).forEach((node) => {
          if (node.style.height) {
            node.style.height = null;
          }
        });
      });
    } else {
      if (this.groupSize && !isTablet  && !isMobile || isTablet && this.tabletGroupSize || isMobile && this.mobileGroupSize) {
        let gropSize = this.groupSize;
        if(isTablet && this.tabletGroupSize){
          gropSize = this.tabletGroupSize;
        }
        if(isMobile && this.mobileGroupSize){
          gropSize = this.mobileGroupSize;
        }

        this.querySelectorsNames.forEach((selectorName) => {
          let nodeList = [...this.$el.querySelectorAll(`${selectorName}`)];
          if(nodeList.length === 1){
            nodeList = [[nodeList]];
          }
          if(nodeList.length > 0) {

            nodeList.reduce((res, item) => {
              if (!Array.isArray(res)) {
                res = [[res]];
              }
              if (res[res.length - 1].length < gropSize) {
                res[res.length - 1].push(item);
              } else {
                res.push([item]);
              }
              return res;
            }).forEach((nodeGroup) => {
              let maxHeight = 0;
              nodeGroup.forEach((node) => {
                if (node.style.height) {
                  node.style.height = null;
                }
                maxHeight = maxHeight > node.offsetHeight ? maxHeight : node.offsetHeight;
              });
              nodeGroup.forEach((node) => {
                node.style.height = `${maxHeight}px`;
              });
            });
          }
        });

      } else {

        this.querySelectorsNames.forEach((selectorName) => {
          let maxHeight = 0;
          this.$el.querySelectorAll(`${selectorName}`).forEach((node) => {
            if (node.style.height) {
              node.style.height = null;
            }
            maxHeight = maxHeight > node.offsetHeight ? maxHeight : node.offsetHeight;
          });
          this.$el.querySelectorAll(`${selectorName}`).forEach((node) => {
            node.style.height = `${maxHeight}px`;
          });
        });
      }
    }
  }
  initReactiveWaiter() {
    let count = 0;
    let maxCount = this.$children.length;
    let wait = setInterval(() => {
      this.$children.forEach(cmp => {
        if (cmp.loaded) count++;
        if (count === maxCount) {
          clearInterval(wait);
          this.calculateMaxHeight().bind(this);
        }
      });
    }, 50);
  }

}
export const ResizeContentHeightDirective = {
  name: "RtResizeContentHeight",
  bind(el, bindings, vnode) {
    vnode.context.ResizeContentHeight = new ResizeContentHeight(vnode.elm, bindings, vnode);
  },
  componentUpdated(el, bindings, vnode) {
    if (vnode.context.ResizeContentHeight.querySelectorsNames && vnode.context.ResizeContentHeight.querySelectorsNames.length > 0) {
      vnode.context.ResizeContentHeight.unbindResize();
      vnode.context.ResizeContentHeight.bindResize();
    }
  },
  unbind(el, bindings, vnode) {
    if (vnode.context.ResizeContentHeight.querySelectorsNames && vnode.context.ResizeContentHeight.querySelectorsNames.length > 0) {
      vnode.context.ResizeContentHeight.unbindResize();
    }
  }
}
