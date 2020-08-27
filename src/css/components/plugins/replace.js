var plugin = function(){
    return function(style){

        style.define('replace', function(a,b,c) {
            return a.val.replace(b.val, c.val)
        });
    };
};
module.exports = plugin;