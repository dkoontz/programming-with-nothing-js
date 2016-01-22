const TRUE = first => (second => first);
const FALSE = first => (second => second);

const IS_ZERO = numberFn => numberFn(x => FALSE)(TRUE);

const ZERO  = fn => (value => value);
const ONE   = fn => (value => fn(value));
const TWO   = fn => (value => fn(fn(value)));
const toBoolean = fn => fn(true)(false);

console.log(toBoolean(IS_ZERO(zero)));
console.log(toBoolean(IS_ZERO(one)));
console.log(toBoolean(IS_ZERO(two)));
