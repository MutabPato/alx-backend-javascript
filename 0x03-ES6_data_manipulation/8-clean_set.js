export default function cleanSet(set, startString) {
  const result = [];

  if (!startString || startString.length === 0) {
    return '';
  }

  set.forEach((string) => {
    if (string.startsWith(startString)) {
      result.push(string.slice(startString.length));
    }
  });
  return result.join('-');
}
