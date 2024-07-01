export default function getListStudentsIds(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  return arr.map((obj) => obj.id);
}
