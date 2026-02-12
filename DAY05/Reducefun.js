//
function sumArr(){
    let k = arr.length
    let sum=0;
    for(let i = 0; i < k; i++){
        sum += arr[i];
    }
    return sum;
}

let arr=[1,2,3,4,5,6,7]
let result = sumArr(arr);
console.log("Total = " + result);
// reduced approach
