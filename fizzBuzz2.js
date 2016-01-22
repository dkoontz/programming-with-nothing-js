const R = require ('ramda');

function fizzBuzz(nums)
{
  return nums.map(n =>
    {
      if (n % 15 == 0) { return "FizzBuzz"; }
      else if (n % 5 == 0) { return "Buzz"; }
      else if (n % 3 == 0) { return "Fizz"; }
      else { return n; }
    });
}

console.log(fizzBuzz(R.range(1,101)));
