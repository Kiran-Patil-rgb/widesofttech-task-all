//submit form event//
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (event) => {
  
  event.preventDefault();
  
  console.log('form has been submitted');

  const nameInput = document.getElementById('name');
  console.log('name:', nameInput.value);
});

//change form event//
let target = document.getElementById('target')

let ir1 = document.getElementById("ir1")
let ir2 = document.getElementById("ir2")
let ir3 = document.getElementById("ir3")

    let red = 0
   let green = 0
   let blue = 0

ir1.addEventListener("input", (event) => {
    console.log("red : " + event.target.value)

    red = event.target.value
    updateColor()
})

ir2.addEventListener("input", (event) => {
    console.log("green : " + event.target.value)
    green = event.target.value
    updateColor()
})

ir3.addEventListener("input", (event) => {
    console.log("blue : " + event.target.value)
    blue = event.target.value
    updateColor()
})

function updateColor() {
    target.style.background = `rgb(${red},${green},${blue})`
}

updateColor()
 
//select form event//
const fruitSelect = document.getElementById('fruitSelect');
const resultParagraph = document.getElementById('result');


fruitSelect.addEventListener('change', () => {
   
    const selectedValue = fruitSelect.value;
    
  
    if (selectedValue) {
        resultParagraph.textContent = `you choose: ${selectedValue}`;
        console.log(`selected fruit is: ${selectedValue}`);
    } else {
        resultParagraph.textContent = '';
        console.log("nothing is selected")
    }
});
