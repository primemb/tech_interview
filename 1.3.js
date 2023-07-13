const _array = [4, [[5], [6, [7], 8], 9, 10]];

function flatArray(array) {
  return array.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatArray(toFlatten) : toFlatten
    );
  }, []);
}
console.log(flatArray(_array));
