// Problem 1: =============================================================================================================================

// Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

// Example : 

// arr=[5,6,8,11]
// 8 is between two sub-arrays that sum to 11.

// sample input : [1, 2, 3, 3]
// Sample Output : 3

//----------- answer 1 ---------------------

const findMiddleNum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const leftSum = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
        const rightSum = arr.slice(i + 1).reduce((acc, curr) => acc + curr, 0);
    
        if (leftSum === rightSum) {
          return arr[i];
        }
      }
    
      return -1;
}

console.log(findMiddleNum([5,6,8,11]));
console.log(findMiddleNum([1, 2, 3, 3]));


//================ OR ====================================

let arr = [5,6,8,11]
// let arr = [1, 2, 3, 3]

let leftSum = 0;
let rightSum = 0;
let middleNum = 0;

for(let i=0 ; i < arr.length/2 ; i++){
        leftSum += arr[i] ;
}
for(let i=arr.length/2 ; i<arr.length ; i++){
    if(i === arr.length/2){
        middleNum = arr[i]
        continue;
    }
    console.log(arr[i])
    rightSum += arr[i]
}
console.log("leftSum ",leftSum)
console.log("rightSum ",rightSum)
console.log("middleNum ",middleNum)











//Problem 2: ==========================================================================================================================

// We define super digit of an integer x using the following rules:

// Given an integer, we need to find the super digit of the integer.

// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
// For example, the super digit of 9875 will be calculated as:

//     super_digit(9875) 9+8+7+5 = 29 
// 	super_digit(29) 2 + 9 = 11
// 	super_digit(11)	1 + 1 = 2
// 	super_digit(2) = 2

// input : 9875987598759875
// output: 8 

//----------- answer 2 ---------------------

function findSuperDigit(num) {
    let newNum = num+'';
    if (newNum.length === 1) {
        return
    }
    else {
        let superDigit = 0;
        for (let i = 0; i < newNum.length; i++) {
            superDigit += Number(newNum[i])
        }
        newNum = superDigit
        console.log("superdigit",newNum);
        findSuperDigit(newNum)
    }
}
console.log('\n');
findSuperDigit('9875')
console.log("==========================");
findSuperDigit('9875987598759875')
