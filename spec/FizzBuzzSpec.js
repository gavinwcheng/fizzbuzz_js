describe("FizzBuzz", function() {
  fb = new FizzBuzz();

  it("prints the numbers from 1 to 100", function() {
    expect(fb.printNum()).toEqual("1,2,3,4,5,6,7,8,9,10");
  });

  it("prints 'Fizz' if a number is divisble by 3", function() {
    expect(fb.play(3)).toEqual("Fizz");
    expect(fb.play(6)).toEqual("Fizz");
    expect(fb.play(4)).not.toEqual("Fizz");
  });

  it("prints 'Buzz' if a number is divisible by 5", function() {
    expect(fb.play(5)).toEqual("Buzz");
    expect(fb.play(10)).toEqual("Buzz");
  });

  it("prints 'FizzBuzz' if a number is divisible by both 3 and 5", function() {
    expect(fb.play(15)).toEqual("FizzBuzz");
  });
});
