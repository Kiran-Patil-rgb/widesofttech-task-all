
//repeat all example from while loop using for loop//

// even numbers using for loop//
console.log("_______even numbers_________");
for(let num = 0; num <= 20; num++){
    if(num % 2 == 0)console.log(num)
}

//odd numbers using for loop//
console.log("_________odd numbers_________");
for(let num1 = 0; num1 <= 20; num1++){
    if(num1 % 2 == !0)console.log(num1)
}

// factorial number using loop//
console.log("________factorial number________")

 let end = 10;  
for (let start = 1; start <= end; start++) { 
   if (start % 2 === 0) {
        let number = start;
        let fact = 1;        
        for (let i = 1; i <= number; i++) { 
            fact = fact * i; 
        }
        console.log(`the factorial  number of ${start} is: ${fact}`); 
    }
}

//leap year using for loop//
console.log("____________ range of leap year__________");
let startyear = 2000;
let endyear = 2006;
for(let year = startyear; year <= endyear; year++){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log(year + " is a leap year ");
        }else{
            console.log(year + " is not a leap year ");
        }
    }else if(year % 4 == 0){
          console.log(year + " is a leap year");
    }else {
        console.log(year + " is not a leap year");
    }
}

// find  which is next leap from  a given year  using for loop//
console.log("_______next leap year_______")
let current_year = 2025;
let next_leap_year = 0; 
                        
for (let year = current_year + 1; next_leap_year === 0; year++) { 
   
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
           
            next_leap_year = year; 
        } else {
           
            if (year % 400 === 0) {
               
                next_leap_year = year; 
            } 
        }
    } 
}
console.log(`The next leap year after ${current_year} is ${next_leap_year}`); 

//check number is palindrome or not using for loop//
console.log("_______palindrome_______")
 let number = 232;
let org_number = number; 

let rev = 0;
let d = 0;
for (; number > 0; ) { 
    d = number % 10;          
    rev = rev * 10 + d;      
    number = parseInt(number / 10); 
}
console.log(rev);

if (org_number == rev) {
    console.log(org_number + " is palindrome !");
} else {
    console.log(org_number + " is not a palindrome !");
}