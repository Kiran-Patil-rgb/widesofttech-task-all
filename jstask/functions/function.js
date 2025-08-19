// even numbers using function//
console.log("____even numbers___")
function check_even(){
    for (let num = 0; num <= 15; num++) {
        if(num % 2 == 0){
            console.log(num);
        }
    }
}
check_even();

//odd numbers using function//
console.log("____odd numbers____")
function check_odd(){
    for(let num2 = 0; num2<=10; num2++){
        if( num2 !== 0){
            console.log(num2);
        }
    }
}
check_odd();

 //factorial using function //
 console.log("____factorial number____")
 function factorial(number){
    let fact =1
    while(number != 0){
        fact = fact * number
        number--
    }
    return fact
 }
 console.log(factorial(1))
  console.log(factorial(2))
   console.log(factorial(3))
    console.log(factorial(4))
     console.log(factorial(5))

     //factorial of even numbers //
     console.log("_____factorial of even number____")
     function calculateEvenFactorials(start, end) {
  console.log(`Factorials of even numbers between ${start} and ${end}:`);

  for (let currNumber = start; currNumber <= end; currNumber++) { 
    if (currNumber % 2 === 0) { 
      let factorial = 1;

      
      if (currNumber < 0) {
        console.log(`Factorial for negative number ${currNumber} is not defined.`);
        continue; 
      } else if (currNumber === 0 || currNumber === 1) { 
        factorial = 1;
      } else {
        for (let i = 2; i <= currNumber; i++) { 
          factorial *= i;
        }
      }
      console.log(`The factorial of ${currNumber} is: ${factorial}`); //
    }
  }
}

calculateEvenFactorials(1, 10);


//leap year using function//
console.log("____leap year___")
function isleapyear(year){
    if(year % 400 === 0){
        return true;
    }else if(year % 100 === 0){
        return false;
    }else if(year % 4 === 0){
        return true;
    }else {
        return false;
    }
}
let startyear = 2000;
let endyear = 2006;
for(let year = startyear; year <=endyear; year++){
    if(isleapyear(year)){
        console.log(year + "is leap year");
    }else{
        console.log(year + "is not a leap year");
    }

}
//find next leap year using function//
console.log("____next leap year____")
function isleapyear(year){
    if(year % 400 === 0){
        return true;
    }else if(year % 100 === 0 ){
        return false;
    }else if(year % 4 === 0){
        return true;
    }else {
        return false;
    }
}
function nextleapyear(currentyear){
    let nextleapyear = 0;
    let year = currentyear +1;
    while(nextleapyear === 0){
        if(isleapyear(year)){
            nextleapyear = year;
        }year++;
    }
    return nextleapyear;
}
let currentyear = 2025;
const findnextleapyear = nextleapyear(currentyear);
console.log(`the current year is ${currentyear} and next leap year is ${findnextleapyear}`);

//palindrome using function //
console.log("_____palindrome number____")
function palindrome(palin_number){
    let org_number = palin_number;
    let rev = 0;
    let d= 0;
    while( palin_number > 0){
        d= palin_number % 10;
        rev = rev * 10 + d;
        palin_number = parseInt(palin_number / 10);
    }
    if( org_number === rev){
        return true;
    }else{
        return false;
    }
}
let number = 232;
if(palindrome(number)){
    console.log(`the number ${number} is a plaindrome number`);
}else{
    console.log(`the number ${number}is not palindrome number`);
}
//arithmetic  add operater using function /
console.log("___arithmetic oprater___")
function add(num1 , num2){
    let sum = num1 + num2;
    return sum;
}

let num1 = 36;
let num2 = 47;
let totalsum = add(num1,num2);
console.log(`the addition of ${num1}  and ${num2} is : ${totalsum}`)

//arithmetic  sub  operater using function /
function add(num3 , num4){
    let sum = num3 - num4;
    return sum;
}
let num3 = 36;
let num4 = 47;
let totalcal = add(num3,num4);
console.log(`the subtraction of ${num3}  and ${num4} is : ${totalcal}`)

//arithmetic  multiply  operater using function /
function add(num5 , num6){
    let sum = num5 * num6;
    return sum;
}
let num5 = 36;
let num6 = 47;
let totalmult = add(num5,num6);
console.log(`the multiplication of ${num5}  and ${num6} is : ${totalmult}`)

//arithmetic  multiply  operater using function /
function add(num7 , num8){
    let sum = num7 / num8;
    return sum;
}
let num7 = 14;
let num8 = 4;
let totaldiv = add(num7,num8);
console.log(`the divsion of ${num7}  and ${num8} is : ${totalmult}`)

//arithmetic  multiply  operater using function /
function add(num9 , num){
    let sum = num9 / num;
    return sum;
}
let num9 = 14;
let num = 4;
let totalmod = add(num9,num);
console.log(`the mod of ${num9}  and ${num} is : ${totalmod}`)

//revserd string using function//
function revAstring(orgstring){
    let revstring = "";
    for (let i = orgstring.length -1; i>=0; i--){
        revstring += orgstring[i];
    }
    return revstring;
}
let mystring = "student";
let revresult = revAstring(mystring);
console.log(revresult);

//greater no using function//
console.log("____greater no____")
function findGreaterNumber(a, b, c, d, e) {
  let greaternumber;

  if (a > b && a > c && a > d && a > e) {
    greaternumber = a;
  } else if (b > c && b > d && b > e) {
    greaternumber = b;
  } else if (c > d && c > e) {
    greaternumber = c;
  } else if (d > e) {
    greaternumber = d;
  } else {
    greaternumber = e;
    }

  console.log("the greater number is  d :" +  greaternumber);
}
findGreaterNumber(16, 20, 15, 26, 30);

//negative / positive  using function/
console.log("____neg / post____")
function checkNumberType(number) {
  if (number > 0) {
    console.log(" 10: Number is positive"); 
  } else if (number < 0) {
    console.log("-6: Number is negative"); 
  } else {
    console.log("0: Number is zero"); 
  }
}
checkNumberType(10);  
checkNumberType(-6);  
checkNumberType(0);   