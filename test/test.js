'use strict';
var assert = require('assert');
var urlAppend = require('../');

describe('url-append node module', function () {

  it('should append the query string to a url without existing params', function () {
    var result = urlAppend('http://www.example.com', 'a=b&c=d');
    assert.equal(result, 'http://www.example.com?a=b&c=d');
  });

  it('should append the query string to a url with existing params', function () {
    var result = urlAppend('http://www.example.com?existing=true', 'a=b&c=d');
    assert.equal(result, 'http://www.example.com?existing=true&a=b&c=d');
  });

  it('should Stringify the Query-Object and append the query string to a url without existing params', function () {
    var result = urlAppend('http://www.example.com', {a: 'b', c: 'd'});
    assert.equal(result, 'http://www.example.com?a=b&c=d');
  });

  it('should Stringify the Query-Object and append the query string to a url with existing params', function () {
    var result = urlAppend('http://www.example.com?existing=true', {a: 'b', c: 'd'});
    assert.equal(result, 'http://www.example.com?existing=true&a=b&c=d');
  });

  it('should just return the given url query-params are undefined', function () {
    var result = urlAppend('http://www.example.com');
    assert.equal(result, 'http://www.example.com');
  });

  it('should just return the given url query-params are null', function () {
    var result = urlAppend('http://www.example.com', null);
        assert.equal(result, 'http://www.example.com');
  });

  it('should strip leading ampersand from query-params', function () {
    var result = urlAppend('http://www.example.com', '&a=b&c=d');
    assert.equal(result, 'http://www.example.com?a=b&c=d');
  });

  it('should strip leading questionmark from query-params', function () {
    var result = urlAppend('http://www.example.com', '&a=b&c=d');
    assert.equal(result, 'http://www.example.com?a=b&c=d');
  });

});
