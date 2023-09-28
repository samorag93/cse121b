/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value); 
    document.querySelector('#sum').value = add(addNumber1,addNumber2); 
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

function subtract (number1,number2){
    return number1 - number2;
}
function subtractNumbers(){
    let subtNumber1 = Number(document.querySelector('#subtract1').value);
    let subtNumber2 = Number(document.querySelector('#subtract2').value); 
    document.querySelector('#difference').value = subtract(subtNumber1,subtNumber2); 
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

 let multiply = (factor1, factor2) => factor1 * factor2;
 let multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyNumber1,multiplyNumber2);
 }
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */

let divide = function(dividend, divisor){
    return dividend / divisor;
}

let divideNumbers = function(){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor)
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

let currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector('#array').textContent = numbersArray.join(',');
/* Output Odds Only Array */
function oddsNumbers(array) {
    return array.filter(numero => numero % 2 === 1);
}
let oddNumbers = oddsNumbers(numbersArray)
document.querySelector('#odds').textContent = oddNumbers.join(',');
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number %2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((total, number) => total + number, 0);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map((x) => x * 2);
/* Output Sum of Multiplied by 2 Array */
let newArray = numbersArray.map(number =>  number * 2);
document.querySelector('#sumOfMultiplied').innerHTML = newArray.reduce((total, number) => total + number,0)