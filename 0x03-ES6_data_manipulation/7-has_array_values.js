export default function hasValuesFromArray(set, array) {
  const subset = new Set(array);

  const instersection = new Set([...subset].filter((x) => set.has(x)));

  if (instersection.size === subset.size) { return true; } return false;
}
