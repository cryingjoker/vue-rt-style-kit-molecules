import variables from "../../variables.json";
import {deviceTypeStore} from "vue-rt-style-kit-atoms";
class OutsideClick {
  constructor(element, action, vnode){
    this.$el = element;

    if(typeof action.value === 'function') {
      this.action = action;
    }
    this.workOnDesktop = true;
    this.workOnMobile = false;
    this.workOnTablet = false;
    if(typeof action.value === 'object') {
      this.action = {}

      this.action.value = action.value.fn
      if('workOnMobile' in action) {
        this.workOnMobile = action.value.workOnMobile;
      }
      if('workOnTablet' in action.value) {
        this.workOnTablet = action.value.workOnTablet;
      }
      if('workOnDesktop' in action.value){
        this.workOnDesktop = action.value.workOnDesktop;
      }
    }
    this.bind();
    this.vnode = vnode;
    this.setDeviceType()
  }
  bind = ()=>{
    deviceTypeStore.addWatcher(this._uid,this.setDeviceType.bind(this));
    if(this.$el && (!this.vnode || !this.vnode.OutsideClick)) {
      window.addEventListener('click',this.triggerAction, {passive: true});
      this.$el.addEventListener('mouseenter', this.mouseenter, {passive: true});
      this.$el.addEventListener('mouseleave', this.mouseleave, {passive: true});
    }
  }

  update = (el) => {
    deviceTypeStore.removeWatcher(this._uid)
    deviceTypeStore.addWatcher(this._uid,this.setDeviceType.bind(this));
    this.unbind();
    this.$el = el;
    this.bind();
  }
  unbind = () => {
    deviceTypeStore.removeWatcher(this._uid)
    window.removeEventListener('click',this.triggerAction);
    this.$el.removeEventListener('mouseenter', this.mouseenter);
    this.$el.removeEventListener('mouseleave', this.mouseleave);
  }
  mouseleave = ()=>{
    this.hover = false
  }
  mouseenter = ()=>{
    this.hover = true
  }
  setDeviceType() {
    const type = deviceTypeStore.getStatus();
    this.deviceType = type;
  }
  triggerAction = ()=>{


    if(!this.hover){
      if(this.workOnMobile && this.deviceType === 'mobile' || this.workOnTablet && this.deviceType ===  'tablet' || this.workOnDesktop && this.deviceType.search('desktop')==0){
        this.action.value();
      }
    }
  }
}

export const OutsideClickDirective = {
  name: 'RtOutSideClick',
  isFn: true,
  bind (el, bindings, vnode) {
    vnode.context.OutsideClick = new OutsideClick(vnode.elm,bindings,vnode);
  },
  update(el, bindings, vnode){
    vnode.context.OutsideClick.update(el);
  },
  beforeDestroy(){
    vnode.context.OutsideClick.unbind(el);
  }
};




