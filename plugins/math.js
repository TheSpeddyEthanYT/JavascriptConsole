function sum(x, y){
    return x+y
 }
 
 function subtract(x, y){
    return x-y
 }
 
 function multiply(x, y){
    return x*y
 }
 
 function divide(x, y){
    return x/y
 }
 
 function RandomInRange(x, y) {
    return Math.round(Math.random() * (y -  x) + x);
 }

 module.exports = { sum, subtract, multiply, divide, RandomInRange }