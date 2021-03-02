import variables from "../variables.json";

export const GaClickDirective = {
  name: "GaClick",
  bind(el, bindings, vnode) {
    if(bindings.value.data) {
      el.addEventListener('click', function () {
        if(!vnode.context.gaPushed) {
          if (!window.dataLayer) {
            window.dataLayer = [];
          }
          const data = {...{
            event: window[variables.globalSettingsKey].segment,
          }, ...bindings.value.data}
          window.dataLayer.push(data)
          vnode.context.gaPushed = true
        }
      }, {once : true})
    }
  }
}
