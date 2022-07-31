// - Є змінна х, якій ви надаєте довільне числове значення.&ndash;&gt;-->
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.-->
//  Перевірте  скрипт при a, що дорівнює 1, 0, -3

//
// let x = +prompt('введіть число');
// console.log(x);
// if (x != 0) {
//     document.write('<h2>вірно</h2>');
// } else {
//     document.write('<h2>невірно</h2>');
// }

///////////////////////////////////////
//  - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('введіть число');
if (time <= 15) {
    document.write('<h2>Перша чверть</h2>')
} else if (time >15 && time<= 30) {
    document.write('<h2>Друга чверть</h2>')
} else if (time >30 && time<= 45){
    document.write('<h2>Третя чверть</h2>')
}else if (time >45 && time <= 59){
    document.write('<h2>Четверта чверть</h2>')
} else{
    document.write('<h2>Введіть число від 0 до 59 </h2>')
}

/////////////////////////////////////////////////////
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
//     у яку половину(декаду) місяця потрапляє це число (у першу,
//     другу чи третю).
let day = +prompt('Введіть дату');

if (day <= 10) {
    document.write('<h2>Перша декада</h2>')
} else if (day > 10 && day <= 20) {
    document.write('<h2>Друга декада</h2>')
} else if (day > 20 && day <= 31) {
    document.write('<h2>Третя декада</h2>')
} else {
    document.write('<h2>Введіть дату від 1 до 31 </h2>')
}
/////////////////////////////////////////////////
// Скласти розклад на тиждень за домопоги switch. Користувач вводить
//     порядковий номер дня тижня і на екрані відображається
//     інфа що заплановано на цей день (можна замість плану на день,
//     назву дня англійською).


let day =+prompt('Який день тижня?');
switch (day){
    case 1:
        document.write('Monday');
        break;
    case 2:
        document.write('Tuesday');
        break;
    case 3:
        document.write('Wednesday');
        break;
    case 4:
        document.write('Thursday');
        break;
    case 5:
        document.write('Friday');
        break;
    case 6:
        document.write('Saturday');
        break;
    case 7:
        document.write('Sunday');
        break;
}
/////////////////////////////////////////////////
//

//  - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.
//
let num = +prompt('number one');
console.log(num);
let num1 = +prompt('number two');
console.log(num1);

if (num > num1) {
    document.write(num);
} else if (num1 > num) {
    document.write(num1);

} else if (num = num1) {
    document.write('Числа рівні');
}

/////////////////////////////////////////
// - є змінна х, яка може прийняти будь-яке значення
// (стрінг, число, undefined, null  і тд включно).
//  Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"
//  якщо значення змінної х являється falsy (хибноподыбне,
// тобто кастується до false)

let x = prompt('Напишіть щонебудь') ;
console.log(x);
if (x == NaN || x==0 || x==false || x==null || x==undefined){
    document.write('default');
}
