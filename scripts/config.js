import path from 'path'

import babel from 'rollup-plugin-babel'
import cjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import {nodeResolve} from '@rollup/plugin-node-resolve';

import flow from 'rollup-plugin-flow-no-whitespace'
import postcss from 'rollup-plugin-postcss'
import postcssEnv from 'postcss-preset-env'
import externals from 'rollup-plugin-node-externals'
import stylusCompilerPlugin from './rollup-plugin-stylus-compiler.js'
import stylusMixin from './stylus-mixin.js'
import {terser} from "rollup-plugin-terser"
import css from 'rollup-plugin-css-porter'
import cssnano from 'cssnano'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear()
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();

const version = year + "-" + month + "-" + date + " " + hours + ":" + minutes
const aliases = {}
import json from 'rollup-plugin-json'
import alias from '@rollup/plugin-alias'

const resolve = p => {
    const base = p.split('/')[0]
    if (aliases[base]) {
        return path.resolve(aliases[base], p.slice(base.length + 1))
    } else {
        return path.resolve(__dirname, '../', p)
    }
}
const banner =
    '/*!\n' +
    ` * vue-rt-style-kit-molecules.js v${version}\n` +
    ` * (c) 2018-${new Date().getFullYear()} Alex Nikolaev / Cryingjoker\n` +
    ' * Released under the MIT License.\n' +
    ' */';
const builds = {
    'web-full-prod': {
        entry: resolve('src/index.js'),
        // entry: [resolve('src/index.js'),resolve('src/css/vue-rt-style-atoms.styl')],
        dest: resolve('lib/vue-rt-style-kit-molecules.js'),
        // dest: [resolve('lib/vue-rt-style-kit-atoms.js'),resolve('lib/vue-rt-style-kit-atoms.js')],
        destCss: resolve('lib/vue-rt-style-kit-molecules.css'),
        destCssPath: resolve('lib/'),
        format: 'umd',
        env: 'production',
        sourcemap: true,
        banner,
        assetPath: resolve('lib'),

    },
    'web-es-full-prod': {
        entry: resolve('src/index.js'),
        // entry: [resolve('src/index.js'),resolve('src/css/vue-rt-style-atoms.styl')],
        dest: resolve('lib/vue-rt-style-kit-molecules.esm.js'),
        // dest: [resolve('lib/vue-rt-style-kit-atoms.js'),resolve('lib/vue-rt-style-kit-atoms.js')],
        destCss: resolve('lib/vue-rt-style-kit-molecules.css'),
        destCssPath: resolve('lib/'),
        format: 'umd',
        env: 'production',
        sourcemap: true,
        banner,
        assetPath: resolve('lib'),

    },
}

function genConfig(name = 'web-full-prod') {
    const opts = builds[name];
    const config = {
        input: opts.entry,
        external: opts.external,
        plugins: [

            flow(),

            alias({
              entries: [
                { find: '@projectMolecules', replacement: '../package.json' },
            ]}),
            json(),
            externals({
                include: [
                    'vue',
                    'vue-rt-style-kit-atoms'
                ],
                exclude:[
                    'debounce'
                ]
            }),

            stylusCompilerPlugin({
                fn: stylusMixin,
            }),

            postcss({
                inject: false,
                minimize: true,
                extract: true,
                plugins: [
                    postcssEnv({
                        stage: 3,
                        features: {
                            'nesting-rules': true,
                        },
                        exportTo: opts.destCss
                    }),
                    cssnano()
                ],
            }),
            // typescript(),
            // babelCompilerPlugin(),
            babel({
                babelrc: true
            }),





            nodeResolve({
                jsnext: true,
                skip: ['vue-rt-style-kit-atoms']
            }),

            terser(),


            vue(),
            cjs(),


        ].concat(opts.plugins || []),
        output: {
            file: opts.dest,
            format: opts.format,
            banner: opts.banner,
            name: opts.moduleName || 'vue-rt-style-kit-molecules',
            sourcemap: true,
            // dir: resolve('lib')
        },
        onwarn: (msg, warn) => {
            if (!/Circular/.test(msg)) {
                warn(msg)
            }
        },
    }
    // console.info('config',config)
    const vars = {
        __VERSION__: version
    }
    // feature flags
    // Object.keys(featureFlags).forEach(key => {
    //     vars[`process.env.${key}`] = featureFlags[key]
    // })
    // build-specific env

    // config.plugins.push(replace(vars))

    // if (opts.transpile !== false) {
    //     config.plugins.push(buble())
    // }

    Object.defineProperty(config, '_name', {
        enumerable: false,
        value: name
    })

    return {
        config: config,
        opts: opts
    }
}

export default genConfig
