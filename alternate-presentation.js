// Utility stuff ///////////////////////
const output = console.log.bind(this)
const run = code =>
    output(`${code}: ${eval(code)}\n----------------------------------\n`)
////////////////////////////////////////

// Lambda Calculus was devised to answer the question of the Entscheidungs problem aka the halting problem
// Turing machines, Lambda Calculus, and SK(I) calculus were all devised and shown to be equivalent
// for this purpose. None were devised as actual computational systems since computers did not yet exist.

// Naturally it would follow that all major programming languages are based one of these 3 systems

// ===========================================================
// PART 1, putting the fun in functions 
// ===========================================================

// There are 2 interesting things we can do in Lambda Calculus (binding a value to a name is the 3rd)

// Declare a function
// λx.x
const ID = x => x

// λx.x+1
const increment = x => x + 1
// values such as 1, 5, etc. we're going to accept just exist for now
// increment is written in lower-case becasue it involves something that's not part of the lambda calculus

// Apply a function to an argument
// λx.x 5
run('ID(5)')

// λx.x+1 5
run('increment(5)')

// Apply a function to an argument
const APPLY = f => x => f(x)

run('APPLY(increment)(5)')
// f => x => f(x)
// increment => 5 => increment(5)
// increment(5)
// 6

const SELF_APPLY = s => s(s)

run('SELF_APPLY(ID)')
// s => s(s)
// ID => ID(ID)
// ID(ID)
// ID

run('SELF_APPLY(output)')
// s => s(s)
// output(output)
// undefined

const FIRST = first => second => first

run('FIRST("hello")("goodbye")')

const SECOND = first => second => second
run('SECOND("hello")("goodbye")')

const altSECOND = first => ID
run('altSECOND("hello")("goodbye")')

// ==========================================
// PART 2, data =============================
// ==========================================

const MAKE_PAIR = a => b => func => func(a)(b)

const numberPair = MAKE_PAIR(99)(-3)

run('numberPair(FIRST)')
// MAKE_PAIR(99)(-3)(FIRST)
// 99 => 3 => FIRST => FIRST(99, 3)

run('numberPair(SECOND)')
// // MAKE_PAIR(99)(-3)(SECOND)
// 99 => 3 => SECOND => SECOND(99, 3)

const ZERO = fn => value => value

run('ZERO(increment)(5)')
// increment => 5 => 5

run('ZERO(output)(5)')
// output => 5 => 5

const ONE = fn => value => fn(value)
run('ONE(increment)(5)')
// increment => 5 => increment(5)

run('ONE(output)(5)')
// output => 5 => output(5)

const TWO = fn => value => fn(fn(value))
run('TWO(increment)(5)')
// increment => 5 => increment(increment(5))

run('TWO(output)(5)')
// output => 5 => output(output(5))

const THREE = fn => value => fn(fn(fn(value)))
const FOUR = fn => value => fn(fn(fn(fn(value))))
const FIVE = fn => value => fn(fn(fn(fn(fn(value)))))

const FIFTEEN = fn => value => fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(value)))))))))))))))
const HUNDRED = fn => value => fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(
    fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(
        fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(
            fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(
                fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(fn(value)
                )))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))

const one = ONE(increment)(0)
run('one')

const two = TWO(increment)(0)
run('two')

const three = THREE(increment)(0)
run('three')

const toNumber = numberFn => numberFn(increment)(0)

run('toNumber(FIFTEEN)')
run('toNumber(HUNDRED)')

// ==========================================
// PART 3, decisions ========================
// ========================================== 

// look familiar?
const TRUE = first => second => first;
const FALSE = first => second => second;

const IF = predicate => ifTrue => ifFalse => predicate(ifTrue)(ifFalse)

run('IF(TRUE)(FIVE)(HUNDRED)')
// TRUE => FIVE => HUNDRED => TRUE(FIVE)(HUNDRED)
// FIVE => HUNDRED => FIVE

run('IF(FALSE)(FIVE)(HUNDRED)')
// TRUE => FIVE => HUNDRED => FALSE(FIVE)(HUNDRED)
// FIVE => HUNDRED => HUNDRED

run('toNumber(IF(FALSE)(FIVE)(HUNDRED))')

// ==========================================
// PART 4, maths ============================
// ==========================================

const INCREMENT = number => fn => value => fn(number(fn)(value))

const fiveIncremented = INCREMENT(FIVE)
// FIVE => fn => value => fn(FIVE(fn)(value))

run('toNumber(fiveIncremented)')
// FIVE => increment => 0 => increment(FIVE(increment)(0))

const ADD = a => b => b(INCREMENT)(a)

run('ADD(ONE)(FIVE)')

run('toNumber(ADD(ONE)(FIVE))')
run('toNumber(ADD(FIFTEEN)(HUNDRED))')


const DECREMENT = numberFn => f => value => numberFn(g => (h => h(g(f))))
    (y => value)
    (y => y)

const SUBTRACT = a => (b => b(DECREMENT)(a));

run('toNumber(SUBTRACT(FIVE)(TWO))')

const MULTIPLY = a => (b => b(ADD(a))(ZERO));

run('toNumber(MULTIPLY(FIVE)(ADD(FIFTEEN)(FIVE)))')
