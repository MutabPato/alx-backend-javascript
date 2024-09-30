export default function createIteratorObject(report) {
  // Flattening the array of employees into a single array of employees
  const allEmployees = Object.values(report.allEmployees).flat();
  return allEmployees[Symbol.iterator](); // Returning an iterator
}
