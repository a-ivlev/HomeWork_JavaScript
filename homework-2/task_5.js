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
 * @param {number} arg1 первое число переданное в качестве параметра функции.
 * @param {number} arg2 второе число переданное в качестве параметра функции.
 * @param {string} operation символ или строковое название арифметической операции ("+", "сложить", "сложение",
 * "add", "addition"), ("-", "вычесть", "вычитание", "subtract"), ("*", "умножить", "умножение", "multiply"),
 * ("/", "делить", "разделить", "division").
 * @throws {error} если передана не предусмотренная операция то будет выброшена ошибка.
 * @returns {number} функция возвращает результат выполнения операции над передаными числами.
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case   "сложить":
        case  "сложение":    
        case         "+":
        case       "add":
        case       "addition":
            return addition(arg1, arg2);
        case         "-":
        case   "вычесть":    
        case "вычитание":
        case  "subtract":
            return subtract(arg1, arg2);
        case         "*": 
        case  "умножить":
        case "умножение":    
        case  "multiply":
            return multiply(arg1, arg2);
        case         "/":
        case    "делить":    
        case "разделить":
        case  "division":
            return division(arg1, arg2);
        default:
            //alert(`Введённая вами операция ${operation} не предусмотрена!`)
            throw new Error(`Введённая вами операция ${operation} не предусмотрена!`);
    }
}
