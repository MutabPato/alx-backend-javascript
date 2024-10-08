export default function updateUniqueItems(updateMap) {
  if (!(updateMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  updateMap.forEach((value, key) => {
    if (value === 1) {
      updateMap.set(key, 100);
    }
  });
  return updateMap;
}
