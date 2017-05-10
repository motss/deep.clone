/**
 * Throw error on undefined required parameter.
 *
 * @static
 * @param {string} name - Name of the parameter that is undefined.
 * @throws {TypeError|Error} Throws a TypeError on non-string name or undefined parameter.
 *
 * @memberOf DeepClone
 */
function isRequired (name) {
  if (typeof name !== 'string') {
    throw new TypeError('name can ONLY be of type String');
  }

  throw new TypeError(`${name} can NOT be undefined`);
}

module.exports = isRequired;
