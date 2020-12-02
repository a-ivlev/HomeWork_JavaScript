'use strict';

/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает
параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке).
*/

// в стиле es5

function Product(name, price) {
    this.name = name;
    this.price = price;
}
/*
Product.make25PercentDiscount = function(price) {
    return price - price * 0.25;
};
*/

Product.prototype.make25PercentDiscount = function(discount) {
    // Можно добавить новое свойство которое будет иметь цену со скидкой
    this.salePrice = this.price - this.price * discount/100;
    // Можно изменить цену в свойстве прайс
    //this.price = this.price - this.price * discount/100;
};

const prod1 = new Product("Картошка", 30);

console.log(prod1);

// В параметре функции make25PercentDiscount передаём процент уменьшения цены.
prod1.make25PercentDiscount(25);

console.log(prod1);


// в стиле es6
class Product6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(discount){
        // Можно добавить новое свойство которое будет иметь цену со скидкой
        this.salePrice = this.price - this.price * discount/100;
        // Можно изменить цену в свойстве прайс
        //this.price = this.price - this.price * discount/100;
    }
}

const prod2 = new Product6("Капуста", 25);
console.log(prod2);
prod2.make25PercentDiscount(25);
console.log(prod2);

