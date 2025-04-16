'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 50,
    allServicePrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function () {
        appData.title = prompt('Как называется проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разраболтать?', 'Простые, Сложные, Интерактивные');

        do {
            appData.screenPrice = prompt('сколько будет стоить данная работа?');
            if (appData.screenPrice === null) {
                console.log('ввод отменен');
                return;
            }
            appData.screenPrice = +appData.screenPrice.trim();
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    getAllServicePrice: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
            let price = 0;

            if (i === 0) {
                appData.service1 = prompt('Какой вид дополнительных услуг необходим?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой  еще вид дополнительных услуг необходим?');
            }
            do {
                price = prompt('Сколько это будет стоить?');
                if (price === null) {
                    console.log('ввод отменен');
                    return;
                }
                price = +price.trim();
            } while (!appData.isNumber(price));

            sum += +price;
        }
        return sum;
    },
    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrice;
    },
    getTitle: function (title) {

        title = title.trim();

        if (title.length === 0) return title;

        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    },
    getServicePercentPrice: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) return 'Даем скидку 10%';
        else if (price >= 15000 && price < 30000) return 'скидка 5%';
        else if (price > 0 && price < 15000) return 'скидка не предусмотренна';
        else return 'что то пошло не так';
    },
    loger: function () {
        for (let key in this) {
            console.log(`${key}: `, this[key]);
        }
    },
    start: function () {
        appData.asking();
        appData.allServicePrice = appData.getAllServicePrice();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrice();
        appData.title = appData.getTitle(appData.title);
        appData.loger();
    }
}

appData.start();
