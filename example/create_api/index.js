/*
 * @Descripttion:
 * @version: 1
 * @Author: lvison
 * @Date: 2019-07-04 17:25:43
 * @LastEditors: lvison
 * @LastEditTime: 2019-08-14 10:39:50
 */
const swaggerGen = require('../../index.js')
const fs = require('fs')
const path = require('path')

const swggerApiUrl = ''
swaggerGen.apiRequest(swggerApiUrl).then(res => {
  const data = JSON.parse(res)
  let opt = {
    swagger: data,
    moduleName: 'api',
    className: 'api'
  }

  const codeResult = swaggerGen.getApi(opt)
  fs.writeFileSync(path.join(__dirname, './api.js'), codeResult)
})

// or
// const jsonData = require('../api-docs.json')
// let opt = {
//   swagger: jsonData,
//   moduleName: 'api',
//   className: 'api'
// }

// const codeResult = swaggerGen.getApi(opt)
// fs.writeFileSync(path.join(__dirname, '../dist/api.js'), codeResult)
