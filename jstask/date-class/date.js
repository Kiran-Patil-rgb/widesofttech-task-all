//calucalte age, year and minutes//
function calculateAge(userDob){
  let dob = new Date(userDob);
  let currentDate = new Date();
  let diffrence = currentDate.getTime() - dob.getTime();
  totalMinutes = diffrence / (1000 * 60);
  let minutesInYear = 365.25 * 24 * 60;

  let year = Math.floor(totalMinutes / minutesInYear);
  totalMinutes %= minutesInYear;

  let minutesInDay = 24 * 60;
  let days = Math.floor(totalMinutes / minutesInDay);
  totalMinutes %= minutesInDay;

  let minutes = Math.floor(totalMinutes);
  return {
    years : year,
    days : days,
    minutes : minutes
  
};
}
let age = calculateAge(`2005-01-22`);
console.log(`${age.years} years, ${age.days} days,and ${age.minutes} minutes.`)

//sorted data of 50 students based on their age and bate of bith//
const firstNames = ['Amit', 'Sunita', 'Priya', 'Rahul', 'Neha', 'Vikas', 'Pooja', 'Saurabh', 'Aarti', 'Ankit', 'Kavita', 'Ravi', 'Meena', 'Arjun', 'Smita', 'Deepak', 'Geeta', 'Nitin', 'Divya', 'Sanjay', 'Rekha', 'Manoj', 'Anjali', 'Gopal', 'Shilpa', 'Rajesh', 'Seema', 'Harish', 'Kiran', 'Vinod', 'Mamta', 'Sandeep', 'Nisha', 'Pankaj', 'Sapna', 'Gaurav', 'Sarita', 'Ajay', 'Priti', 'Suresh', 'Manju', 'Alok', 'Swati', 'Raj', 'Anu', 'Mohan', 'Rita', 'Jay', 'Heena', 'Kartik'];

const today = new Date();

//function to calculate age//
function calculateAge(dob) {
    const diff = today.getTime() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Function to generate data for 50 students
function generateStudentsData() {
    const students = [];
    for (let i = 0; i < 50; i++) {
        const name = firstNames[Math.floor(Math.random() * firstNames.length)];
        const minDate = new Date(today.getFullYear() - 25, 0, 1);
        const maxDate = new Date(today.getFullYear() - 18, 11, 31);
        const randomDobTimestamp = minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());
        const dob = new Date(randomDobTimestamp);
        
        students.push({
            name: name,
            dob: dob,
            age: calculateAge(dob)
        });
    }
    return students;
}

// Generate data to sort//
const studentsData = generateStudentsData();

// Sort ascending //
function sortStudentsByAge(students) {
    return students.sort((a, b) => a.age - b.age);
}

const sortedStudentsAsc = sortStudentsByAge([...studentsData]); 
console.log("_______Ascending Order______");
sortedStudentsAsc.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}, Date of Birth: ${student.dob.toLocaleDateString()}`);
});

// Sort descending //
function sortStudentsByAgeDesc(students) {
    return students.sort((a, b) => b.age - a.age);
}

const sortedStudentsDesc = sortStudentsByAgeDesc([...studentsData]);
console.log("_______Descending Order________");
sortedStudentsDesc.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}, Date of Birth: ${student.dob.toLocaleDateString()}`);
});





