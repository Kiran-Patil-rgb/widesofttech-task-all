//add border or remove border//
document.addEventListener("DOMContentLoaded", () => {

    let myDiv = document.getElementById("id1");
    let button = document.querySelector("#btn1");

    function Includes() {
        
        if ([...myDiv.classList].includes("border")) {
            myDiv.classList.toggle("border");
           
        } else {
            myDiv.classList.toggle("border");
        }
    }

    button.addEventListener("click", Includes);
});

//show and hide//
let togglebutton1 = document.getElementById("btn2");
let bluebox1 = document.getElementById("id2");
togglebutton1.addEventListener("click",()=>{
    bluebox1.classList.toggle("hide");
});

//another way to hide and show//
// let togglebutton = document.getElementById("btn2");
// let bluebox = document.getElementById("id2");

// togglebutton.addEventListener("click", () => {
    
//     if (bluebox.style.display === "none") {
       
//         bluebox.style.display = "block";
//     } else {
//         bluebox.style.display = "none";
//     }
// });

//table//
const button = document.getElementById("btn3");
const tableBody = document.querySelector("#table1 tbody");

const tabledata = [
    {
        name: "kiran",
        id: 2001,
        subject:"english",
    },
    {
        name: "pranay",
        id : 2002,
        subject : "marathi",
    },
    {
        name: "sejal",
        id: 2003,
        subject : "maths",
    },
    {
        name: "aryan",
        id: 2004,
        subject : "science",
    }
];

let rowIndex = 0;


button.addEventListener("click", () => {
   
    if (rowIndex >= tabledata.length) {
     window.alert("table is finished");
     
        return;
    }
    const rowData = tabledata[rowIndex];

    tableBody.innerHTML += `
        <tr>
            <td>${rowData.name}</td>
            <td>${rowData.id}</td>
            <td>${rowData.subject}</td>
        </tr>
    `;
    rowIndex++;
});
