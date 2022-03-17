// BACKEND LOGIC - BUSINESS LOGIC
// calculation funtions
const sum = (num1,num2)=>num1+num2;
const subtract = (num1,num2)=>num1-num2;
const multiply = (num1,num2)=>num1*num2;
const divide = (num1,num2) =>num1/num2;

// FRONT END LOGIC - USER INTERFACE
// submit form
$(document).ready(function(){
  $("form#addNum").submit(function(event){
    event.preventDefault();    
    let add1 =parseInt(document.getElementById("add1").value);
    let add2 = parseInt(document.getElementById("add2").value);
    alert(sum(add1,add2));    
  })
})


// output the result
var result = sum(age1,age2);
alert(result);


