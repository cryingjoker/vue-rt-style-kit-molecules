import Vue from "vue";

const hints = {};
const activeHint = {};
const watchers = {};

const initStore = (uid, textContent) => {
  hints[uid] = textContent;
};

const setActive = (uid, coords, hovered) => {
  activeHint.id = uid;
  activeHint.coords = coords;
  activeHint.hovered = hovered;
  runWatchers()
};

const getHintData = () => {
  return {text: hints[activeHint.id], ...activeHint};
};

const addWatcher = (id,fn)=>{
  watchers[id] = fn
};

const runWatchers = ()=>{
  Object.keys(watchers).forEach((id)=>{
    watchers[id]()
  })
};

export const hintStore = Vue.observable({
  initStore: initStore,
  setActive: setActive,
  getHintData: getHintData,
  addWatcher: addWatcher
});
