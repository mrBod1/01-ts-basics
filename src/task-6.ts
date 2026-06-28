

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

const number = getFirstElement([1, 2, 3]);           // 1
const string = getFirstElement(["a", "b", "c"]);     // "a"
const boolean = getFirstElement([true, false, true]); // true
