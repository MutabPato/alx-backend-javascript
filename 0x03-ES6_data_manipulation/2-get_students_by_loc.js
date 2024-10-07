export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  const idsArray = students.filter((obj) => obj.location === city);
  return idsArray;
}
