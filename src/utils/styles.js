/**
 * Утили для работы со стилями
 * 
 * @TODO - Добавить, при необходимости, глобальный метод при загрузки CSS-стилей библиотеки
 */

const isLoadedCSS = document.body.className.indexOf('is-init-rt-molecules') !== -1

/**
 * Подписывается на заданное CSS-свойство DOM-элемента
 * @param {*} $el 
 * @param {*} propertyCss 
 * @param {*} needleValue 
 */
const waitCSSByCond = ($el, propertyCss, needleValue) => {
  return new Promise((resolve, reject) => {
    let call = 0
    let maxCall = 40
    let delayCall = 250
    let checkCondition = () => {
      return getComputedStyle($el)[propertyCss] === needleValue
    }
    if (checkCondition()) {
      resolve()
    } else {
      let timer = setInterval(() => {
        if (checkCondition()) {
          clearInterval(timer)
          resolve()
        }
        if (++call >= maxCall) {
          clearInterval(timer)
          reject()
        }
      }, delayCall)
    }
  })
}

export default {
  isLoadedCSS,
  waitCSSByCond
}
