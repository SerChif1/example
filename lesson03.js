'use strict';
let leng = prompt('Выбирите язык:', 'ru или en');

if (leng == 'ru') console.log('понедельник, вторник, среда и т.д.');
else if (leng == 'en') console.log('mondMonday, Tuesday, Wednesday, etc');
else console.log('что то пошло не так');

switch (leng) {
    case 'ru': console.log('понедельник, вторник, среда и т.д.');
        break;
    case 'en': console.log('mondMonday, Tuesday, Wednesday, etc');
        break;
    default: console.log('что то пошло не так');
}

let daysOfWeek = {
    'ru': ['понедельник', 'вторник', 'среда'],
    'en': ['mondMonday', 'Tuesday', 'Wednesday']
};

if (daysOfWeek[leng]) console.log(daysOfWeek[leng].join(', '));
else console.log('что то пошло не так');

let namePersone = prompt('Как вас зовут?');

let role = (namePersone === 'Артем') ? 'директор' : (namePersone === 'Александр') ? 'преподаватель' : 'студент';

console.log(role);