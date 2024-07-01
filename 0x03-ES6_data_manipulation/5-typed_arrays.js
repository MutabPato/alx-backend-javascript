export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const int8view = new Int8Array(buffer);

    int8view[position] = value;

    return buffer;
  } catch (error) {
    throw new Error('Position outside range');
  }
}
