'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

app.get('/api/convert', (req, res)=>{
  let input = req.query.input
  let errorMessage = 'invalid'
  let initNum = convertHandler.getNum(input)
  let initUnit = convertHandler.getUnit(input)
  if(initNum === "invalid number"){errorMessage += " number" }
  if(initUnit === "invalid unit"){
    if(initNum === "invalid number"){errorMessage += " and unit"}
    else{errorMessage += " unit"}
  }
  if(errorMessage.length > 8){return res.send(errorMessage)}
  let returnNum = convertHandler.convert(initNum, initUnit)
  let returnUnit = convertHandler.getReturnUnit(initUnit)
  let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)
return res.json({ initNum, initUnit, returnNum, returnUnit, string })
})  
  
};
