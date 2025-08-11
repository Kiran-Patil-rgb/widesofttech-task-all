 // find out which number is greater//
 //using logical opraters//
let a = 50;
 let b = 50;
 let c = 50;
 let d = 50;

let greatestNumber2;

  if ((a > b) && (a >c) && (a > d) ){
    greatestNumber2 = a;
 } else if( (b > a) &&( b > c) && (b > d) ){
     greatestNumber2 = b;
 } else if( (c >a) &&( c >b) &&( c >d)) {
    greatestNumber2 = c;

   }  else { 
  greatestNumber2 = d;
}
 
 console.log("The greatest number is: "+  greatestNumber2); 
 
//using if or else if//
let p = 50;
let q = 50;
let r = 50;
let s = 50;

let greatestNumber; 


if (p === q) { 
  if (q === r) { 
    if (r === s) { 
      console.log("All numbers are equal."); 
    } else {

      if (q > s) {
        greatestNumber = q; 
      } else {
          greatestNumber = s; 
      }
      console.log("The greatest number is: " + greatestNumber);
    }
  } else { 
      
      if (q > r) {
          if (q > s) {
              greatestNumber = q;
          } else {
              greatestNumber = s; 
          }
               
      } else {
          if (r > s) {
              greatestNumber = r; 
          } else {
              greatestNumber = s; 
          }
      }
      console.log("The greatest number is: " + greatestNumber);
    }
}
 




