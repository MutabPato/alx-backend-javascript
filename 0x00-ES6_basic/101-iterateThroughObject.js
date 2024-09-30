export default function iterateThroughObject(reportWithIterator) {
  const employeesNamesArray = [];

  for (const employee of reportWithIterator) {
    employeesNamesArray.push(employee);
  }
  return employeesNamesArray.join(' | ');
}
