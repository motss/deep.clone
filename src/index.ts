export interface DeepCloneOptions {
  absolute?: boolean;
}

import lodashCloneDeep from 'lodash.clonedeep';

export function deepCloneSync(
  target: any,
  options?: DeepCloneOptions
) {
  if (target == null) throw new TypeError(`'target' is not defined`);

  return options && options.absolute
    ? lodashCloneDeep(target)
    : JSON.parse(JSON.stringify(target));
}

export async function deepClone(
  target: any,
  options?: DeepCloneOptions
) {
  return deepCloneSync(target, options);
}

export default deepClone;
