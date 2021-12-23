import fs from 'fs'
import path from 'path'
import zlib from 'zlib'
import {rollup} from 'rollup'
import terser from 'terser'
import genConfig from './config.js'
import {fileURLToPath} from "url";


if (!fs.existsSync('lib')) {
    fs.mkdirSync('lib')
}


// filter builds via command line arg
const keysBuild = ['web-es-full-prod','web-full-prod'];
// let date_ob = new Date();
// let date = ("0" + date_ob.getDate()).slice(-2);
// let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// let year = date_ob.getFullYear()
// let hours = date_ob.getHours() + '';

// let minutes = date_ob.getMinutes() + '';
// if(hours.length == 1){
//   hours = '0'+hours
// }
// if(minutes.length == 1){
//   minutes = '0'+minutes
// }
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename)
// const version = year + "-" + month + "-" + date + " " + hours + ":" + minutes

// let indexFile = fs.readFileSync(path.join(__dirname,'..','src','index.js'),"utf8")
// indexFile = indexFile.replace(/(const version = )([0-9a-z"\. :-]*)/gi,'const version = "'+version+'"')

// fs.writeFileSync(path.join(__dirname,'..','src','index.js'),indexFile)

function build(buildIndex = 0) {

    if(buildIndex < keysBuild.length) {
        const next = () => {
            build(buildIndex + 1)
        }
        buildEntry(genConfig(keysBuild[buildIndex])).then(() => {
          console.log('Build success!')
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
