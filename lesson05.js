'use strict';

const arr = [
    "12345",
    "23456",
    "34567",
    "45678",
    "56789",
    "23432",
    "98765"
];

const filtereArr = arr.filter(num => num.startsWith(2) || num.startsWith(4));

console.log(filtereArr);

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(`${i} - Делитель этого числа: 1 и ${i}`);
    }
}