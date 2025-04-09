'use strict';
// остановился пятый урок, видео "практика" 7 минута.
let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 50;
let allServicePrice;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt('Как называется проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов нужно разраболтать?', 'Простые, Сложные, Интерактивные');

    do {
        screenPrice = prompt('сколько будет стоить данная работа?');
        if (screenPrice === null) {
            console.log('ввод отменен');
            return;
        }
        screenPrice = +screenPrice.trim();
    } while (!isNumber(screenPrice));

    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrice = function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt('Какой вид дополнительных услуг необходим?');
        } else if (i === 1) {
            service2 = prompt('Какой вид дополнительных услуг необходим?');
        }
        do {
            let input = prompt('Сколько это будет стоить?');
            if (input === null) {
                console.log('ввод отменен');
                return;
            }
            sum += +input.trim();
        } while (!isNumber(sum));
    }
    return sum;
}

const showTipeOf = function (variable) {
    console.log(variable, typeof variable);
}

function getFullPrice() {
    return screenPrice + allServicePrice;
}

function getTitle(title) {

    title = title.trim();

    if (title.length === 0) return title;

    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
}

function getServicePercentPrice() {
    return fullPrice - rollback;
}

const getRollbackMessage = function (price) {
    if (price >= 30000) return 'Даем скидку 10%';
    else if (price >= 15000 && fullPrice < 30000) return 'скидка 5%';
    else if (price > 0 && fullPrice < 15000) return 'скидка не предусмотренна';
    else return 'что то пошло не так';
};

asking();
allServicePrice = getAllServicePrice();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle(title);

showTipeOf(title)
showTipeOf(screenPrice);
showTipeOf(adaptive);

console.log('allServicePrice', allServicePrice);

console.log(getRollbackMessage(fullPrice));
console.log(screens.length);
console.log(servicePercentPrice);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани \n Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
