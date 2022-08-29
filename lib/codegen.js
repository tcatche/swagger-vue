const Handlebars = require('handlebars')
const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js_beautify
const apiTemplate = fs.readFileSync(path.join(__dirname, './template/api.hbs'), 'utf-8')
const definitions = fs.readFileSync(path.join(__dirname, './template/definitions.hbs'), 'utf-8')
const methods = fs.readFileSync(path.join(__dirname, './template/methods.hbs'), 'utf-8')
const method = fs.readFileSync(path.join(__dirname, './template/method.hbs'), 'utf-8')
const filter = fs.readFileSync(path.join(__dirname, './template/filter.hbs'), 'utf-8')
Handlebars.registerPartial('definitions', definitions)
Handlebars.registerPartial('methods', methods)
Handlebars.registerPartial('method', method)
Handlebars.registerPartial('filter', filter)
Handlebars.registerHelper('toLowerCase', function (word) {
  return word.toLowerCase()
})
Handlebars.registerHelper('brackets', function (word) {
  return `{${word}}`
})

const codeApi = function (data) {
  fs.writeFileSync(path.join(__dirname, `../test/data.json`), JSON.stringify(data, 2))
  let template = Handlebars.compile(apiTemplate)(data)
  // template = beautify(template, { indent_size: 2, max_preserve_newlines: -1 })
  return template
}

const compileApi = function (data) {
  fs.writeFileSync(path.join(__dirname, `../test/data.json`), JSON.stringify(data, null, '  '))
  let template = Handlebars.compile(apiTemplate)(data)
  // template = beautify(template, { indent_size: 2, max_preserve_newlines: -1 })
  return template
}

const codeFilter = function (data) {
  let template = Handlebars.compile(filter)(data)
  template = beautify(template, { indent_size: 2, max_preserve_newlines: -1 })
  return template
}

module.exports.codeApi = codeApi
module.exports.compileApi = compileApi
module.exports.codeFilter = codeFilter
