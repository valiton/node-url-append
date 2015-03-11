'use strict';

var Qs = require('qs');

module.exports = function (url, params) {
  if(!params) { return url; }
  params = typeof params === 'string' ? params : Qs.stringify(params);
  if (params.substr(0, 1) === '?' || params.substr(0, 1) === '&') {
    params = params.slice(1);
  }
  var delimiter = url.indexOf('?') > -1 ? '&' : '?';
  return url + delimiter + params;
};
