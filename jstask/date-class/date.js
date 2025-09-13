// //calucalte age, year and minutes//
// function calculateAge(userDob){
//   let dob = new Date(userDob);
//   let currentDate = new Date();
//   let diffrence = currentDate.getTime() - dob.getTime();
//   totalMinutes = diffrence / (1000 * 60);
//   let minutesInYear = 365.25 * 24 * 60;

//   let year = Math.floor(totalMinutes / minutesInYear);
//   totalMinutes %= minutesInYear;

//   let minutesInDay = 24 * 60;
//   let days = Math.floor(totalMinutes / minutesInDay);
//   totalMinutes %= minutesInDay;

//   let minutes = Math.floor(totalMinutes);
//   return {
//     years : year,
//     days : days,
//     minutes : minutes
  
// };
// }
// let age = calculateAge(`2005-01-22`);
// console.log(`${age.years} years, ${age.days} days,and ${age.minutes} minutes.`)

// //sorted data of 50 students based on their age and bate of bith//
// const firstNames = ['Amit', 'Sunita', 'Priya', 'Rahul', 'Neha', 'Vikas', 'Pooja', 'Saurabh', 'Aarti', 'Ankit', 'Kavita', 'Ravi', 'Meena', 'Arjun', 'Smita', 'Deepak', 'Geeta', 'Nitin', 'Divya', 'Sanjay', 'Rekha', 'Manoj', 'Anjali', 'Gopal', 'Shilpa', 'Rajesh', 'Seema', 'Harish', 'Kiran', 'Vinod', 'Mamta', 'Sandeep', 'Nisha', 'Pankaj', 'Sapna', 'Gaurav', 'Sarita', 'Ajay', 'Priti', 'Suresh', 'Manju', 'Alok', 'Swati', 'Raj', 'Anu', 'Mohan', 'Rita', 'Jay', 'Heena', 'Kartik'];

// const today = new Date();

// //function to calculate age//
// function calculateAge(dob) {
//     const diff = today.getTime() - dob.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Function to generate data for 50 students
// function generateStudentsData() {
//     const students = [];
//     for (let i = 0; i < 50; i++) {
//         const name = firstNames[Math.floor(Math.random() * firstNames.length)];
//         const minDate = new Date(today.getFullYear() - 25, 0, 1);
//         const maxDate = new Date(today.getFullYear() - 18, 11, 31);
//         const randomDobTimestamp = minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());
//         const dob = new Date(randomDobTimestamp);
        
//         students.push({
//             name: name,
//             dob: dob,
//             age: calculateAge(dob)
//         });
//     }
//     return students;
// }

// // Generate data to sort//
// const studentsData = generateStudentsData();

// // Sort ascending //
// function sortStudentsByAge(students) {
//     return students.sort((a, b) => a.age - b.age);
// }

// const sortedStudentsAsc = sortStudentsByAge([...studentsData]); 
// console.log("_______Ascending Order______");
// sortedStudentsAsc.forEach(student => {
//     console.log(`Name: ${student.name}, Age: ${student.age}, Date of Birth: ${student.dob.toLocaleDateString()}`);
// });

// // Sort descending //
// function sortStudentsByAgeDesc(students) {
//     return students.sort((a, b) => b.age - a.age);
// }

// const sortedStudentsDesc = sortStudentsByAgeDesc([...studentsData]);
// console.log("_______Descending Order________");
// sortedStudentsDesc.forEach(student => {
//     console.log(`Name: ${student.name}, Age: ${student.age}, Date of Birth: ${student.dob.toLocaleDateString()}`);
// })


//practice//
// class RecurringEvent {
//     constructor(name,startdate,frequency){
//         this.name = name
//         this.startdate = new Date(startdate)
//         this.frequency = frequency
//     }

//     getnextoccurrance(currentdate){
//         let nextdate = new Date(this.startdate)
//         while (nextdate <= currentdate){
//             switch (this.frequency){
//                 case `weekly`:
//                 nextdate.setDate(nextdate.getDate() +7);
//                 break;
//              case `monthly`:
//                 nextdate.setMonth(nextdate.getmonth() + 1)
//                 break;
//                 case `yearly`:
//                     nextdate.setFullYear(nextdate.getFullYear() + 1);
//                     break;
//                     default:
//                         return this.startdate;
//             }
//         }
//         return nextdate;
//     }
//     isthisweekend(currentdate){
//         let currenntdayofweek = currentdate.gatday()
//         let daysuntilsaturday = 6 - currenntdayofweek
//         let nextsaturday = new Date(currentdate)
//         nextsaturday.setDate(currentdate.getdate() + daysuntilsaturday)
//         nextsaturday.setHours(0,0,0,0)

//         let nextsunday = new Date(nextsaturday)
//         nextsunday.setDate(nextsaturday)
//         nextsunday.setHours(23,59,59,999)

//         let nextoccurance = this.getnextoccurrance(currentdate)
//         return nextoccurance >= nextsaturday && nextoccurance <= nextsaturday
//     }
// }



// let today = new Date()
// today.setHours(0,0,0,0)
 
// const events = [
//     new RecurringEvent('Weekly Project Sync', '2025-09-06', 'weekly'),
//     new RecurringEvent('Monthly Team Lunch', '2025-08-15', 'monthly'),
//     new RecurringEvent('Annual Company Picnic', '2025-10-10', 'yearly'),
//     new RecurringEvent('Tuesday Standup', '2025-09-02', 'weekly')
// ];

// let outputdiv = document.getElementById(`output`)
// let upcomingEventfound = false

// console.log(`ckecking for upcoming events on the weekend of ${today.toLocalDateString()}`)

// Event.forEach(event =>{
// if(event.isthisweekend(today)){
//     upcomingEventfound = true
//     let nextdate = event.getnextoccurance(today)
//     let formatteddate = nextdate.toLocalDateString(`en-us`, {weekday: `long`,month:`long`,day:`numeric`})
//     console.log(`${event.name} is scheduled for this weekend, on ${formatteddate}`)

//  const p = document.createElement('p');
//         p.textContent = `${event.name} is scheduled for this weekend, on ${formatteddate}.`;
//         outputdiv.appendChild(p);
//     }
// });

// if (!upcomingEventfound) {
//     const p = document.createElement('p');
//     p.textContent = 'No recurring events are scheduled for this weekend.';
//     outputdiv.appendChild(p);
// }



