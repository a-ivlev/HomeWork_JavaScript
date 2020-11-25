'use strict';

/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции (использовать switch)
выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

let argum1 = parseInt(prompt("Введите перое число"));
let argum2 = parseInt(prompt("Введите второе число"));
let oper = prompt("Какую арифметическую операцию нужно выполнить?");

alert(`Ответ: ${mathOperation(argum1, argum2, oper)}`);

/**
 * функция выполняет одну из четырёх арифметических операций (сложение, вычитание, умножение, деление).
 * Функция на вход получает 3 аргумента - 2 числа над которыми нужно произвести арифметическую операцию
 * и третий аргумент - название либо символ арифметической операции.
 * @param {number} arg1 первое число
 * @param {number} arg2 второе число
 * @param {string} operation строковое или символьное название арифметической операции
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case   "сложить":
        case  "сложение":    
        case         "+":
        case       "add":
            return add(arg1, arg2);
        case   "вычесть":
        case "вычитание":    
        case         "-":
        case  "subtract":
            return subtract(arg1, arg2);
        case  "умножить":
        case "умножение":    
        case         "*":
        case  "multiply":
            return multiply(arg1, arg2);
        case "разделить":
        case "/":
        case "division":
            return division(arg1, arg2);
        default:
            alert("Введённая вами операция не найдена.")
    }
}
