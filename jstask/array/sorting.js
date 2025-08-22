//bubble sort//

function bubbleSort(arr, order) {

    let steps = 0

    let swap = true

    for (let i = 0; i < arr.length; i++) {

        swap = false

        for (let j = 0; j < arr.length - i; j++) {

            steps++

            if (order == "A") {

                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                    swap = true
                }
            } else {
                if (arr[j] < arr[j + 1]) {
                    let temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                    swap = true
                }
            }
        }

        if (!swap) {
            return `sort array is [${arr}] in ${steps} steps`
        }
    }

    return `sort array is [${arr}] in ${steps} steps`
}

console.log(bubbleSort([20, 30, 10, 50, 60, 90, 40, 70, 80],"A"))
console.log(bubbleSort([20, 30, 10, 50, 60, 90, 40, 70, 80],"D"))

console.log(bubbleSort(["kiran", "sejal", "pranay", "rahina"],"A"))

console.log(bubbleSort(["kiran", "sejal", "pranay", "rahina"],"D"))

// selection sort//
function selectionsort(arr1){
   let steps = 0;

    for(let i = 0; i < arr1.length; i++){
        minindex = i;

        for(let j = i + 1; j < arr1.length; j++) {
            steps++;
            if(arr1[j] < arr1[minindex]){
                minindex = j;
                
            }
        }
       if(minindex !== 1){
        let temp = arr1[i];
       arr1[i] = arr1[minindex];
       arr1[minindex] = temp;
       
    }
    }
     return `sort array is [${arr1}] in ${steps} steps`

}
let numbers = [1,2,3,4,5,6,7,8,9,10]
console.log("selection sort array: ", selectionsort(numbers))

