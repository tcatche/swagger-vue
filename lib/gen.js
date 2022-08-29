const fs = require('fs')
const path = require('path')

const genAPI = (domain) => {
  return `
/* eslint-disable */
import axios, { AxiosInstance, AxiosResponse } from 'axios'
import qs from 'qs'
let domain = '${domain}'
let axiosInstance = axios.create()
export function getDomain(): string {
  return domain
}
export function setDomain($domain: string): void {
  domain = $domain
}
export function getAxiosInstance(): AxiosInstance {
  return axiosInstance
}
export function setAxiosInstance($axiosInstance: AxiosInstance): void {
  axiosInstance = $axiosInstance
}
type RequestMethod = 'get' | 'post' | 'put' | 'delete' | 'head' | 'option' | 'patch'
export function request(method: RequestMethod, url: string, body, config) {
  let queryUrl = url
  if (!config) {
    config = {
      showNetworkError: true,
    }
  }
  if (method === 'delete') {
    return axiosInstance[method](queryUrl,{...config, data: body || {} })
  } else if (method === 'get') {
    let params = body ? qs.stringify(body) : ''
    if (params) {
      if (queryUrl.indexOf('?') < 0) {
        params = '?' + params
      } else if (!queryUrl.endsWith('?')) {
        params = '&' + params
      }
    }
    return axiosInstance[method](queryUrl + params, config)
  } else if(method === 'post' || method === 'put' || method === 'patch'){
    return axiosInstance[method](queryUrl, body, config)
  } else if (method === 'head' || method === 'option') {
    return axiosInstance[method](queryUrl, config)
  }
}

export interface ObjectType {
  [key: string]: any;
}

export interface Config {
  $domain?: string;
  $config?: any;
}

export interface Parameters {
  [key: string]: any;
}`
}

const formatTypeName = (str) => {
  let result = str.replace(/«/g, '<')
  result = result.replace(/»/g, '>')
  result = result.replace(/List</g, 'Array<')
  result = result.replace(/[:]+/g, '')
  return result
}

const typeMapper = (type) => {
  switch (type) {
    case 'integer':
    case 'number':
      return 'number'
    case 'string':
      return 'string'
    case 'boolean':
      return 'boolean'
    case 'file':
      return 'File'
    case 'object':
      return 'ObjectType'
    default:
      return formatTypeName(type)
  }
}
const transferType = (property) => {
  if (property.type) {
    if (property.enum) {
      console.log(property.enum)
    }
    switch (property.type) {
      case 'integer':
      case 'number':
      case 'string':
      case 'boolean':
      case 'file':
      case 'object':
        return typeMapper(property.type)
      case 'array':
        if (property.items) {
          return `Array<${transferType(property.items)}>`
        }
        return `Array<any>`
      default:
        console.log(property.type)
        return typeMapper(property.type)
    }
  } else if (property.$refType) {
    return formatTypeName(property.$refType)
  } else if (property.$ref) {
    return formatTypeName(property.$ref.split('/').pop())
  }
  return 'any'
}

const genedType = {}

