const INCREMENT = numberFn => (f => (value => f(numberFn(f)(value))));
const DECREMENT = numberFn => (f => (value => numberFn(g => (h => h(g(f))))
                                                      (y => value)
                                                      (y => y)));
const ADD = a => (b => b(INCREMENT)(a));
const SUBTRACT = a => (b => b(DECREMENT)(a));
const MULTIPLY = a => (b => b(ADD(a))(ZERO));
const POWER = a => (b => b(MULTIPLY(a))(ONE));


const ZERO  = fn => (value => value);
const ONE   = fn => (value => fn(value));
const TWO   = fn => (value => fn(fn(value)));
const THREE = fn => (value => fn(fn(fn(value))));
const FOUR  = fn => (value => fn(fn(fn(fn(value)))));
const FIVE  = fn => (value => fn(fn(fn(fn(fn(value))))));

const toNumber = countFn => countFn(n => n + 1)(0);

console.log(toNumber(ADD(ZERO)(THREE)));
console.log(toNumber(ADD(FIVE)(THREE)));
console.log(toNumber(SUBTRACT(THREE)(THREE)));
console.log(toNumber(SUBTRACT(FIVE)(ONE)));
console.log(toNumber(MULTIPLY(FIVE)(THREE)));
console.log(toNumber(POWER(TWO)(FIVE)));
