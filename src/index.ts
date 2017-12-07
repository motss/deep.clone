// @ts-check

export declare interface DeepCloneOptions {
  absolute?: boolean;
}

/** Import project dependencies */
import * as lodashCloneDeep from 'lodash.clonedeep';

export function deepCloneSync(target: any, options?: DeepCloneOptions) {
  if (typeof target === 'undefined') {
    throw new TypeError('target is undefined');
  }

  if (typeof (options || {}).absolute === 'boolean' && options.absolute) {
    return lodashCloneDeep(target);
  }

  return JSON.parse(JSON.stringify(target));
}

export async function deepClone(target: any, options?: DeepCloneOptions) {
  try {
    return deepCloneSync(target, options);
  } catch (e) {
    throw e;
  }
}

export default deepClone;
