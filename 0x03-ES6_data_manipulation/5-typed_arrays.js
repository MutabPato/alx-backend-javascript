export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const int8View = new Int8Array(buffer);
  int8View[position] = value;

  return new DataView(buffer);
}
