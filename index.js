/*
 * @Descripttion:
 * @version: 1
 * @Author: lvison
 * @Date: 2019-07-04 17:25:43
 * @LastEditors: lvison
 * @LastEditTime: 2020-11-11 17:25:57
 */
const http = require('http')
const parse = require('./lib/parse.js')
const codegen = require('./lib/codegen.js')
const url = require('url')

/**
 * 根据swagger json描述生成axios请求方法
 * @param {*} opt swagger json数据对象
 * @param {*} usedFunctionList 确认使用的function
 */
let getApi = function (opt, usedFunctionList = []) {
  let data = parse.parseApi(opt, usedFunctionList)
  let codeResult = codegen.codeApi(data)
  return codeResult
}

/**
 * 根据swagger json描述 生成vue的过滤方法及需要转义的枚举数据
 * @param {*} opt swagger json数据对象
 */
let getFilter = function (opt) {
  let data = parse.parseFilter(opt)
  let codeResult = codegen.codeFilter(data)
  return codeResult
}

/**
 * http 请求 swagger json文件
 * @param {*} swaggerUrl swagger json 文件地址
 */
let apiRequest = function (swaggerUrl) {
  ops = url.parse(swaggerUrl)
  return new Promise((resolve, reject) => {
    let req = ''
    const httpClient = http.request(
      {
        host: ops.hostname,
        method: 'GET',
        port: ops.port,
        path: ops.path
      },
      (res) => {
        res.on('error', (err) => {
          reject(err)
        })
        res.setEncoding('utf8')
        if (res.statusCode !== 200) {
          reject(new Error({ message: 'statusCode != 200' }))
        } else {
          res.on('data', (chunk) => {
            req += chunk
          })
          res.on('end', () => {
            resolve(req)
          })
        }
      },
    )
    httpClient.on('error', (e) => {
      reject(new Error({ message: `request error: ${e.message}` }))
    })
    httpClient.end()
  })
}
module.exports.getApi = getApi
module.exports.getFilter = getFilter
module.exports.apiRequest = apiRequest
