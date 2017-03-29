const isRequired = require('./is-required');

/**
 * Constructor for the DeepClone object.
 * Deeply clone an object with nested objects with JS's primitives.
 * This package aims to deeply clone simple nested target with JS's primitives
 * which makes it much more performant and the caveat is that Function, RegExp, etc
 * are not clonable. In order to deep clone for those complex types, the `absolute`
 * flag msut be specified.
 *
 * @example
 * const deepClone = require('deep.clone');
 *
 * const a = { a: { b: { c: [ 1, 2,3 ] }, e: [ { f: null } ] }, d: 'deep' };
 *
 * const b = deepClone(a);
 *
 * @class DeepClone
 */
class DeepClone {
  /**
   * Deep clone an object with nested objects.
   *
   * @static
   * @param {string} target=DeepClone.isRequired('target') - Cloning target.
   * @param {any} [options] - Flag to deep clone all complex types.
   * @returns {any} Deeply clone object.
   *
   * @memberOf DeepClone
   */
  static init (target = isRequired('target'), options) {
    if (options && {}.hasOwnProperty.call(options, 'absolute')) {
      const lodashCloneDeep = require('lodash.clonedeep');

      return lodashCloneDeep(target);
    }

    if (target instanceof Object && !Array.isArray(target)) {
      return JSON.parse(JSON.stringify(target));
    } else {
      return JSON.parse(JSON.stringify({
        clone: target
      })).clone;
    }
  }
}

module.exports = DeepClone.init;
