/** @info Скрипт используется только при автопубликации в nexus */
const fs = require('fs')
const path = require('path')

const resolve = url => path.resolve(__dirname, url)
const formatLeadZero = d => ('0' + d).slice(-2)
const cDate = new Date()
const cdVersion = `${cDate.getFullYear()}${formatLeadZero(cDate.getMonth()+1)}${formatLeadZero(cDate.getDate())}${formatLeadZero(cDate.getHours())}`

const packageSrc = resolve('./package.json')
const packageCoding = 'utf8'
const pkg = JSON.parse(fs.readFileSync(packageSrc, packageCoding))
if (pkg.version.indexOf('-') === -1) pkg.version+='-'
pkg.version = pkg.version.substr(0, pkg.version.indexOf('-')+1) + cdVersion
fs.writeFileSync(packageSrc, JSON.stringify(pkg, null, 2), packageCoding)

console.log('>> Version UPDATED:', pkg.version)
