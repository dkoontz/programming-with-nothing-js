const TRUE = first => (second => first);
const FALSE = first => (second => second);

const IF = predicate => (ifTrue => (ifFalse => predicate(ifTrue)(ifFalse)));

const ZERO  = fn => (value => value);
const ONE   = fn => (value => fn(value));
const TWO   = fn => (value => fn(fn(fn(fn(value)))));
const toNumber = (countFn) => countFn(n => n + 1, 0);

console.log(toNumber(IF(TRUE)(four)(one)));
console.log(toNumber(IF(FALSE)(four)(one)));
