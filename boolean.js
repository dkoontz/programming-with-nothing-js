const TRUE = first => (second => first);
const FALSE = first => (second => second);

const toBoolean = fn => fn(true)(false);
const toNumericBoolean = fn => fn(1)(0);

console.log(toBoolean(FALSE));
console.log(toNumericBoolean(TRUE));
