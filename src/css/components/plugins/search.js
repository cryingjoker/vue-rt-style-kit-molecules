var plugin = function(){
    return function(style){
        style.define('search', function(a,b) {
            return a.val.search(b.val)
        });
    };
};
module.exports = plugin;