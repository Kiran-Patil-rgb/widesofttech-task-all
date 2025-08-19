//reversed string//
console.log("___reversed string____")
let originalString = "student"; 
let reversedString = "";    
for (let i = originalString.length - 1; i >= 0; i--) { 
  reversedString += originalString[i]; 
}
console.log(reversedString); 

//regex literals//
console.log("___regex____")
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    return passwordRegex.test(password); 
}

let password1 = "StrongP@ss123";
console.log(`"${password1}" is valid: ${validatePassword(password1)}`);

let password2 = "weakpass";
console.log(`"${password2}" is valid invalid: ${validatePassword(password2)}`);

let password6 = "P@ssw0rd!";
console.log(`"${password6}" is valid: ${validatePassword(password6)}`);