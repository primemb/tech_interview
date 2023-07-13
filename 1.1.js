// Write a function which takes array of numbers and a function which will be called on each item and return the newly created array,in two ways : Declaritive and Imperative

// Imperative
const _array = [4, 3, 7, 8, 9, 0];

function map(array, fn) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(fn(array[i]));
  }
  return result;
}

function applyFunctionDeclarative(array, func) {
  return array.map(func);
}
