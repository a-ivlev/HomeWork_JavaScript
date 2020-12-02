'use strict';

/*
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
*/

const products = [
    {
        id: 3,
        price: 200,
        },
    {
        id: 4,
        price: 900,
        },
    {
        id: 1,
        price: 1000,
        },
];

// Ввыведем исходные данные в консоль
products.forEach(function (products) {
    console.log(`product id: ${products.id}\nprice:           ${products.price}`);
});

// Первый способ решения
console.log("Первый способ решения задачи");
        const priceSale15 = products.map(function (sale) {
            let sale15 = sale.price - sale.price / 100 * 15;
            return Object.assign({}, sale, {
                priceSale15: sale15
            });
        });

        // Выведем полученный результат в консоль
        for (let property in priceSale15) {
            console.log(`product id: ${priceSale15[property].id}\nsale price -15%: ${priceSale15[property].priceSale15}`);
        }

        // Второй спобоб решения
        console.log("Второй способ решения задачи");
            // Ввыведем исходные данные в консоль
            // Выведем тоже самое только другим способом.
            for (let property in products) {
                console.log(`product id: ${products[property].id}\nprice:           ${products[property].price}`);
            }

            // применим скидку 15% на каждый товар
            products.forEach(function (sale) {
                sale.price = sale.price - sale.price / 100 * 15;
            });

            // Выведем полученный результат в консоль
            products.forEach(function (products) {
                console.log(`product id: ${products.id}\nsale price -15%: ${products.price}`);
            });
