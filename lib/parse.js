/*
 * @Descripttion:
 * @version: 1
 * @Author: lvison
 * @Date: 2019-07-04 17:25:43
 * @LastEditors: lvison
 * @LastEditTime: 2020-11-24 14:54:42
 */
'use strict'
let _ = require('lodash')
let normalizeName = function (id) {
  /* eslint-disable */
  return id.replace(/\.|\-|\{|\}/g, '_').split(" ").join("_")
  /* eslint-enable */
}

/**
 * 获取request body 参数
 * @param {*} swaggerJson 
 * @param {*} refs 格式如：'#/components/schemas/BannerDO'
 */
const getBodyParamFromSchema = function (swaggerJson, refs) {
  const refsArr = refs.split('/');
  let pramaterObj = swaggerJson;
  const paramterList = [];
  _.forEach(refsArr, function (partRef) {
    if (partRef === '#') {
      return
    }
    pramaterObj = pramaterObj[partRef]
  })
  if (pramaterObj.properties) {
    _.forEach(pramaterObj.properties, function (val, property) {
      if (pramaterObj.required && pramaterObj.required.indexOf(property) !== -1) {
        paramterList.push({ name: property, in: 'body', required: true });
      } else {
        paramterList.push( { name: property, in: 'body', required: false });
      }
    })
  }
  return paramterList;
}

/**
 * 通过path生成method name
 * @param {*} opts 
 * @param {*} m 
 * @param {*} path 
 */
let getPathToMethodName = function (opts, m, path) {
  if (path === '/' || path === '') {
    return m
  }

  // clean url path for requests ending with '/'
  let cleanPath = path.replace(/\/$/, '')

  let segments = cleanPath.split('/').slice(1)
  segments = _.transform(segments, function (result, segment) {
    if (segment[0] === '{' && segment[segment.length - 1] === '}') {
      segment = 'by' + segment[1].toUpperCase() + segment.substring(2, segment.length - 1)
    }
    result.push(segment)
  })
  let result = _.camelCase(segments.join('-'))
  return m.toLowerCase() + result[0].toUpperCase() + result.substring(1)
}

/**
 * swagger2.0
 * @param {*} opts 
 * @param {*} usedFunctionList 
 */
let getViewForSwagger2 = function (opts, usedFunctionList = []) {
  let swagger = opts.swagger
  let authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLIK', 'PURGE', 'LOCK', 'UNLOCK', 'PROPFIND']
  let data = {
    description: swagger.info.description,
    isSecure: swagger.securityDefinitions !== undefined,
    moduleName: opts.moduleName,
    className: opts.className,
    imports: opts.imports,
    domain: (swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath) ? swagger.schemes[0] + '://' + swagger.host + swagger.basePath.replace(/\/+$/g, '') : '',
    methods: [],
    definitions: []
  }

  _.forEach(swagger.paths, function (api, path) {
    let globalParams = []
    /**
     * @param {Object} op - meta data for the request
     * @param {string} m - HTTP method name - eg: 'get', 'post', 'put', 'delete'
     */
    _.forEach(api, function (op, m) {
      if (m.toLowerCase() === 'parameters') {
        globalParams = op
      }
    })
    _.forEach(api, function (op, m) {
      if (authorizedMethods.indexOf(m.toUpperCase()) === -1) {
        return
      }
      // 不在usedFunctionList 的fanction全部忽略
      if (usedFunctionList.length && usedFunctionList.indexOf(op.operationId) === -1) {
        return
      }
      let method = {
        path: path,
        className: opts.className,
        methodName: op.operationId ? normalizeName(op.operationId) : getPathToMethodName(opts, m, path),
        method: m.toUpperCase(),
        isGET: m.toUpperCase() === 'GET',
        isPOST: m.toUpperCase() === 'POST',
        summary: op.description || op.summary,
        tags: op.tags,
        externalDocs: op.externalDocs,
        isSecure: swagger.security !== undefined || op.security !== undefined,
        parameters: [],
        headers: []
      }

      if (op.produces) {
        let headers = []
        headers.value = []

        headers.name = 'Accept'
        headers.value.push(op.produces.map(function (value) { return '\'' + value + '\'' }).join(', '))

        method.headers.push(headers)
      }

      let consumes = op.consumes || swagger.consumes
      if (consumes) {
        method.headers.push({ name: 'Content-Type', value: '\'' + consumes + '\'' })
      }

      let params = []
      if (_.isArray(op.parameters)) {
        params = op.parameters
      }
      params = params.concat(globalParams)
      _.forEach(params, function (parameter) {
        // Ignore parameters which contain the x-exclude-from-bindings extension
        if (parameter['x-exclude-from-bindings'] === true) {
          return
        }

        // Ignore headers which are injected by proxies & app servers
        // eg: https://cloud.google.com/appengine/docs/go/requests#Go_Request_headers
        if (parameter['x-proxy-header'] && !data.isNode) {
          return
        }
        if (_.isString(parameter.$ref)) {
          let segments = parameter.$ref.split('/')
          parameter = swagger.parameters[segments.length === 1 ? segments[0] : segments[2]]
        }
        parameter.camelCaseName = parameter.name
        if (parameter.enum && parameter.enum.length === 1) {
          parameter.isSingleton = true
          parameter.singleton = parameter.enum[0]
        }
        if (parameter.in === 'body') {
          parameter.isBodyParameter = true
        } else if (parameter.in === 'path') {
          parameter.isPathParameter = true
        } else if (parameter.in === 'query') {
          if (parameter['x-name-pattern']) {
            parameter.isPatternType = true
            parameter.pattern = parameter['x-name-pattern']
          }
          parameter.isQueryParameter = true
        } else if (parameter.in === 'header') {
          parameter.isHeaderParameter = true
        } else if (parameter.in === 'formData') {
          parameter.isFormParameter = true
        }
        parameter.cardinality = parameter.required ? '' : '?'
        method.parameters.push(parameter)
      })
      data.methods.push(method)
    })
  })

  _.forEach(swagger.definitions, function (definition, name) {
    data.definitions.push({
      name: name
    })
  })

  return data
}

