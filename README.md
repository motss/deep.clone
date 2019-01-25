<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">deep.clone</h1>

  <p>Simple and fast deep cloning</p>
</div>

<hr />

[![Version][version-badge]][version-url]
[![Deno Version][deno-version-badge]][deno-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![jsDelivr downloads][jsdelivr-badge]][jsdelivr-url]

[![Build Status][travis-badge]][travis-url]

> Simple [deno][deno-url] library to deep clone objects with `JSON.parse` + `JSON.stringify`.

## Table of contents

<!-- TOC -->

- [Pre-requisite](#pre-requisite)
- [Usage](#usage)
- [API Reference](#api-reference)
  - [deepClone(target)](#deepclonetarget)
  - [deepCloneSync(target)](#deepclonesynctarget)
- [License](#license)

<!-- /TOC -->

## Pre-requisite

- [deno][deno-url] >= 0.2.6

## Usage

```ts
/** Import via denopkg */
import { deepClone } from 'https://denopkg.com/motss/deep.clone@v1.0.0-deno/index.ts';
/** Or, import via `jsdelivr` */
// import { deepClone } from 'https://www.jsdelivr.com/package/npm/deep.clone@1.0.0-deno/index.ts';

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

### deepClone(target)

- `target` <`any`> Target to be cloned.
- returns: <[Promise][promise-mdn-url]<`any`>> Promise which resolves with the deeply cloned target.

This method deeply clones a given target with `JSON.parse` + `JSON.stringify` asynchronously by default. Set `absolute: true` for deep cloning complex objects that contain [Date][date-mdn-url], [RegExp][regexp-mdn-url], [Function][function-mdn-url], etc.

### deepCloneSync(target)

This methods works the same as `deepClone(target)` except that this is the synchronous version.

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng

<!-- References -->
[deno-url]: https://github.com/denoland/deno

<!-- MDN -->
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[html-style-element-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[date-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Glossary/Function

<!-- Badges -->
[version-badge]: https://flat.badgen.net/badge/version/v1.0.0-deno/blue?icon=github
[deno-version-badge]: https://flat.badgen.net/badge/deno/v0.2.6/blue?icon=github
[mit-license-badge]: https://flat.badgen.net/npm/license/deep.clone

[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/deep.clone/badge

[travis-badge]: https://flat.badgen.net/travis/motss/deep.clone/master

<!-- Links -->
[version-url]: https://www.npmjs.com/package/deep.clone
[deno-version-url]: https://github.com/denoland/deno
[mit-license-url]: https://github.com/motss/deep.clone/blob/master/LICENSE

[jsdelivr-url]: https://www.jsdelivr.com/package/npm/deep.clone?version=1.0.0-deno

[travis-url]: https://travis-ci.org/motss/deep.clone
