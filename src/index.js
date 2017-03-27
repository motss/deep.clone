class DeepClone {
  static init (target = (() => {
    throw new TypeError('target can NOT be undefined');
  })(), options) {
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
