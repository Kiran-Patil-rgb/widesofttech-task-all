// make similar palindrome as of leap year using do while loop with program must not take a 0 or NaN as input//
let task = true; 

do {
    let userInput = window.prompt("Enter any number to check palindrome:"); 
    let num = Number(userInput);
    if (isNaN(num) || num === 0 || num < 0) {
        console.log("Please enter a valid positive number");
        task = window.confirm("Do you wish to continue (yes/no)?");
        continue;  
    }
let originalNum = num; 
    let rev = 0; 
 
    let tempNum = num; 
    while (tempNum > 0) {
        let remainder = tempNum % 10; 
        rev = rev * 10 + remainder; 
        tempNum = parseInt(tempNum / 10); 
    }
    if (originalNum === rev) { 
        console.log(`${originalNum} is a palindrome.`);
    } else {
        console.log(`${originalNum} is not a palindrome.`);
    }

    task = window.confirm("Do you wish to continue (yes/no)?");

} while (task); 