const genPropType = (arr) => {
  const propertiesArr = []
  let refTypes = ''
  for (let property of arr) {
    if (property.ref) {
      const currRefType = genDefinedType(property.ref)
      refTypes = currRefType + refTypes
      propertiesArr.push(`  ${property.name}${property.required ? ':' : '?:'} ${property.ref.name};`)
    } else {
      propertiesArr.push(`  ${property.name}${property.required ? ':' : '?:'} ${transferType(property)};${property.description ? ` // ${property.description}` : ''}`)
    }
  }
  return [refTypes, propertiesArr.join('\n')]
}

const genDefinedType = (definition) => {
  const formattedName = formatTypeName(definition.name)
  let typeName = formattedName
  // 判断类型名是否存在泛型的标识
  const genericTypeMatched = formattedName.match(/<.+>$/)
  if (genericTypeMatched) {
    typeName = typeName.split('<').shift()
    // 如果是泛型（interface name<T>），且已存在非泛型（interface name）的定义，删除非泛型（interface name）的定义，只保留泛型的定义
    if (genedType[typeName]) {
      genedType[typeName] = undefined
    }
    typeName = `${typeName}<T>`
    if (genedType[typeName]) {
      return ''
    }
  } else {
    // 如果是非泛型（interface name），且已存在非泛型（interface name）或泛型（interface name<T>）的定义，则退出后续处理
    if (genedType[typeName] || genedType[`${typeName}<T>`]) {
      return ''
    }
  }

  const [refTypes, properties] = genPropType(Object.values(definition.properties || {}))
  let currType = `\n// ${typeName}\nexport interface ${typeName} {\n${properties}\n}`

  if (genericTypeMatched) {
    // 处理泛型
    currType = currType.replace(new RegExp(genericTypeMatched[0].substr(1, genericTypeMatched[0].length - 2), 'g'), 'T')
  }
  genedType[typeName] = currType

  return `${refTypes}${currType}`
}

const genDefinedTypes = (defines) => {
  // return Object.values(defines).filter(define => define.name.indexOf('«') < 0 && define.name.indexOf('»') < 0).map(genDefinedType).join('\n')
  Object.values(defines).forEach(genDefinedType)
  return Object.values(genedType).filter(v => v).join('\n')
  // return Object.values(defines).forEach(genDefinedType).join('\n')
}

const genMethodParamsType = (name, arr) => {
  const [refTypes, properties] = genPropType(arr)
  return `${refTypes}\n\nexport interface ${name} {\n${properties}\n}`
}

const genResponseType = (type) => {

}

const genMethod = (method) => {
  let result = ''
  // 方法注释
  let methodComments = `

/**
 * @name: ${method.methodName}
 * @date: ${new Date().toLocaleDateString()}
 * @description: ${method.summary}\n`
  if (method.parameters) {
    method.parameters.forEach((parameter) => {
      methodComments += ` * @param: {${parameter.name}} [${formatTypeName(parameter.type || parameter.$refType)}]\n`
    })
    methodComments += ` * @return: ${method.responseData.type}\n`
  }
  methodComments += ` */`
  result += methodComments

  // 方法体
  const methodDefine = `
export function ${method.methodName}(parameters: ${method.parameterType}): ${method.responseData.type} {
  const { $config, $domain, ...body} = parameters
  const host = $domain ? $domain : getDomain()
  let path = '${method.path}'

  return request('${method.method.toLowerCase()}', host + path, body, $config)
}`
  result += methodDefine

  return result
}

const genMethods = (data) => {
  return data.map(method => {
    const parameterType = method.methodName + 'Parameters'
    const isHasParameters = method.parameters.length > 0
    method.parameterType = method.parameters.length > 0 ? `Config & ${parameterType}` : 'Config'
    let responseDataType = 'never'
    if (method.responseData.schema && method.responseData.schema.$ref) {
      responseDataType = formatTypeName(method.responseData.schema.$ref.split('/').pop())
      // 判断类型名是否存在泛型的标识
      const genericTypeMatched = responseDataType.match(/<.+>$/)
      if (genericTypeMatched) {
        const typeName = responseDataType.split('<').shift()
        if (!genedType[`${typeName}<T>`]) {
          responseDataType = 'any'
        }
      } else {
        // 如果类型不是泛型
        if (genedType[`${responseDataType}<T>`]) {
          responseDataType = `${responseDataType}<any>`
        }
      }
    }
    method.responseData.type = `Promise<AxiosResponse<${responseDataType}>>`
    return `${isHasParameters ? genMethodParamsType(parameterType, method.parameters) : ''}${genMethod(method)}`
  }).join('')
}

const compile = function (data) {
  fs.writeFileSync(path.join(__dirname, `../test/data.json`), JSON.stringify(data, null, '  '))
  let template = `
${genAPI(data.domain)}
${genDefinedTypes(data.definitions)}
${genMethods(data.methods)}
  `
  // template = beautify(template, { indent_size: 2, max_preserve_newlines: -1 })
  return template
}

module.exports.compile = compile
