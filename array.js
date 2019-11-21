/* 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
    ``
`
Input: [1,2,3,4,5]
Output: [11,12,13,14,15]
`
``*/
// 
let inputOne = [1, 2, 3, 4, 5];

const sumOfElements = (arr) => arr.map(el => {
    return el + 10
})

console.log(sumOfElements([1, 2, 3, 4, 5]))

/*
2. Given an array, return a new array where every non - string element is converted to an empty string.
Input: ["a", 123, "b", "c", {
    name: "cat"
}]
Output: ["a", "", "b", "c", ""] */

let inputTwo = ["a", 123, "b", "c", {
    name: "cat"
}]

const convertToStr = (arr) => {
    return arr.map((el) => {
        if (typeof el === "string") {
            return el
        } else {
            return ""
        }

    })
}

console.log(convertToStr(["a", 123, "b", "c", {
    name: "cat"
}]))

/* 
3. Write a function that returns only the even elements in an array of numbers.
Input: [1, 2, 3, 4, 5]
Output: [2, 4] */

let inputThree = [1, 2, 3, 4, 5];

const getEvenNum = (arr) => {
    return arr.filter((el) => {
        return el % 2 !== 1
    })
}
console.log(getEvenNum([1, 2, 3, 4, 5]))

/* 
4. Write a function that checks if all elements in the array are the same.
Input: [1, 1, 1, 1, 1]
Output: true

Input: [1, 1, 1, 1, 2]
Output: false */

let inputFour = [1, 1, 1, 1, 1]

const getSameElements = (arr) => {
    let generalIndx = arr[0] //need to key into the  specific index to compare
    return arr.every((el) => {
        return el === generalIndx
    })
}
// every returns a boolean 
console.log(getSameElements([1, 1, 1, 1, 1]))
// console.log(getSameElements([1, 1, 1, 1, 2]))


/* 
5.Write a function countZeroes, which takes an array of 
numbers as its argument and returns the amount of zeroes that occur in it.
Input: [1, 0, 0, 2, 0, 3, 0, 0, 0]
Output: 6 */
// let inputFive = [1, 0, 0, 2, 0, 3, 0, 0, 0]

const countZeroes = (arr) => {
    let zeroes = 0;

    return arr.reduce((acc, el) => {
        if (arr.includes(zeroes)) {
            return acc += el
        }
    }, 0)
}

console.log(countZeroes([1, 0, 0, 2, 0, 3, 0, 0, 0]))

/*
5. Write a function that doubles every element in an array.
Input: [1, 2, 3, 4]
Output: [2, 4, 6, 8] */

const doubleArr = (arr) => {
    return arr.map(el => {
        return el * 2
    })
}
console.log(doubleArr([1, 2, 3, 4]))