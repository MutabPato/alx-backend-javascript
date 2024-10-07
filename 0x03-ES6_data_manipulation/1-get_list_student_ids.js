export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const idsArray = students.map((obj) => obj.id);
  return idsArray;
}
