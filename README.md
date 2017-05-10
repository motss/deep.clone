# deep.clone

[![NPM][nodei-image]][nodei-url]

> Simple package to deeply clone any objects with nested objects.

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Build status][appveyor-image]][appveyor-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Coverage percentage][coveralls-image]][coveralls-url]
[![codecov][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![NSP Status][nsp-image]][nsp-url]
[![Inline docs][inch-image]][inch-url]
[![GitHub license][license-image]][license-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

## Install

```
$ npm install --save deep.clone
```

## Usage

Deeply clone an object with nested objects with JS's primitives. This package aims to deeply clone simple nested target with JS's primitives which makes it much more performant and the caveat is that Function, RegExp, etc are not clonable. In order to deeply clone those complex types, the `absolute` flag is required.

```js
const deepClone = require('deep.clone');

const a = { a: { b: { c: [1, 2,3] }, e: [ { f: null } ] }, d: 'deep' };

const deepCloneA = deepClone(a);

const withComplexTypes = { a: () => {}, b: /test/gi, c: [1, 2], d: new Date(), e: { f: 111 } };

const deepCloneWithAbsolute = deepClone(withComplexTypes, { absolute: true });
```

## Demo

[Simple demo on runkit](https://runkit.com/motss/deep.clone)

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng


[nodei-image]: https://nodei.co/npm/deep.clone.png?downloads=true&downloadRank=true&stars=true
[nodei-url]: https://nodei.co/npm/deep.clone/
[npm-image]: https://badge.fury.io/js/deep.clone.svg
[npm-url]: https://npmjs.org/package/deep.clone
[travis-image]: https://travis-ci.org/motss/deep.clone.svg?branch=master
[travis-url]: https://travis-ci.org/motss/deep.clone
[appveyor-image]: https://ci.appveyor.com/api/projects/status/796r33kh1pmg8gcm/branch/master?svg=true
[appveyor-url]: https://ci.appveyor.com/project/motss/deep-clone/branch/master
[daviddm-image]: https://david-dm.org/motss/deep.clone.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/motss/deep.clone
[coveralls-image]: https://coveralls.io/repos/github/motss/deep.clone/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/motss/deep.clone?branch=master
[codecov-image]: https://codecov.io/gh/motss/deep.clone/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/motss/deep.clone
[snyk-image]: https://snyk.io/test/github/motss/deep.clone/badge.svg
[snyk-url]: https://snyk.io/test/github/motss/deep.clone
[nsp-image]: https://nodesecurity.io/orgs/motss/projects/a1c57ec8-9c17-4912-932b-f1ff6284e2ae/badge
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/a1c57ec8-9c17-4912-932b-f1ff6284e2ae
[inch-image]: http://inch-ci.org/github/motss/deep.clone.svg?branch=master
[inch-url]: http://inch-ci.org/github/motss/deep.clone
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://motss.mit-license.org/
[greenkeeper-image]: https://badges.greenkeeper.io/motss/deep.clone.svg
[greenkeeper-url]: https://greenkeeper.io/
