const stylus = require('stylus')
const path = require('path')
const {createFilter} = require('@rollup/pluginutils')



module.exports = function (options = {}) {
    if (!options.include) options.include = ['**/*.styl', '**/*.stylus']

    const filter = createFilter(options.include, options.exclude);

    const compiledCache = {}

    return {
        name: 'rollup-plugin-stylus-compiler',
        resolveId(importee, importer) {
            if (compiledCache[importee+'.css']) {
                return compiledCache[importee]
            }
        },
        load(id) {
            if (compiledCache[id+'.css']) {
                return compiledCache[id]
            }
        },
        transform(code, id) {
            if (!filter(id)) return
            return new Promise(function (resolve, reject) {
                const relativePath = path.relative(process.cwd(), id)
                stylus(code, options.compiler)
                    .set('filename', relativePath)
                    .use(options.fn)
                    .render(function (err, css) {
                        if (err) reject(err)
                        else {
                            const compiledId = `${id}.css`
                            compiledCache[compiledId] = css
                            resolve({
                                // code: `import ${JSON.stringify(compiledId)}`,
                                code: `${css}`,
                                map: { mappings: '' }
                            })
                        }
                    })
            })
        }
    }
};