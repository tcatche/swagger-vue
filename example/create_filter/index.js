const jsonData = require('../api-docs.json')
const swaggerGen = require('../../index.js')
const fs = require('fs')
const path = require('path')
let opt = {
  swagger: jsonData,
  moduleName: 'api',
  className: 'api'
}

const filterContent = swaggerGen.getFilter(opt)
fs.writeFileSync(path.join(__dirname, '../config/filter.js'), filterContent)
