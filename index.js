// Write your solution in this file!
driver={ key:'value'}
function updateDriverWithKeyAndValue(driver,key,value) {
  const newDriver = { ...driver };

  newDriver[key] = value;

  return newDriver}
