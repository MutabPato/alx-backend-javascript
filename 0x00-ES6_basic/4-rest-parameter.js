export default function returnHowManyArguments(...params) {
  const paramsArray = [...params];
  return paramsArray.length;
}
