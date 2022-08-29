const fs = require('fs')
const path = require('path')
const swaggerGen = require('./index')
const testJson = require('./test.json')
// 循环初始化API
const opt = {
  swagger: testJson,
  moduleName: 'api',
  className: 'api'
}
try {
  const codeResult = swaggerGen.getApi(opt) // generate 模板代码
  const writePath = `./test/test.ts` // 目标文件
  fs.writeFileSync(path.join(__dirname, writePath), codeResult)
} catch (err) {
  console.log(err)
}
