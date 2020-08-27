var fs = require('fs')
var path = require('path')

var plugin = function(){
    return function(style){

        style.define('readJsonKeys', function(jsonPath) {
            var filepath = path.join(jsonPath.filename, jsonPath.val)
            var content  = fs.readFileSync(filepath)
            return Object.keys(JSON.parse(content.toString()));
        });
    };
};
module.exports = plugin;