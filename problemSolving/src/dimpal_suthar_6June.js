//problem 1 ========================================================================================================================

// A number is called a smart number if it has an odd number of factors. Given some numbers, find whether they are smart numbers or not.

// Sample Input: 1 2 7 169
// sample Output: YES NO NO YES

// Explanation : The factors of 1 are just 1 itself.So the answer is YES. The factors of 2 are 1 and 2.It has even number of factors.The answer is NO. The factors of 7 are 1 and 7.It has even      number of factors.The answer is NO. The factors of 169 are 1,13 and 169.It has odd number of factors.The answer is YES.

let num = 169;
let count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        count++;
    }
}

console.log(count);

if (count % 2 === 0) {
    console.log("NO");
} else {
    console.log("YES");
}




//problem 2 ====================================================================================================================
// Given two arrays of integers, find which elements in the second array are missing from the first array.

// arr = [7,2,5,3,5,3]
// brr = [7,2,5,4,6,3,5,3]

// the brr array is original list. the number missing is [4,6]

// Notes : 

// 1. If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.
// 2. Return the missing numbers sorted ascending.
// 3. Only include a missing number once, even if it is missing multiple times.
// 4. The difference between the maximum and minimum numbers in the original list is less than or equal to 100.



// let arr = [7, 2, 5, 3, 5, 3];
// let brr = [7, 2, 5, 4, 6, 3, 5, 3];

let arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206]
let brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]

for(let i = 0; i < arr.length; i++) {
    let index = brr.indexOf(arr[i]);
    brr.splice(index, 1);
}

console.log(brr.sort());











// let newArr = [...new Set(brr)].sort((a,b) => a-b);

// console.log(newArr);


// let arr1 = arr.sort();
// let brr1 = brr.sort();

// console.log(arr1);
// console.log(brr1);

// newArr = brr1.filter((e) => !arr1.includes(e));