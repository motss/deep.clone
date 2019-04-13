<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">deep.clone</h1>

  <p>Simple and fast deep cloning</p>
</div>

<hr />

[![Follow me][follow-me-badge]][follow-me-url]

[![Version][version-badge]][version-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![CircleCI][circleci-badge]][circleci-url]
[![Dependency Status][daviddm-badge]][daviddm-url]
[![codecov][codecov-badge]][codecov-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> A simple NPM package to do simple and fast deep cloning with `JSON.parse` + `JSON.stringify`.

## Table of contents <!-- omit in toc -->

- [Pre-requisite](#pre-requisite)
- [How to use](#how-to-use)
  - [Multiple bundles](#multiple-bundles)
  - [NPM](#npm)
    - [Installation](#installation)
    - [Node.js](#nodejs)
    - [Native ES Modules or Typescript](#native-es-modules-or-typescript)
  - [deno](#deno)
- [API Reference](#api-reference)
  - [deepClone&lt;T&gt;(target[, options])](#deepclonelttgttarget-options)
  - [deepCloneSync(target[, options])](#deepclonesynctarget-options)
- [License](#license)

## Pre-requisite

- [Node.js][node-js-url] >= 8.9.0
- [NPM][npm-url] >= 5.5.1 ([NPM][npm-url] comes with [Node.js][node-js-url] so there is no need to install separately.)

## How to use

### Multiple bundles

There are 3 different bundles for different use cases:

1. `esm` - Targeting native ES modules such as ES2015+ and [TypeScript][typescript-url].

    ```ts
    import { deepClone } from 'deep.clone';
    /** import { deepCloneSync } from 'deep.clone'; */
    ...
    ```

2. `cjs` - Targeting [Node.js][node-js-url] with `CommonJS`.

    ```ts
    const { deepClone } = require('deep.clone/dist/index.cjs.js');
    /** const { deepCloneSync } = require('deep.clone/dist/index.cjs.js'); */
    ...
    ```

3. `iife` - Targeting older browsers by compiling to `IIFE` and `ES5`.

    ```html
    <!--
      Say, you are using IIFE bundle on browsers such as IE11 by loading it via `unpkg` or `jsDelivr`.
    -->
    ...
    <head>
      <script src="https://unpkg.com/deep.clone@latest/dist/index.iife.js"></script>
      <!-- <script src="https://cdn.jsdelivr.net/npm/deep.clone@latest/dist/index.iife.min.js"></script> -->
    </head>
    ...
    <script>
      const { deepClone } = window.DeepClone;
      /** const { deepCloneSync } = window.DeepClone; */
    </script>
    ...
    ```

You can already grab the bundle from such as the follwoing awesome CDNs:

1. [unpkg][unpkg-url]

    - `esm` https://unpkg.com/deep.clone@latest/dist/index.js
    - `cjs` https://unpkg.com/deep.clone@latest/dist/index.cjs.js
    - `iife` https://unpkg.com/deep.clone@latest/dist/index.iife.js

2. [jsdelivr][jsdelivr-url]

    - `esm` https://cdn.jsdelivr.net/npm/deep.clone@latest/dist/index.js
    - `cjs` https://cdn.jsdelivr.net/npm/deep.clone@latest/dist/index.cjs.js
    - `iife` https://cdn.jsdelivr.net/npm/deep.clone@latest/dist/index.iife.js

### NPM

#### Installation

```sh
# Install via NPM
$ npm install --save deep.clone
```

#### Node.js

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

#### Native ES Modules or Typescript

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

### deno

See [deno module][deno-module-url].


## API Reference

### deepClone&lt;T&gt;(target[, options])

 - `target` <`any`> Target to be cloned.
 - `options` <?[Object][object-mdn-url]> Optionally set `absolute: true` for deep cloning complex objects that are not possible with `JSON.parse` + `JSON.stringify`.
   - `absolute` <[boolean][boolean-mdn-url]> If true, deep clone complex objects.
 - returns: <[Promise][promise-mdn-url]<`T`>> Promise which resolves with the deeply cloned target.

This method deeply clones a given target with `JSON.parse` + `JSON.stringify` asynchronously by default. Set `absolute: true` for deep cloning complex objects that contain [Date][date-mdn-url], [RegExp][regexp-mdn-url], [Function][function-mdn-url], etc.

### deepCloneSync(target[, options])

This methods works the same as `deepClone(target[, options])` except that this is the synchronous version.

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[node-js-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[node-releases-url]: https://nodejs.org/en/download/releases
[typescript-url]: https://github.com/Microsoft/TypeScript
[unpkg-url]: https://unpkg.com
[jsdelivr-url]: https://www.jsdelivr.com
[unpkg-url]: https://unpkg.com/deep.clone@latest/dist/
[deno-module-url]: https://github.com/motss/deep.clone/tree/deno

<!-- MDN -->
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[date-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[html-style-element-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

<!-- Badges -->
[follow-me-badge]: https://flat.badgen.net/twitter/follow/igarshmyb?icon=twitter

[version-badge]: https://flat.badgen.net/npm/v/deep.clone?icon=npm
[node-version-badge]: https://flat.badgen.net/npm/node/deep.clone
[mit-license-badge]: https://flat.badgen.net/npm/license/deep.clone

[downloads-badge]: https://flat.badgen.net/npm/dm/deep.clone
[total-downloads-badge]: https://flat.badgen.net/npm/dt/deep.clone?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/deep.clone
[bundlephobia-badge]:  https://flat.badgen.net/packagephobia/install/deep.clone

[circleci-badge]: https://flat.badgen.net/circleci/github/motss/deep.clone/master?icon=circleci
[daviddm-badge]: https://flat.badgen.net/david/dep/motss/deep.clone
[codecov-badge]: https://flat.badgen.net/codecov/c/github/motss/deep.clone?label=codecov&icon=codecov
[coveralls-badge]: https://flat.badgen.net/coveralls/c/github/motss/deep.clone?label=coveralls

[codacy-badge]: https://api.codacy.com/project/badge/Grade/c84a41b8422245058a8c1acd17fd7e23
[codebeat-badge]: https://codebeat.co/badges/8a0eb7c1-b944-41b1-ad87-5f0bd392873b
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[follow-me-url]: https://twitter.com/igarshmyb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/deep.clone

[version-url]: https://www.npmjs.com/package/deep.clone
[node-version-url]: https://nodejs.org/en/download
[mit-license-url]: https://github.com/motss/deep.clone/blob/master/LICENSE

[downloads-url]: http://www.npmtrends.com/deep.clone
[packagephobia-url]: https://packagephobia.now.sh/result?p=deep.clone
[bundlephobia-url]: https://bundlephobia.com/result?p=deep.clone

[circleci-url]: https://circleci.com/gh/motss/deep.clone/tree/master
[daviddm-url]: https://david-dm.org/motss/deep.clone
[codecov-url]: https://codecov.io/gh/motss/deep.clone
[coveralls-url]: https://coveralls.io/github/motss/deep.clone?branch=master

[codebeat-url]: https://codebeat.co/projects/github-com-motss-deep-clone-master
[codacy-url]: https://www.codacy.com/app/motss/deep.clone?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/deep.clone&amp;utm_campaign=Badge_Grade
[coc-url]: https://github.com/motss/deep.clone/blob/master/code-of-conduct.md
