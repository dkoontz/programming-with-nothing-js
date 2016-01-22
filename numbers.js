const ZERO  = fn => (value => value);
const ONE   = fn => (value => fn(value));
const TWO   = fn => (value => fn(fn(value)));
const THREE = fn => (value => fn(fn(fn(value))));
const FOUR  = fn => (value => fn(fn(fn(fn(value)))));
const FIVE  = fn => (value => fn(fn(fn(fn(fn(value))))));

const FIFTEEN = fn => (value => fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(value))))))))))))))));
const HUNDRED = fn => (value => fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(
                                fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(
                                fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(
                                fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(
                                fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(value)
                                ))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));

const toNumber = countFn => countFn(n => n + 1)(0);

console.log(toNumber(ZERO));
console.log(toNumber(ONE));
console.log(toNumber(TWO));
console.log(toNumber(THREE));
console.log(toNumber(FOUR));
console.log(toNumber(FIVE));
console.log(toNumber(FIFTEEN));
console.log(toNumber(HUNDRED));
