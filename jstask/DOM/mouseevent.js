//mouse event//
let eventbox = document.getElementById("event-box")
let eventlog = document.getElementById("event-log")

function logevent (message){
    if(eventlog){
   eventlog.innerText = `log: ${message}`;
    }
    
}

//click event//
eventbox.addEventListener(`click`,(event)=>{
    logevent("mouse has been clicked")
    console.log(event)
});

//dblclick event//
eventbox.addEventListener(`dblclick`,(event)=>{
    logevent("mouse has been dblclicked")
    console.log(event)
});

//mousedown event//
eventbox.addEventListener(`mousedown`,(event)=>{
    logevent("mouse buuton has been clicked")
    console.log(event)
});
//mouseup event//
eventbox.addEventListener(`mouseup`,(event)=>{
    logevent("mouse buuton has been clicked")
    console.log(event)
});

//mouse enter and mouse leave event//
if(eventbox){
eventbox.addEventListener(`mouseenter`,()=>{
    logevent("mouse element has been enetered")
    eventbox.style.backgroundColor = "white";
});
 eventbox.addEventListener("mouseleave", () => {
                logevent("mouse event has been leave");
                eventbox.style.backgroundColor = "lightblue";
            });
        }

//window event//
//resize//
window.addEventListener("resize",(event)=>{
    console.log(`rize event trigger`)
    console.log(event)
})

//scroll//
window.addEventListener("scroll",(event)=>{
    console.log("scroll event triggered");
    console.log(window.scrollY)
})


