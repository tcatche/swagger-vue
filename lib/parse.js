'use strict'
let _ = require('lodash')
let normalizeName = function (id) {
  /* eslint-disable */
  return id.replace(/\.|\-|\{|\}/g, '_').split(" ").join("_")
  /* eslint-enable */
}

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

let getViewForSwagger2 = function (opts) {
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
    definitions: {}
  }

  _.forEach(swagger.definitions, function (definition, name) {
    data.definitions[name] = definition
    definition.name = name
  })

  _.forEach(swagger.definitions, function (definition) {
    if (definition.properties) {
      Object.keys(definition.properties).forEach(key => {
        const property = definition.properties[key]
        if (property) {
          property.name = key
          property.required = (definition.required || []).indexOf(key) >= 0
          if (property.$ref) {
            const refName = property.$ref.split('/').pop()
            property.ref = data.definitions[refName]
            property.$refType = refName
          }
        } else {
          console.log(property)
        }
      })
    } else {
      console.log(definition)
    }
  })

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
        responseData: {},
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
      const arrayParams = {}
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
        if (parameter.schema) {
          parameter = Object.assign(parameter, parameter.schema || {})
        }
        if (parameter.$ref) {
          parameter.$refType = parameter.$ref.split('/').pop()
        }
        if (parameter.enum && parameter.enum.length === 1) {
          parameter.isSingleton = true
          parameter.singleton = parameter.enum[0]
        }
        if (parameter.in === 'body') {
          parameter.isBodyParameter = true
        } else if (parameter.in === 'path') {
          parameter.isPathParameter = true
        } else if (parameter.in === 'query') {
          parameter.isQueryParameter = true
        } else if (parameter.in === 'header') {
          // ignore header parameter
          // parameter.isHeaderParameter = true
          return
        } else if (parameter.in === 'formData') {
          parameter.isFormParameter = true
        }
        // get请求 parameter 类型参数为为数组
        if (parameter.name.indexOf('List[0].') > 0) {
          const listName = parameter.name.split('List[0].').shift()
          if (arrayParams[listName]) {
            return
          }
          const listToDefinitionName = listName.substr(0, 1).toUpperCase() + listName.substr(1)
          if (data.definitions[listToDefinitionName]) {
            arrayParams[listName] = {
              ...parameter,
              name: listName,
              type: 'array',
              description: listToDefinitionName,
              items: {
                type: listToDefinitionName
              }
            }
            return
          }
        }
        // get请求 parameter 类型参数为为对象
        if (parameter.name.indexOf('.') > 0) {
          const listName = parameter.name.split('.').shift()
          if (arrayParams[listName]) {
            return
          }
          const listToDefinitionName = listName.substr(0, 1).toUpperCase() + listName.substr(1)
          if (data.definitions[listToDefinitionName]) {
            arrayParams[listName] = {
              ...parameter,
              name: listName,
              type: null,
              description: listToDefinitionName,
              $refType: listToDefinitionName
            }
            return
          }
        }
        method.parameters.push(parameter)
      })
      method.parameters.push(...Object.values(arrayParams))
      method.responseData = op.responses['200']
      data.methods.push(method)
    })
  })

  return data
}

let getViewForSwagger1 = function (opts) {
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
let getViewForOpenApi = function (opts) {
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

  _.forEach(swagger.definitions, function (definition, name) {
    data.definitions.push({
      name: name,
      definition: definition
    })
  })

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
            params.push({
              name: segments[segments.length - 1],
              in: 'body',
              required: true
            })
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

let parseApi = function (opts) {
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
