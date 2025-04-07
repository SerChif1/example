// alert('Че кого');
// let x = confirm('hi men');
// let y = prompt('wot is you age?');
// console.log(x);
// console.log(y);
// console.log(x, y);

let title = prompt('Как называется проект?');
let screens = prompt('Какие типы экранов нужно разраболтать?', 'Простые, Сложные, Интерактивные');
let screenPrice = Number(prompt('сколько будет стоить данная работа?'));
let rollback = 50;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой вид дополнительных услуг необходим?');
let servicePrice1 = parseInt(prompt('Сколько это будет стоить?'));
let service2 = prompt('Какой вид дополнительных услуг необходим?');
let servicePrice2 = parseFloat(prompt('Сколько это будет стоить?'));
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback);

console.log(title);
console.log(screens);
console.log(screenPrice);
console.log(servicePrice1);
console.log(servicePrice2);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов' + screenPrice + 'рублей/ долларов/гривен/юани \n Стоимость разработки сайта' + fullPrice + 'рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));
console.log(servicePercentPrice);

if (fullPrice >= 30000) console.log('Даем скидку 10%');
else if (fullPrice >= 15000 && fullPrice < 30000) console.log('скидка 5%');
else if (fullPrice > 0 && fullPrice < 15000) console.log('скидка не предусмотренна');
else console.log('что то пошло не так'); 