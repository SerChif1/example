'use strict'

//1) Напишите функцию createIdGenerator, которая возвращает функцию. Каждый вызов этой функции должен возвращать уникальный идентификатор (начиная с 1).
function createIdGenerator() {
    let count = 1;

    return function () {
        return count++;
    };
}

const idGenerator = createIdGenerator();
console.log(idGenerator()); // 1
console.log(idGenerator()); // 2
console.log(idGenerator()); // 3

//2) Напишите функцию memoize, которая принимает функцию и возвращает её кэшированную версию. Если функция вызывается с теми же аргументами, что и раньше, она должна возвращать результат из кэша, а не вычислять его заново.

function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}

function expensiveCalculation(x) {
    console.log('Calculating...');
    return x * x;
}

const memoizedCalculation = memoize(expensiveCalculation);
console.log(memoizedCalculation(5)); // Calculating... 25
console.log(memoizedCalculation(5)); // 25 (без вычисления)
console.log(memoizedCalculation(6));
console.log(memoizedCalculation(7));
console.log(memoizedCalculation(6));
console.log(memoizedCalculation(7));

// 3) Напишите функцию createChainableFunction, которая позволяет вызывать методы объекта цепочкой. Каждый метод должен возвращать объект, чтобы можно было продолжать цепочку.
function createChainableFunction(methods) {
    let value = null;
    const chainable = {
        execute: () => value
    };

    Object.keys(methods).forEach((methodName) => {
        chainable[methodName] = function (...args) {
            if (value === null) {
                value = methods[methodName](...args);
            } else {
                value = methods[methodName](value, ...args);
            }
            return this;
        };
    });

    return chainable;
}

const calculator = createChainableFunction({
    add: (x, y) => x + y,
    multiply: (x, y) => x * y,
});

const result = calculator
    .add(5, 10) // 15
    .multiply(2) // 30
    .execute();

console.log(result); // 30