/**
 * swagger1.0
 * @param {*} opts 
 * @param {*} usedFunctionList 
 */
let getViewForSwagger1 = function (opts, usedFunctionList = []) {
  let swagger = opts.swagger
  let data = {
    description: swagger.description,
    moduleName: opts.moduleName,
    className: opts.className,
    domain: swagger.basePath ? swagger.basePath : '',
    methods: []
  }
  swagger.apis.forEach(function (api) {
    api.operations.forEach(function (op) {
      // 不在usedFunctionList 的fanction全部忽略
      if (usedFunctionList.length && usedFunctionList.indexOf(op.nickname) === -1) {
        return
      }
      let method = {
        path: api.path,
        className: opts.className,
        methodName: op.nickname,
        method: op.method,
        isGET: op.method === 'GET',
        isPOST: op.method.toUpperCase() === 'POST',
        summary: op.summary,
        parameters: op.parameters,
        headers: []
      }

      if (op.produces) {
        let headers = []
        headers.value = []

        headers.name = 'Accept'
        headers.value.push(op.produces.map(function (value) { return '\'' + value + '\'' }).join(', '))

        method.headers.push(headers)
      }

      op.parameters = op.parameters ? op.parameters : []
      op.parameters.forEach(function (parameter) {
        parameter.camelCaseName = parameter.name
        if (parameter.enum && parameter.enum.length === 1) {
          parameter.isSingleton = true
          parameter.singleton = parameter.enum[0]
        }
        if (parameter.paramType === 'body') {
          parameter.isBodyParameter = true
        } else if (parameter.paramType === 'path') {
          parameter.isPathParameter = true
        } else if (parameter.paramType === 'query') {
          if (parameter['x-name-pattern']) {
            parameter.isPatternType = true
            parameter.pattern = parameter['x-name-pattern']
          }
          parameter.isQueryParameter = true
        } else if (parameter.paramType === 'header') {
          parameter.isHeaderParameter = true
        } else if (parameter.paramType === 'form') {
          parameter.isFormParameter = true
        }
      })
      data.methods.push(method)
    })
  })
  return data
}
/**
 * openApi（swagger2.0之后）
 * @param {*} opts 
 * @param {*} usedFunctionList 
 */
