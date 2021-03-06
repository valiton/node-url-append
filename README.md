#  [![NPM version][npm-image]][npm-url] ![url-append](https://api.travis-ci.org/valiton/node-url-append.png "url-append") [![Dependency Status](https://david-dm.org/valiton/node-url-append.svg)](https://david-dm.org/valiton/node-url-append)

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
