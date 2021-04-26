import debounce from 'debounce'

let resizeStack = {}
export const cmpName = 'rt-microtabs'
export let resizeHandler = (cmp, callback) => {
  if (resizeStack[cmp._uid]) return
  let f = debounce(() => callback())
  resizeStack[cmp._uid] = f
  window.addEventListener('resize', f, false)
}
export let resizeHandlerDestroy = cmp => resizeStack[cmp._uid] ? window.removeEventListener('resize', resizeStack[cmp._uid]) : null
