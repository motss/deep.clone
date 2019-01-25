export function deepCloneSync(
  target: any
) {
  if (target == null) throw new TypeError(`'target' is not defined`);

  return JSON.parse(JSON.stringify(target));
}

export async function deepClone(
  target: any,
) {
  return deepCloneSync(target);
}

export default deepClone;
