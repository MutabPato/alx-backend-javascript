export default function guardrail(mathFunction) {
  const queue = [];

  try {
    mathFunction();
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
