function FizzBuzz() {
};

FizzBuzz.prototype.printNum = function() {
  return("1,2,3,4,5,6,7,8,9,10");
};

FizzBuzz.prototype.play = function(number) {
  if (number % 15 === 0) {
    return("FizzBuzz");
  } else if (number % 3 === 0) {
    return("Fizz");
  } else if (number % 5 === 0) {
    return("Buzz");
  };
};
