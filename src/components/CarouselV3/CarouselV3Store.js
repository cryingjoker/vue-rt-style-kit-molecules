import Vue from "vue";

import {StorePrototype} from "vue-rt-style-kit-atoms";

class CarouselV3Store extends StorePrototype {

  constructor() {
    super();
    this.sliders = {}
    this.sliderSqueue = {}
    this.arraySize = 5;
    this.animationDuration = 500;
  }


  createContainer = (name) => {

  }

  removeContainer = (name) => {

  }

  setActiveItems(sliderName, activeIndex) {

  }

  fillSlideInfo(sliderName) {
    if (!this.sliders[sliderName]) {
      this.sliders[sliderName] = {
        index: 0,
        slides: [],
        ids: [],
        possibleIds: {},
        watchers: [],
        colInRow: 0,
        infinityScroll: false,
        showLArrow: false,
        showRArrow: false,
        showLShadow: false,
        showRShadow: false,
      }
    }
  }

  createSlide = (sliderName, _id, slot, index) => {
    this.fillSlideInfo(sliderName)
    const sliders = this.sliders[sliderName];
    if (!sliders.possibleIds[_id]) {
      sliders.possibleIds[_id] = 1
      if (index < 0) {
        sliders.slides.push(slot)
        sliders.ids.push(_id)

      } else {
        sliders.slides.splice(index, 0, slot)
        sliders.ids.splice(index, 0, splice)
      }
    } else {
      const index = sliders.ids.indexOf(_id)
      sliders.slides[index] = slot;
    }
    this.setArrowProps(sliderName);
    this.callWatcher(sliderName)


  }
  setMaxAuthorTextLength = (sliderName) => {

  }
  updateSlide = (sliderName, _id, content, isActive) => {

  }
  setArrowProps = (sliderName)=>{
    if (this.sliders[sliderName]) {
      const slider = this.sliders[sliderName];
      const index = slider.index;
      const size = slider.ids.length;
      const colInRow = slider.colInRow
      slider.showRArrow = (wWidth > 1023 ? index < size - colInRow : wWidth > 767 ? index < size - 3 : index < size - 1) ;
      slider.showLArrow = index > 0;
      const wWidth = window?.innerWidth;
      slider.showRShadow = (wWidth > 1023 ? index < size - colInRow : wWidth > 767 ? index < size - 1 : index < size)   ;
      slider.showLShadow = index > 0;

    }
  }

  getSliderContent = (sliderName) => {
    if (this.sliders[sliderName]) {
      return this.sliders[sliderName].slides
    }
  }

  removeSlide = (sliderName, _id) => {

    const sliders = this.sliders[sliderName];
    if (sliders.possibleIds[_id]) {
      delete sliders.possibleIds[_id]
      const index = sliders.ids.indexOf(_id)
      sliders.ids.splice(index, 1)
      sliders.slides.splice(index, 1)
      this.setArrowProps(sliderName);
      this.callWatcher(sliderName)
    }

  }

  addWatcher = (sliderName, fn) => {
    this.fillSlideInfo(sliderName)
    if (this.sliders[sliderName].watchers.indexOf(fn) < 0) {
      this.sliders[sliderName].watchers.push(fn)
    }
  }

  callWatcher = (sliderName) => {
    this.sliders[sliderName].watchers.forEach(fn => fn.call());
  }

  setNextSlide = (sliderName) => {
    if (this.sliders[sliderName]) {
      const slider = this.sliders[sliderName];
      const index = slider.index;
      const size = slider.ids.length;
      const colInRow = slider.colInRow
      const width = window.innerWidth;
      if (index  == size - colInRow && width > 1024 || index == size - 2 && width > 767 && width <= 1024 || index == size - 1 && width < 768){
        slider.index = 0
      }else {
        slider.index = (index + 1) % size;
      }
      this.setArrowProps(sliderName);
      this.callWatcher(sliderName);
    }
  }
  setActiveId = (sliderName, id) => {
  }
  setActiveIndex = (sliderName, index) => {
    if(this.sliders[sliderName]){
      this.sliders[sliderName].index = index - 0;
      this.setArrowProps(sliderName)
      this.callWatcher(sliderName);
    }
  }
  setPrewSlide = (sliderName) => {
    if (this.sliders[sliderName]) {
      const slider = this.sliders[sliderName];
      const index = slider.index;
      const size = slider.ids.length;
      const colInRow = slider.colInRow
      const width = window.innerWidth;
      slider.index = (index - 1 + size) % size;
      if (width > 1024) {
        if(slider.index  > size - colInRow ) {
          slider.index = size - colInRow
        }
      }else{
        if(width > 767 && width <= 1024 ){
          if(slider.index  > size - 2 ) {
            slider.index = size - 2
          }
        }else{
          if(slider.index  > size - 1 ) {
            slider.index = size
          }
        }
      }
      this.setArrowProps(sliderName);
      this.callWatcher(sliderName);
    }
  }
  getActiveIndex = (sliderName) => {
    if (this.sliders[sliderName]) {
      return this.sliders[sliderName].index
    }
    return 0
  }
  getArrowOptions = (sliderName)=>{
    const slider = this.sliders[sliderName];
    return {
      next : slider.showRArrow,
      prew : slider.showLArrow
    }
  }
  getShadowOptions = (sliderName)=>{
    const slider = this.sliders[sliderName];
    return {
      next : slider.showRShadow,
      prew : slider.showLShadow
    }
  }
  setColInRow = (sliderName, colInRow) => {
    if (this.sliders[sliderName]) {
      this.sliders[sliderName].colInRow = colInRow - 0
    }
  }
}

const carouselV3StoreObject = new CarouselV3Store();

export const carouselV3Store = Vue.observable({

  removeWatcher: carouselV3StoreObject.removeWatcher,
  addWatcher: carouselV3StoreObject.addWatcher,
  setColInRow: carouselV3StoreObject.setColInRow,
  setNextSlide: carouselV3StoreObject.setNextSlide,
  setPrewSlide: carouselV3StoreObject.setPrewSlide,
  setActiveId: carouselV3StoreObject.setActiveId,
  setActiveIndex: carouselV3StoreObject.setActiveIndex,
  createContainer: carouselV3StoreObject.createContainer,
  removeContainer: carouselV3StoreObject.removeContainer,
  createSlide: carouselV3StoreObject.createSlide,
  updateSlide: carouselV3StoreObject.updateSlide,
  removeSlide: carouselV3StoreObject.removeSlide,
  getSliderContent: carouselV3StoreObject.getSliderContent,
  getActiveIndex: carouselV3StoreObject.getActiveIndex,
  getArrowOptions: carouselV3StoreObject.getArrowOptions,
  getShadowOptions: carouselV3StoreObject.getShadowOptions
});
