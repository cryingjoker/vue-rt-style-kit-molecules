var plugin = function(options){
    return function(style){
        var nodes = this.nodes;
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
    };
};
module.exports = plugin;