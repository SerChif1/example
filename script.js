'use strict';

let title = prompt('Как называется проект?');
let screens = prompt('Какие типы экранов нужно разраболтать?', 'Простые, Сложные, Интерактивные');
let screenPrice = Number(prompt('сколько будет стоить данная работа?'));
let rollback = 50;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой вид дополнительных услуг необходим?');
let servicePrice1 = parseInt(prompt('Сколько это будет стоить?'));
let service2 = prompt('Какой вид дополнительных услуг необходим?');
let servicePrice2 = parseFloat(prompt('Сколько это будет стоить?'));

const showTipeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getAllServicePrice = function () {
    return servicePrice1 + servicePrice2;
};

let allServicePrice = getAllServicePrice();

function getFullPrice() {
    return screenPrice + allServicePrice;
};

let fullPrice = getFullPrice();


function getTitle(title) {

    title = title.trim();

    if (title.length === 0) return title;

    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

title = getTitle(title);

function getServicePercentPrice() {
    return fullPrice - rollback;
};

let servicePercentPrice = getServicePercentPrice();

const getRollbackMessage = function (price) {
    if (price >= 30000) return 'Даем скидку 10%';
    else if (price >= 15000 && fullPrice < 30000) return 'скидка 5%';
    else if (price > 0 && fullPrice < 15000) return 'скидка не предусмотренна';
    else return 'что то пошло не так';
};

showTipeOf(title)
showTipeOf(screenPrice);
showTipeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
