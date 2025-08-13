//find is leap or not//
console.log("______is leap year or not______")
let leapyear = 2015
if(leapyear % 100 == 0){
  if(leapyear % 400 == 0){
    console.log(leapyear +" is a leap year")
  }else{
    console.log(leapyear + " is not a leap year")
  }
}else if(leapyear % 4 == 0){
  console.log(leapyear +" is a leap year")
}else{
  console.log(leapyear +" is not a leap year")
}

//using logical operater//
console.log("______is leap year or not using logical opraters_______")
let year = 2012
if(((year % 100 !=0) && (year % 4 == 0)) || (year % 400 == 0)){
  console.log(year +" is a leap year")
}else{
  console.log(year +" is not a leap year")
}

//range of leap year //
console.log("______range of leap years______")
let start = 1500
let end = 2025
let count = 0
while (start <= end){
  let year = start
  if(year % 100 == 0){
    if(year % 400 == 0){
      count++
      console.log(year)
    }
  }else if(year % 4 == 0){
    count++
    console.log(year)
  }
  start++
}
console.log("above are the range of a leapyear starting from 1500 to 2025")

// find next leap year//
console.log("______ next leap year from given year______")
let current_year = 2025

let next_leap_year = current_year

let willLoopRun = true

while(willLoopRun){
    next_leap_year++
    let year = next_leap_year
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            willLoopRun = false
        }
    } else if (year % 4 == 0) {
        willLoopRun = false    
    }
}

console.log(next_leap_year)
