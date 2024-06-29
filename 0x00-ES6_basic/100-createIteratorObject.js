export default function createIteratorObject(report) {
  const iterableEmployees = [];

  for (const employees of Object.values(report.allEmployees)) {
    iterableEmployees.push(...employees);
  }
  return iterableEmployees;
}
