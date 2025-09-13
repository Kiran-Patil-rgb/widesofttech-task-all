
// function toggleClass(event){
   
//     const clickedElement = event.currentTarget; 
//     console.log(clickedElement.dataset);
    
//     let target = document.querySelector(clickedElement.dataset.targetElement);
//     console.log(target);
    
    
//     if (target) {
//         target.classList.toggle(clickedElement.dataset.toggleClass);
//     }
// }

//practice//
let productElement = document.getElementById(`product-Info`)
let productId = productElement.dataset.productId;
let productName = productElement.dataset.productName;
let productPrice = parseFloat(productElement.dataset.price)
console.log(productId)
console.log(productPrice)
