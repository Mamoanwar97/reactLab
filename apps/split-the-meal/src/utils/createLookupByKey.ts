export function createLookupByKey<
  TObject extends Object,
  Tkey extends keyof TObject
>(objectArray: Array<TObject>, key: Tkey): Map<TObject[Tkey], TObject> {
  const lookupMap = new Map<TObject[Tkey], TObject>();

  objectArray.forEach((obj) => {
    lookupMap.set(obj[key], obj);
  });

  return lookupMap;
}
