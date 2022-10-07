const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
suite('function convertHandler.getNum()', function(){
  
test('should correctly read a whole number input', function(done){
  assert.equal(convertHandler.getNum('1kg'), 1);
  assert.equal(convertHandler.getNum('12km'), 12);
  assert.equal(convertHandler.getNum('476gal'), 476);
  assert.equal(convertHandler.getNum('900mi'), 900);
  done();
});
test('should correctly read a decimal number input', function(done){
  assert.equal(convertHandler.getNum('1.3kg'), 1.3);
  assert.equal(convertHandler.getNum('12.6lbs'), 12.6);
  assert.equal(convertHandler.getNum('3.43L'), 3.43);
  assert.equal(convertHandler.getNum('12.543km'), 12.543);
  done();
});
test('should correctly read a fractional input', function(done){
  assert.equal(convertHandler.getNum('1/2kg'), 0.5);
  assert.equal(convertHandler.getNum('1/5kg'), 0.2);
done();
});
test('should correctly read a fractional input with a decimal', function(done){
  
  assert.equal(convertHandler.getNum('2.5/10kg'),0.25);
  assert.equal(convertHandler.getNum('1.3/10kg'),0.13);
  done();
});
test('should correctly default to a numerical input of 1 when no numerical input is provided', function(done){
  assert.equal(convertHandler.getNum('kg'),1);
  assert.equal(convertHandler.getNum('l'),1);
 done(); 
});
  test('incorrect fraction', function(done){
    assert.equal(convertHandler.getNum('1/1/2kg'), "invalid number");
    assert.equal(convertHandler.getNum('/1/2kg'), "invalid number");
    done();
  })
});

   suite('function convertHandler.getUnit()', function(){   

test('should correctly read each valid input unit', function(done){
  assert.equal(convertHandler.getUnit('10l'),'L')
  assert.equal(convertHandler.getUnit('10kg'),'kg');
done();
});
   
   test('should correctly return an error for an invalid input unit', function(done){
  assert.equal(convertHandler.getUnit('10kgb'),'invalid unit');
     assert.equal(convertHandler.getUnit('10mls'),'invalid unit');
     done();
});
});

  suite('function convertHandler.getReturnUnit()', function(){
test('should return the correct return unit for each valid input unit', function(done){
  assert.equal(convertHandler.getReturnUnit('kg'),'lbs');
  assert.equal(convertHandler.getReturnUnit('km'),'mi');
  assert.equal(convertHandler.getReturnUnit('gal'),'L');
  done();
});
  });

  suite('function convertHandler.spellOutUnit()', function(){
test('should correctly return the spelled-out string unit for each valid input unit', function(done){
  assert.equal(convertHandler.spellOutUnit('kg'),'kilograms');
  assert.equal(convertHandler.spellOutUnit('mi'),'miles');
  assert.equal(convertHandler.spellOutUnit('lbs'),'pounds');
done();
}); 
  });

  suite('function convertHandler.convert()', function(){
test('should correctly convert gal to L', function(done){
  assert.equal(convertHandler.convert(10,'gal'),37.85410);
  assert.equal(convertHandler.convert(17,'gal'),64.35197);
  done();
});
test('should correctly convert L to gal', function(done){
  assert.equal(convertHandler.convert(10,'l'),2.64172);
  assert.equal(convertHandler.convert(87,'L'),22.98298);
  done();
});
test('should correctly convert mi to km', function(done){
  assert.equal(convertHandler.convert(10,'mi'),16.09340);
  assert.equal(convertHandler.convert(12,'mi'),19.31208);
  done();
});
test('should correctly convert km to mi', function(done){
  assert.equal(convertHandler.convert(10,'km'),6.21373);
  assert.equal(convertHandler.convert(127,'km'),78.91434);
  done();
});
test('should correctly convert lbs to kg', function(done){
  assert.equal(convertHandler.convert(10,'lbs'),4.53592);
  assert.equal(convertHandler.convert(344,'lbs'),156.03565);
  done();
});
test('should correctly convert kg to lbs', function(done){
  assert.equal(convertHandler.convert(10,'kg'),22.04624);
  assert.equal(convertHandler.convert(1,'kg'),2.20462);
  done();
});
    
  });
});