let getViewForOpenApi = function (opts, usedFunctionList = []) {
  let swagger = opts.swagger
  let authorizedMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLIK', 'PURGE', 'LOCK', 'UNLOCK', 'PROPFIND']
  let data = {
    description: swagger.info.description,
    isSecure: swagger.securityDefinitions !== undefined,
    moduleName: opts.moduleName,
    className: opts.className,
    imports: opts.imports,
    domain: (swagger.schemes && swagger.schemes.length > 0 && swagger.host && swagger.basePath) ? swagger.schemes[0] + '://' + swagger.host + swagger.basePath.replace(/\/+$/g, '') : '',
    methods: [],
    definitions: []
  }

  _.forEach(swagger.paths, function (api, path) {
    let globalParams = []
    /**
     * @param {Object} op - meta data for the request
     * @param {string} m - HTTP method name - eg: 'get', 'post', 'put', 'delete'
     */
    _.forEach(api, function (op, m) {
      if (m.toLowerCase() === 'parameters') {
        globalParams = op
      }
    })
    _.forEach(api, function (op, m) {
      if (authorizedMethods.indexOf(m.toUpperCase()) === -1) {
        return
      }
      // 不在usedFunctionList 的fanction全部忽略
      if (usedFunctionList.length && usedFunctionList.indexOf(op.operationId) === -1) {
        return
      }
      let method = {
        path: path,
        className: opts.className,
        methodName: op.operationId ? normalizeName(op.operationId) : getPathToMethodName(opts, m, path),
        method: m.toUpperCase(),
        isGET: m.toUpperCase() === 'GET',
        isPOST: m.toUpperCase() === 'POST',
        summary: op.description || op.summary,
        tags: op.tags,
        externalDocs: op.externalDocs,
        isSecure: swagger.security !== undefined || op.security !== undefined,
        parameters: [],
        headers: []
      }

      if (op.produces) {
        let headers = []
        headers.value = []

        headers.name = 'Accept'
        headers.value.push(op.produces.map(function (value) { return '\'' + value + '\'' }).join(', '))

        method.headers.push(headers)
      }

      let consumes = op.consumes || swagger.consumes
      if (consumes) {
        method.headers.push({ name: 'Content-Type', value: '\'' + consumes + '\'' })
      }

      let params = []
      if (_.isArray(op.parameters)) {
        params = op.parameters
      }
      if (op.requestBody !== undefined) {
        _.forEach(op.requestBody.content, function (content) {
          // let property = []
          if (_.isString(content.schema.$ref)) {
            let segments = content.schema.$ref.split('/')
            const bodyParam = getBodyParamFromSchema(swagger, content.schema.$ref);
            params = params.concat(bodyParam)
          }
        })
      }
      params = params.concat(globalParams)
      _.forEach(params, function (parameter) {
        // Ignore parameters which contain the x-exclude-from-bindings extension
        if (parameter['x-exclude-from-bindings'] === true) {
          return
        }

        // Ignore headers which are injected by proxies & app servers
        // eg: https://cloud.google.com/appengine/docs/go/requests#Go_Request_headers
        if (parameter['x-proxy-header'] && !data.isNode) {
          return
        }
        if (_.isString(parameter.$ref)) {
          let segments = parameter.$ref.split('/')
          parameter = swagger.parameters[segments.length === 1 ? segments[0] : segments[2]]
        }
        parameter.camelCaseName = parameter.name
        if (parameter.enum && parameter.enum.length === 1) {
          parameter.isSingleton = true
          parameter.singleton = parameter.enum[0]
        }
        if (parameter.in === 'body') {
          parameter.isBodyParameter = true
        } else if (parameter.in === 'path') {
          parameter.isPathParameter = true
        } else if (parameter.in === 'query') {
          if (parameter['x-name-pattern']) {
            parameter.isPatternType = true
            parameter.pattern = parameter['x-name-pattern']
          }
          parameter.isQueryParameter = true
        } else if (parameter.in === 'header') {
          parameter.isHeaderParameter = true
        } else if (parameter.in === 'formData') {
          parameter.isFormParameter = true
        }
        parameter.cardinality = parameter.required ? '' : '?'
        method.parameters.push(parameter)
      })
      data.methods.push(method)
    })
  })

  _.forEach(swagger.definitions, function (definition, name) {
    data.definitions.push({
      name: name
    })
  })

  return data
}

let getMenuDataV3 = function (opts) {
  let data = {
    enumerations: [],
    description: 'test'
  }
  let swagger = opts.swagger
  _.forEach(swagger.components.schemas, (schema, key) => {
    let enumeration = {}
    if (!schema.enum) {
      return
    }
    enumeration.name = key
    enumeration.enumeration = schema.enum
    enumeration.display = []
    _.forEach(schema['x-enum-values'], (val, index) => {
      let tr = {
        key: val,
        value: schema['x-enum-labels'][index]
      }
      enumeration.display.push(tr)
    })
    // todo 枚举排序
    // _.forEach(schema['x-enum-vals'], (val, index) => {
    // })
    data.enumerations.push(enumeration)
  })
  return data
}

/**
 * 根据swagger json描述生成axios请求方法
 * @param {*} opt swagger json数据对象
 * @param {*} usedFunctionList 确认使用的function
 */
let parseApi = function (opts, usedFunctionList = []) {
  let data = ''
  let enumerationData = ''
  if (opts.swagger.swagger) { // swagger1.0 / 2.0
    data = opts.swagger.swagger === '1.0' ? getViewForSwagger1(opts, usedFunctionList) : getViewForSwagger2(opts, usedFunctionList)
  } else {
    data = getViewForOpenApi(opts, usedFunctionList)
    enumerationData = getMenuDataV3(opts)
  }
  data.enumerations = enumerationData.enumerations
  return data
}

/**
 * 获取vue 过滤器方法和枚举转义
 * @param {*} opts 
 */
let parseFilter = function (opts) {
  let data = ''
  let enumerationData = ''
  if (opts.swagger.swagger) { // swagger1.0 / 2.0
    data = opts.swagger.swagger === '1.0' ? getViewForSwagger1(opts) : getViewForSwagger2(opts)
  } else {
    data = getViewForOpenApi(opts)
    enumerationData = getMenuDataV3(opts)
  }
  data.enumerations = enumerationData.enumerations
  return data
}

module.exports.parseApi = parseApi
module.exports.parseFilter = parseFilter
