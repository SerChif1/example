'use strict'

function createArray(...newArray) {
    return newArray;
}

let array1 = createArray(1, 2, 3, 4, 5);
let array2 = createArray(3, 4, 5, 6, 7);

const dublArray = [...array1, ...array2];
console.log(dublArray);