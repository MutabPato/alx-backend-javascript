export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const result = [];

  set.forEach((string) => {
    if (string.startsWith(startString)) {
      result.push(string.slice(startString.length));
    }
  });
  return result.join('-');
}
