
function toggleClass(event){
   
    const clickedElement = event.currentTarget; 
    console.log(clickedElement.dataset);
    
    let target = document.querySelector(clickedElement.dataset.targetElement);
    console.log(target);
    
    
    if (target) {
        target.classList.toggle(clickedElement.dataset.toggleClass);
    }
}
