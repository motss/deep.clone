# deep.clone

> Simple package to deeply clone any objects with nested objects.

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]
[![codecov][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

<!--[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]-->

## Install

```sh
$ npm install --save deep.clone
```

## Usage

Brief example to show how to use:

```js
const deepClone = require('deep.clone');

const a = { a: { b: { c: [ 1, 2,3 ] }, e: [ { f: null } ] }, d: 'deep' };

const b = deepClone(a);
```

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng


[npm-image]: https://badge.fury.io/js/deep.clone.svg
[npm-url]: https://npmjs.org/package/deep.clone
[travis-image]: https://travis-ci.org/motss/deep.clone.svg?branch=master
[travis-url]: https://travis-ci.org/motss/deep.clone
[daviddm-image]: https://david-dm.org/motss/deep.clone.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/motss/deep.clone
[coveralls-image]: https://coveralls.io/repos/github/motss/deep.clone/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/motss/deep.clone?branch=master
[snyk-image]: https://snyk.io/test/github/motss/deep.clone/badge.svg
[snyk-url]: https://snyk.io/test/github/motss/deep.clone
[codecov-image]: https://codecov.io/gh/motss/deep.clone/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/motss/deep.clone

<!--[greenkeeper-image]: https://badges.greenkeeper.io/motss/deep.clone.svg-->
<!--[greenkeeper-url]: https://greenkeeper.io/-->
