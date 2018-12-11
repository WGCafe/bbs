import _ from 'underscore';
import fetch from 'isomorphic-fetch';
import ApiUtil from './api-util';
import CommonUtil from './common-util';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  // Fixed IE cache request
  'pragma': 'no-cache',
  'cache-control': 'no-cache'
};

export function convertOptions(options) {
  const {payload, headers, ...others} = options;
  const composeHeaders = {
    ...defaultHeaders,
    ...headers
  };
  let body = payload;

  if (
    composeHeaders['Content-Type'] === 'application/json'
    && _.isObject(payload)
    && !_.isEmpty(payload)
  ) {
    body = JSON.stringify(payload);
  }

  return {
    body: body,
    ...others,
    headers: composeHeaders
  };
}

/**
 * @param {*} pathInfo
 * @param {*} tempOptions : {payload:{}, headers:{}}
 */
function configParams({path}, tempOptions) {
  const {headers, ...others} = tempOptions;

  const url = [apiRootUrl || '/', path].join('');
  const options = {
    ...others,
    headers: {
      token: CommonUtil.getTokenId(),
      ...headers
    }
  };

  return {
    url,
    options
  };
}

function _fetch(url, options) {
  const opts = convertOptions(options);

  return fetch(url, opts).then(response => {
    return new Promise(function(resolve, reject) {
      if (ApiUtil.isHttpSuccess(response.status)) {

        const contentType = response.headers.get('Content-Type');

        if(contentType.includes('application/json')) {
          resolve(response.json());
        } else {
          resolve(response);
        }

      } else {
        reject({status: response.status});
      }
    });
  }).then((data) => {
    return new Promise(function(resolve, reject) {

      if (!data.status || data.status === 200) {
        resolve(data);
      } else {
        reject({status: data.status});
      }
    });
  });
}

function _get(url, options) {
  return _fetch(url, {
    ...options,
    method: 'GET'
  });
}

function _post(url, options) {
  return _fetch(url, {
    ...options,
    method: 'POST'
  });
}

function _put(url, options) {
  return _fetch(url, {
    ...options,
    method: 'PUT'
  });
}

function _delete(url, options) {
  return _fetch(url, {
    ...options,
    method: 'DELETE'
  });
}

export class ApiFetch {

  static get(apiInfo, tempOptions = {}) {
    const {url, options} = configParams(apiInfo, tempOptions);

    return _get(url, options);
  }

  static post(apiInfo, tempOptions = {}) {
    const {url, options} = configParams(apiInfo, tempOptions);

    return _post(url, options);
  }

  static put(apiInfo, tempOptions = {}) {
    const {url, options} = configParams(apiInfo, tempOptions);

    return _put(url, options);
  }
  static delete (apiInfo, tempOptions = {}) {
    const {url, options} = configParams(apiInfo, tempOptions);

    return _delete(url, options);
  }
}

export default ApiFetch;