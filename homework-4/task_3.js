'use strict';

/*
3 (это задание не является частью учебной программы, делайте его по желанию). На базе игры (приняв за
пример), созданной в дополнительных видео, реализовать игру «Кто хочет стать миллионером?».
Т.е. у вас должен быть главный объект, содержащий всю логику игры, который будет иметь методы, например
метод run, возможно метод init и т.д.
В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать варианты
ответов в виде теста, например:
Сколько букв в слове "привет":
a. Пять.
b. Шесть.
c. Семь.
d. Куда я попал?
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить
сыграть снова.
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.
*/


let total = 0;

function Question(textQuestion, a, b, c, d, answer) {
        this.textQuestion = textQuestion;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.answer = answer; //"Правильный ответ"
        console.log(`Ответье на вопрос.\n${this.textQuestion}`);
        console.log(`a ${this.a} b ${this.b}`);
        console.log(`c ${this.c} d ${this.d}`);
}

Question.prototype.checkAnswer = function (userAnswer){
    if (this.answer == userAnswer) {
        console.log("И это правильный ответ!");
        return 1;
    } else {
        console.log(`Это не правильный ответ.`);
        return 0;
    }
};



let question1 = new Question("Сколько букв в слове \"привет\"?", "Пять.", "Шесть.", "Семь.", "Куда я попал?", "b");
let userAnswer = prompt("Ваш ответ: a, b, c, или d?");
total += question1.checkAnswer(userAnswer);
let question2 = new Question("Сколько букв в слове \"привет\"?", "Пять.", "Шесть.", "Семь.", "Куда я попал?", "b");
userAnswer = prompt("Ваш ответ: a, b, c, или d?");
total += question2.checkAnswer(userAnswer);
let question3 = new Question("Сколько букв в слове \"привет\"?", "Пять.", "Шесть.", "Семь.", "Куда я попал?", "b");
userAnswer = prompt("Ваш ответ: a, b, c, или d?");
total += question3.checkAnswer(userAnswer);
let question4 = new Question("Сколько букв в слове \"привет\"?", "Пять.", "Шесть.", "Семь.", "Куда я попал?", "b");
userAnswer = prompt("Ваш ответ: a, b, c, или d?");
total += question4.checkAnswer(userAnswer);
let question5 = new Question("Сколько букв в слове \"привет\"?", "Пять.", "Шесть.", "Семь.", "Куда я попал?", "b");
userAnswer = prompt("Ваш ответ: a, b, c, или d?");
total += question5.checkAnswer(userAnswer);

console.log(`Количество правильных ответов ${total} из 5.`);



