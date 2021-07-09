import variables from "../variables.json";

export const GaClickDirective = {
  name: "GaClick",
  bind(el, bindings, vnode) {
    if(bindings.value.data) {
      var bind = function(){
        el.addEventListener('click', function () {
          if(!vnode.context.gaPushed) {
            if (!window.dataLayer) {
              window.dataLayer = [];
            }
            const data = {...{
                event: window[variables.globalSettingsKey].segment,
              }, ...bindings.value.data}
            window.dataLayer.push(data)
            if(bindings.value.once) {
              vnode.context.gaPushed = true
            }
            else {
              bind()
            }
          }
        }, {once : true})
      }
      bind()
    }
  }
}
