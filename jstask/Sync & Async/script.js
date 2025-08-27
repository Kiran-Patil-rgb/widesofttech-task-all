let counter = 0;
let interval = setInterval(()=>{
  counter++;
  console.log(`${counter * 2}`)
},1000);
setTimeout(()=>{
  clearInterval(interval);
  console.log("stop")
},5000);