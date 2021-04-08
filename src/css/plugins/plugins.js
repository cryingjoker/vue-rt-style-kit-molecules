import stylus from 'stylus'
import path from 'path'
import fs from 'fs'
var utils = stylus.utils;
export default function () {
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
      var c = deltax * y1 - deltay * x1
      var res = '(' + b + '* 100vw'
      if (c > 0) {
        res = res + '+ '
      } else {
        res = res + '- '
      }
      c = Math.abs(c)
      res = res + c + 'px'
      res = res + ')/' + a
      return utils.parseString('calc(' + res + ')')
    })
  
    style.define('callVariable', function(name) {
    
      var val = options[name.val];
      switch (typeof val) {
        case 'boolean':
          return new nodes.Boolean(val);
        case 'number':
          return new nodes.Unit(val);
        case 'string':
        default:
          return new nodes.String(val);
      }
    });
    style.define('readJsonKeys', function(jsonPath) {
      var filepath = path.join(jsonPath.filename, jsonPath.val)
      var content = fs.readFileSync(filepath)
      return Object.keys(JSON.parse(content.toString()));
    });
    style.define('replace', function(a,b,c) {
      return a.val.replace(b.val, c.val)
    });
    style.define('search', function(a,b) {
      if(!a.val)
        return - 1
      return a.val.search(b.val)
    });
  }
}