'use strict';

/*
2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий).
*/
/*
1. объявляем переменную a присваиваем значение 2
2. объявляем переменную x присваиваем ей значение заданное выражением 
3. вычислим выражение, первым производим вычисления в скобках
   т.к. скобки имеют max приоритет
4. значение переменной a умножаем на 2 полученный результат присваиваем переменной a
   получаем a = 4
5. складываем 1 со значением хранящимся в переменной a получаем 5
6. присваиваем переменной x значение 5
   переменные x и a будут равны x = 5 a = 4 
*/
a = 2;
let x = 1 + (a *= 2);
//проверка
alert(`переменные x и a будут равны x = ${x} a = ${a}`);

