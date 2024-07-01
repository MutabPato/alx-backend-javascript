export default function getStudentIdsSum(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  const arrIds = arr.map((obj) => obj.id);
  return arrIds.reduce((total, num) => total + num, 0);
}
