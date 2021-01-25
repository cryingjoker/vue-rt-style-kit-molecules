export const cmpName = 'rt-microtabs'
export const backgroundsMap = {
  // #f5f5f5 -> #efeff1 (rgba(16, 24, 40, 0.05) -> rgba(16, 24, 40, 0.1))
  default: '#93959c',
  orange: 'rgb(255, 79, 18)',
  purple: '#7700FF'
}
export const colorsMap = {
  default: '#101828',
  orange: '#FF4F12',
  purple: '#7700FF'
}
export const inverseColor = '#fff'
export let getBackground = cmp => cmp.customBgLocal || backgroundsMap[cmp.themeLocal] || backgroundsMap['default']
export let getColor = cmp => cmp.customColorLocal || (cmp.themeLocal !== 'default' ? colorsMap[cmp.themeLocal] : null)
