import {popupStore} from "./PopupStore";

export default {
  name: "PopupTrigger",
  isFn: true,
  bind(el, bindings, vnode) {
    const onlyOpen = bindings.value?.onlyOpen || false;
    const onlyClose = bindings.value?.onlyClose || false;
    const popupName = bindings.value?.name;
    vnode.context.triggerPopup = () => {
      if (onlyOpen) {
        popupStore.setActiveId(popupName)
      } else if (onlyClose) {
        if (popupStore.getActiveId() == popupName) {
          popupStore.setActiveId(null)
        }

      } else {
        if (popupStore.getActiveId() == popupName) {
          popupStore.setActiveId(null)
        } else {
          popupStore.setActiveId(popupName)
        }
      }
    }
    el.addEventListener('click', vnode.context.triggerPopup)
  }
};

