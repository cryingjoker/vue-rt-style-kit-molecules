/**
 * ВНИМАНИЕ, ЭТО ЭКСПЕРИМЕНТАЛЬНЫЕ МЕТОДЫ
 * @TODO - Добавить при необходимости глобальный триггер
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
    let maxCall = 20
    let delayCall = 500
    let checkCondition = () => {
      let stylesList = getComputedStyle($el)
      return stylesList && stylesList[propertyCss] && stylesList[propertyCss] === needleValue
    }
    if (checkCondition()) {
      resolve()
    } else {
      let timer = setInterval(() => {
        if (checkCondition()) {
          clearInterval(timer)
          resolve()
        }
        if (call === maxCall) {
          clearInterval(timer)
          reject()
        }
        void call++
      }, delayCall)
    }
  })
}

export default {
  isLoadedCSS,
  waitCSSByCond
}
