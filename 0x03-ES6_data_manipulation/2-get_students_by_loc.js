export default function getStudentsByLocationr(arr, city) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  return arr.filter((obj) => obj.location === city);
}
