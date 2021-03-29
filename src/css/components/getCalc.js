
var stylus = require('stylus');
var utils = stylus.utils;

var getCalc = function () {
  return function (style) {
    style.define('getCalc', function (a, b, c, d) {
      var x1 = a.val
      var y1 = b.val
      var x2 = c.val
      var y2 = d.val
      var deltax = x2 - x1
      var deltay = y2 - y1
      var a = deltax
      var b = deltay
      var c  = deltax * y1 - deltay * x1
      var res = '(' + b +'* 100vw'
      if (c > 0) {
        res = res + '+ '
      } else {
        res = res + '- '
      }
      c = Math.abs(c)
      res = res + c + 'px'
      res = res + ')/' + a
      return utils.parseString('calc('+res+')')
    })
  }
}


module.exports = getCalc;