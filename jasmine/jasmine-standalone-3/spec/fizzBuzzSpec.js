describe('FizzBuzz', function() {

  var fizbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  describe('multiples of 15', function(){
    it('fizzbuzzes for 15', function(){
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz');
    });
    it('fizzbuzzes for 30', function(){
      expect(fizzbuzz.play(30)).toEqual('FizzBuzz');
    });
    it('fizzbuzzes for 45', function(){
      expect(fizzbuzz.play(45)).toEqual('FizzBuzz');
    });
  });

  describe('multiples of 3', function(){
    it('fizzes for 3', function() {
      expect(fizzbuzz.play(3)).toEqual('Fizz');
    });
    it('fizzes for 6', function() {
      expect(fizzbuzz.play(6)).toEqual('Fizz');
    });
    it('fizzes for 9', function() {
      expect(fizzbuzz.play(9)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function(){
    it('fizzes for 5', function() {
      expect(fizzbuzz.play(5)).toEqual('Buzz');
    });
    it('fizzes for 10', function() {
      expect(fizzbuzz.play(10)).toEqual('Buzz');
    });
    it('fizzes for 20', function() {
      expect(fizzbuzz.play(20)).toEqual('Buzz');
    });
  });

  describe('any other number', function(){
    it('any other number returns a number', function(){
      expect(fizzbuzz.play(1)).toEqual(1);
    });
    it('any other number returns a number', function(){
      expect(fizzbuzz.play(11)).toEqual(11);
    });
  })
});
