
// write a programm to find out leap years //
let leapyear = 2028;
let checked = false;
while (!checked){
    if(leapyear % 4 === 0){
        console.log("is a leap year");
    }  else{
    console.log("is not leap year");  
}
checked = true;
}

//repeats in every 4 years does not repeats every 100 years then will repeats every 400 years//

let year = 2025; 
 let find = false; 

while(!find) { 
  if (year % 4 === 0) { 
    if (year % 100 === 0) {
      if (year % 400 === 0) { 
        console.log("is a leap year");
         } else {
        console.log("is not a leap year");
      }
    } else { 
      console.log("is a leap year");
    }
  } else { 
    console.log("is not a leap year");
  }
 find = true; 
}
