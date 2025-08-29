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



