export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const idsSum = students.reduce((sum, obj) => sum + obj.id, 0);
  return idsSum;
}
