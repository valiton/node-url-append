#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> Append (additional) URL-Params to a given url


## Install

```sh
$ npm install --save url-append
```


## Usage

### With an Object
```js
var urlAppend = require('url-append');

urlAppend('http://www.example.com?param1=value1', {param2: 'value2', param3: 'value3'});
// results in http://www.example.com?param1=value1&param2=value2&param3=value3
```

### With a Querystring
```js
var urlAppend = require('url-append');

urlAppend('http://www.example.com?param1=param2', 'param2=value2&param3=value3');
// results in http://www.example.com?param1=value1&param2=value2&param3=value3
```

## Release History

- 0.1.0 Initial Release


## Contributors

- Bastian "hereandnow" Behrens

## License
Copyright (c) 2015 Valiton GmbH
Licensed under the MIT license.


[npm-image]: https://badge.fury.io/js/url-append.svg
[npm-url]: https://npmjs.org/package/url-append
[travis-image]: https://travis-ci.org/valiton/url-append.svg?branch=master
[travis-url]: https://travis-ci.org/valiton/url-append
[daviddm-image]: https://david-dm.org/valiton/url-append.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/valiton/url-append
