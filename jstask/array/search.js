//linear search algorithm//
console.log("____linaer search____")
let names = ["kiran" , "pranay", "sejal", "rahina"]
function linearsearch(arr, search){
    let steps = 0;
    let index = 0;
    while (index < arr.length){
        steps++;
      
    if (arr[index] === search){
       return `name ${search} found at position ${index + 1} in ${steps} steps`
    }
      index++;
    
}
   return ` name ${search} not found at position  in ${steps} steps`
}
console.log(linearsearch(names , "pranay"));
console.log(linearsearch(names , "kiran"));
console.log(linearsearch(names , "krish"));


//binary search algorithm//
console.log("____binary search____")
function binarysearch(arr,search){
let ub = arr.length - 1
let lb = 0
let steps = 0
while (lb <= ub){
    steps++
    let midpoint = parseInt((ub + lb)/2)
    if(arr[midpoint] === search){
        return `name ${search} found at position ${midpoint + 1} in ${steps} steps`

    }
    if (arr[midpoint] < search){
        lb = midpoint + 1
    }else{
        ub = midpoint -1
    }
}
    return `element ${search} not found any position in ${steps} steps`

}
let numbers2 = [10,30,50,90,40,20]

let names2 = ["kiran" ,"pranay", "rahina", "sejal"]


console.log(binarysearch(numbers2, 5))
console.log(binarysearch(names2, "rahina"))




