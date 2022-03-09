// BACKEND LOGIC - BUSINESS LOGIC
// sum funtion
var sum = (num1,num2)=>{
  return num1+num2;
}
// subtract function
var subtract = (num1,num2)=>{
  return num1-num2;
}
// multiplication function
var multiply = (num1,num2)=>{
  return num1*num2;
}
// division function
var divide = (num1,num2) =>{
  return num1/num2;
}

// FRONT END LOGIC - USER INTERFACE

// prompt user for numbers/input
var age1 = parseInt(prompt("How old is John? "));
var age2 = parseInt(prompt("How old is Mary? "));

// output the result
var result = sum(age1,age2);
alert(result);


