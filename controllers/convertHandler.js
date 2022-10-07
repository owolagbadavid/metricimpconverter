const math = require('mathjs');

function ConvertHandler() {
  let units = ['km','mi','kg','lbs','l','gal'];
  let unitsSpell = ['kilometers', 'miles', 'kilograms', 'pounds', 'liters', 'gallons'] 
  this.getNum = function(input) {
    let result;
    if(input.replace('/', '').indexOf('/') !== -1){return 'invalid number'}
  if(/^[a-z]+/i.test(input)){return 1}
    result = input.replace(/[a-z]+$/i, '')

    try {
      result = math.evaluate(result);
    } catch (error) {
      return 'invalid number';
    }
    return result; 
  };
  
  this.getUnit = function(input) {
    let result;
    if(!/[a-z]+$/i.test(input)){return 'invalid unit'}
    result = input.match(/[a-z]+$/i)
    let output = units.indexOf(result[0].toLowerCase()) !== -1 ? result[0].toLowerCase() : 'invalid unit';
    if(output === 'l'){return output.toUpperCase()}
    return output;
  };

  
  this.getReturnUnit = function(initUnit) {
    let index = units.indexOf(initUnit.toLowerCase());
    let output = index%2 === 0 ? units[index+1] : units[index-1];
    if(output === 'l'){return output.toUpperCase()}
    return output;
  };

  this.spellOutUnit = function(unit) {
    let index = units.indexOf(unit.toLowerCase());
    return unitsSpell[index];    
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit.toLowerCase()){
      case 'gal': result = initNum*galToL;
        break;
      case 'l': result = initNum/galToL;
        break;
      case 'lbs': result = initNum*lbsToKg;
        break;
      case 'kg': result = initNum/lbsToKg;
        break;
      case 'mi': result = initNum*miToKm;
        break;
      case 'km': result = initNum/miToKm;
        break;  
    }
    return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
