
const path = require('path')
const {createFilter} = require('@rollup/pluginutils')
var babel = require("@babel/core")

module.exports = function (options = {}) {
  if (!options.include) options.include = ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.css', '**/*.styl']
  const filter = createFilter(options.include, options.exclude);

  const compiledCache = {}

  return {
    name: 'rollup-test-bundler',
    buildStart(a,b){
      // console.info('buildStart',a,b)
    },
    writeBundle(config, options, bundle) {
      console.info('bundle',bundle)
      // console.info('@@@ writeBundle',config,
      //     options,
      //     bundle)
    },
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
            "@babel/plugin-transform-regenerator",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-typescript",
            "transform-vue-jsx"
          ]

        }).then(result => {
          resolve({
            code: `${result.code}`,
            map: {mappings: ''}
          })
        });
      })
    },
    // generateBundle(bundle, config) {
    //
    //
    //     // console.info('bundle, config',bundle, config);
    //     // Object.keys(bundle).forEach((key) => {
    //     //     if (key.search('.js') >= 0) {
    //     //         // babel.transformAsync("code();", options).then(result => {
    //     //         //     result.code;
    //     //         //     result.map;
    //     //         //     result.ast;
    //     //         // });
    //     //     console.info('bundle[key]',Object.keys(bundle[key]))
    //     // //         // console.info('^^^6 key', key);
    //     // //         // console.info('^^^6 key', key);
    //     // //         // console.info('^^^6 key', key);
    //     // //         // console.info('^^^6 key', key);
    //     // //         // console.info('^^^6 key', key);
    //     // //         bundle[key].file = '/Users/cryingjoker/rostel/ui-kit/vue-rt-style-kit-atoms/lib/' + bundle[key].fileName
    //     //     }
    //     // })
    // }
  }
};
