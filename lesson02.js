let num = 266219;

function multiply(number) {
    const numberString = number.toString();
    let product = 1;
    for (let i = 0; i < numberString.length; i++) {
        const digit = parseInt(numberString[i], 10);
        product *= digit;
    }

    let cubeResult = product * product * product;

    console.log(cubeResult);
}

multiply(num);

function multiply2(number) {
    const product = number
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, digit) => acc * digit, 1);

    let firstTwoDigits = product.toString().slice(0, 2);

    console.log(product);

    console.log(firstTwoDigits);
}

multiply2(num);