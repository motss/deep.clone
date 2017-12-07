<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">deep.clone</h1>

  <p>Simple and fast deep cloning</p>
</div>

<hr />

[![NPM][nodei-badge]][nodei-url]

[![Build Status][travis-badge]][travis-url]
[![Version][version-badge]][version-url]
[![Downloads][downloads-badge]][downloads-url]
[![MIT License][mit-license-badge]][mit-license-url]
[![NSP Status][nsp-badge]][nsp-url]
[![Dependency Status][daviddm-badge]][daviddm-url]

[![Code of Conduct][coc-badge]][coc-url]

<!-- [![Coverage percentage][coveralls-badge]][coveralls-url] -->
<!-- [![codecov][codecov-badge]][codecov-url] -->

<!-- [![Codacy Badge][codacy-badge]][codacy-url] -->
[![Inline docs][inch-badge]][inch-url]
<!-- [![codebeat badge][codebeat-badge]][codebeat-url] -->

[![Stories in Ready][waffle-badge]][waffle-url]

> A simple NPM package to do simple and fast deep cloning with `JSON.parse` + `JSON.stringify`

## Pre-requisite

- [Node.js][node-js-url] >= 8.9.0
- [NPM][npm-url] >= 5.5.1 ([NPM][npm-url] comes [Node.js][node-js-url] so there is no need to install separately.)

## Setup

### Install the package via NPM

```sh
# NPM install
$ npm install --save deep.clone
```

## How to use

### Typescript or Node.js with native ES Modules

Snippet for using native ES Modules:

```ts
/** Import project dependencies */
import deepClone from 'deep.clone';

/** Setting up */
const simpleObject = {
  a: {
    b: { c: [1, 2,3] },
    e: [ { f: null } ],
  },
  d: 'deep',
};
const complexObject = {
  a: () => {},
  b: /test/gi,
  c: [1, 2],
  d: new Date(),
  e: { f: 111 },
};

(async () => {
  const clonedSimpleObject = await deepClone(simpleObject);
  const clonedComplexObject = await deepClone(compleObject, {
    absolute: true,
  });
})();
```

### CommonJS's require

```js
/** Import project dependencies */
const { deepClone } = require('deep.clone');

/** Setting up */
const simpleObject = {
  a: {
    b: { c: [1, 2,3] },
    e: [ { f: null } ],
  },
  d: 'deep',
};
const complexObject = {
  a: () => {},
  b: /test/gi,
  c: [1, 2],
  d: new Date(),
  e: { f: 111 },
};

(async () => {
  const clonedSimpleObject = await deepClone(simpleObject);
  const clonedComplexObject = await deepClone(compleObject, {
    absolute: true,
  });
})();
```

## API Reference

### deepClone(target[, options])

 - target <`any`> Target to be cloned.
 - options <[Object][object-mdn-url]> Set `absolute: true` for deep cloning complex objects that are not possible with `JSON.parse` + `JSON.stringify`.
   - absolute <[boolean][boolean-mdn-url]> True if deep cloning complex objects.
 - returns: <[Promise][promise-mdn-url]<`any`>>

This method deeply clones a given target with `JSON.parse` + `JSON.stringify` asynchronously by default. Set `absolute: true` for deep cloning complex objects that contain [Date][date-mdn-url], [RegExp][regexp-mdn-url], [Function][function-mdn-url], etc.

### deepCloneSync(target[, options])

 - target <`any`> Target to be cloned.
 - options <[Object][object-mdn-url]> Set `absolute: true` for deep cloning complex objects that are not possible with `JSON.parse` + `JSON.stringify`.
   - absolute <[boolean][boolean-mdn-url]> True if deep cloning complex objects.
 - returns: <[Promise][promise-mdn-url]<`any`>>

This methods works the same as `deepClone(target[, options])` except that this is a synchronous version of `deepClone(target[, options])`.

## License

[MIT License](http://motss.mit-license.org/) © Rong Sen Ng

[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[date-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Glossary/Function



[nodei-badge]: https://nodei.co/npm/deep.clone.png?downloads=true&downloadRank=true&stars=true

[travis-badge]: https://img.shields.io/travis/motss/deep.clone.svg?style=flat-square

[version-badge]: https://img.shields.io/npm/v/deep.clone.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dm/deep.clone.svg?style=flat-square
[mit-license-badge]: https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square
[nsp-badge]: https://nodesecurity.io/orgs/motss/projects/92a9a3b3-c0c8-4172-917d-f1c7e0d5ef9f/badge
[daviddm-badge]: https://img.shields.io/david/expressjs/express.svg?style=flat-square

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square

[coveralls-badge]: https://coveralls.io/repos/github/motss/deep.clone/badge.svg?branch=master
[codecov-badge]: https://codecov.io/gh/motss/deep.clone/branch/master/graph/badge.svg

[codacy-badge]: https://api.codacy.com/project/badge/Grade/c84a41b8422245058a8c1acd17fd7e23
[inch-badge]: http://inch-ci.org/github/motss/deep.clone.svg?branch=master
[codebeat-badge]: https://codebeat.co/badges/8a0eb7c1-b944-41b1-ad87-5f0bd392873b

[waffle-badge]: https://badge.waffle.io/motss/deep.clone.png?label=ready&title=Ready



[nodei-url]: https://nodei.co/npm/deep.clone/

[travis-url]: https://travis-ci.org/motss/deep.clone
[version-url]: https://npmjs.org/package/deep.clone
[downloads-url]: http://www.npmtrends.com/deep.clone
[mit-license-url]: https://github.com/motss/deep.clone/blob/master/LICENSE
[nsp-url]: https://nodesecurity.io/orgs/motss/projects/a1c57ec8-9c17-4912-932b-f1ff6284e2ae
[daviddm-url]: https://david-dm.org/motss/deep.clone

[coc-url]: https://github.com/motss/deep.clone/blob/master/CODE_OF_CONDUCT.md

<!-- [coveralls-url]: https://coveralls.io/github/motss/deep.clone?branch=master
[codecov-url]: https://codecov.io/gh/motss/deep.clone -->

[inch-url]: http://inch-ci.org/github/motss/deep.clone

[waffle-url]: https://waffle.io/motss/deep.clone?utm_source=badge
