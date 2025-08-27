//try and catch//
function checkage(age){
    if(age !== `number` || age < 0){
        console.error("invalid age: age must be a non-negative number.")
    }
    if(age < 18){
        console.error("you must be at least 18 years old.")
    }
   return "age is valid"
}
try{
    let message = checkage(20)
    console.log(message)
}catch(e){
    console.log(`${e.message}`)
}finally{
    console.log("validation complete.")
}