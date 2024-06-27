export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name;

    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length;

    if (!Array.isArray(students)) {
      throw new TypeError('students must be an array');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = newStudents;
  }
}
