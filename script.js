'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrice();
        appData.getTitle(appData.title);
        appData.loger();
    },
    asking: function () {
        appData.title = prompt('Как называется проект?', 'Калькулятор верстки');

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какие типы экранов нужно разраболтать?');
            let price = 0;

            do {
                price = prompt('сколько будет стоить данная работа?');
                if (appData.screenPrice === null) {
                    console.log('ввод отменен');
                    return;
                }
                price = +price.trim();
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }



        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой вид дополнительных услуг необходим?');
            let price = 0;

            do {
                price = prompt('Сколько это будет стоить?');
                if (price === null) {
                    console.log('ввод отменен');
                    return;
                }
                price = +price.trim();
            } while (!appData.isNumber(price));

            appData.services[name] = +price;
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrice += appData.services[key];
        }
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrice;
    },
    getTitle: function (title) {

        title = title.trim();

        if (title.length === 0) return title;

        appData.title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    },
    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) return 'Даем скидку 10%';
        else if (price >= 15000 && price < 30000) return 'скидка 5%';
        else if (price > 0 && price < 15000) return 'скидка не предусмотренна';
        else return 'что то пошло не так';
    },
    loger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);

        for (let key in this) {
            console.log(`${key}: `, this[key]);
        }
    }
}

appData.start();
