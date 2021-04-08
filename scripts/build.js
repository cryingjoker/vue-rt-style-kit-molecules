import fs from 'fs'
import path from 'path'
import zlib from 'zlib'
import {rollup} from 'rollup'
import terser from 'terser'
import genConfig from './config.js'


if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
}


// filter builds via command line arg
const keysBuild = ['web-es-full-prod','web-full-prod'];
function build(buildIndex = 0) {

    if(buildIndex < keysBuild.length) {
        const next = () => {
            build(buildIndex + 1)
        }
        buildEntry(genConfig(keysBuild[buildIndex])).then(() => {
            next()
        })
    }


}
build();


function buildEntry (configData) {
    const config = configData.config;
    if(process.env.NODE_ENV) {
      config.env = process.env.NODE_ENV
    }
    const opts = configData.opts;
    const output = config.output

    const { file, banner } = output
    const isProd = /(min|prod)\.js$/.test(file)
    return rollup(config)
        .then((bundle) => {
            return bundle.generate(output)
        })
        .then((output) => {
            const primises = []
            output.output.forEach((o)=>{
                if(o.isAsset){
                    primises.push(write(opts.assetPath+'/'+o.fileName, o.source, true))
                }
            })
            const code = output.output[0].code;
            if (isProd) {
                const minified = (banner ? banner + '\n' : '') + terser.minify(code, {
                    toplevel: true,
                    output: {
                        ascii_only: true
                    },
                    compress: {
                        pure_funcs: ['makeMap']
                    }
                }).code;

                primises.push(write(file, minified, true))
            } else {
                primises.push(write(file, code))
            }

            return Promise.all(primises);
        })
}

function write (dest, code, zip) {
    return new Promise((resolve, reject) => {
        function report (extra) {
            console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || ''))
            resolve()
        }

        fs.writeFile(dest, code, err => {
            if (err) return reject(err)
            if (zip) {
                zlib.gzip(code, (err, zipped) => {
                    if (err) return reject(err)
                    report(' (gzipped: ' + getSize(zipped) + ')')
                })
            } else {
                report()
            }
        })
    })
}

function getSize (code) {
    return (code.length / 1024).toFixed(2) + 'kb'
}

function logError (e) {
    console.log(e)
}

function blue (str) {
    return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}
