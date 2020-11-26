'use strict';

/*
(Это задание не является частью курса, можете его не делать, оно для тех кому мало
обычных заданий, требует времени и возможно гугления, делайте по желанию.)
Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
числа.
*/

let money = parseInt(prompt("Введите какую сумму в рублях вы хотите положить на счёт в банке?"));


alert(`Ваша сумма в ${money} ${rub(money)} успешно зачислена.`)


/**
 * Функция выводит слово «рубль» в правильном падеже в зависимости от числа переданного на вход функции.
 * @param {number} summa - число для которой нужно определить правильный падеж слова рубль.
 * @return {string} слово «рубль» в правильном падеже.
 */
function rub(summa) {
    switch (true) {
        case summa > 10 && summa < 20:
            return "рублей";
        case summa % 10 == 1:
            return "рубль";
        case summa % 10 >= 2 && summa % 10 <= 4:
            return "рубля";
        case summa % 10 >= 5 && summa % 10 <= 9 || summa % 10 == 0:
            return "рублей";
    }
}