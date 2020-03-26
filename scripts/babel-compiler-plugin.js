
const path = require('path')
const {createFilter} = require('@rollup/pluginutils')
var babel = require("@babel/core")

module.exports = function (options = {}) {
    if (!options.include) options.include = ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.css', '**/*.styl']
    const filter = createFilter(options.include, options.exclude);

    const compiledCache = {}

    return {
        name: 'rollup-test-bundler',
        transform(code, id) {
            if (!filter(id)) return
            let a = false;
            return new Promise(function (resolve, reject) {
                babel.transformAsync(code,{
                    "presets": [
                        "@babel/preset-env",
                        // "@babel/preset-typescript"
                    ],
                    "plugins": [
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-syntax-json-strings",
                        "@babel/plugin-transform-regenerator",
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        ["@babel/plugin-proposal-class-properties", { "loose": true }],
                        "@babel/plugin-transform-typescript",
                        "transform-vue-jsx",
                    ]

                }).then(result => {
                    resolve({
                        code: `${result.code}`,
                        map: {mappings: ''}
                    })
                });
            })
        },
    }
};