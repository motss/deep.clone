# deep.clone

> Simple package to deeply clone any objects with nested objects.

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]
[![codecov][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![NSP Status][nsp-image]][nsp-url]
[![GitHub license][license-image]][license-url]

<!--[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]-->

## Install

```
$ npm install --save deep.clone
```

## Usage

Deeply clone an object with nested objects with JS's primitives. This package aims to deeply clone simple nested target with JS's primitives which makes it much more performant and the caveat is that Function, RegExp, etc are not clonable. In order to deep clone for those complex types, the `absolute` flag msut be specified.

```js
const deepClone = require('deep.clone');

const a = { a: { b: { c: [1, 2,3] }, e: [ { f: null } ] }, d: 'deep' };

const deepCloneA = deepClone(a);

const withComplexTypes = { a: () => {}, b: /test/gi, c: [1, 2], d: new Date(), e: { f: 111 } };

const deepCloneWithAbsolute = deepClone(withComplexTypes, { absolute: true });
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
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://motss.mit-license.org/
[nsp-image]: https://nodesecurity.io/orgs/motss/projects/a1c57ec8-9c17-4912-932b-f1ff6284e2ae/badge
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/a1c57ec8-9c17-4912-932b-f1ff6284e2ae

<!--[greenkeeper-image]: https://badges.greenkeeper.io/motss/deep.clone.svg-->
<!--[greenkeeper-url]: https://greenkeeper.io/-->
