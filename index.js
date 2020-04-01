/*
 * @Descripttion:
 * @version: 1
 * @Author: lvison
 * @Date: 2019-07-04 17:25:43
 * @LastEditors: lvison
 * @LastEditTime: 2019-08-14 10:37:46
 */
const http = require('http')
const parse = require('./lib/parse.js')
const codegen = require('./lib/codegen.js')
const url = require('url')

let getApi = function (opt) {
  let data = parse.parseApi(opt)
  let codeResult = codegen.codeApi(data)
  return codeResult
}

let getFilter = function (opt) {
  let data = parse.parseFilter(opt)
  let codeResult = codegen.codeFilter(data)
  return codeResult
}

let apiRequest = function (ops) {
  ops = url.parse(ops)
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
