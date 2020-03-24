const nib = require('nib');
const path = require('path')
module.exports = function useMixin(style) {
    style.options.imports.push(path.resolve(__dirname, '../', 'node_modules/nib/lib/nib/index.styl'))
    return style
}