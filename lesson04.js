'use strict';

function cloner(obj) {

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = cloner(obj[key]);
        }
    }

    return copy;
}

const original = {
    name: "Bob",
    age: 20,
    experience: {
        years: 2,
        steck: ["JS", "Java", "Piton"]
    }
}

const clon = cloner(original);
clon.name = "Mike";
clon.age = 25;
clon.experience.years = 7;

console.log(original);
console.log(clon);