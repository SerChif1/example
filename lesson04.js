'use strict';
let str = '    Это длинная строка которую необходимо обрезать что бы было меньше 30 знаков';
let str2 = 3537;

const workingString = function (str) {
    if (typeof str !== 'string') return 'это не строка';

    str = str.trim();

    if (str.length > 30) return str = str.slice(0, 30) + '...';
};

console.log(workingString(str2));