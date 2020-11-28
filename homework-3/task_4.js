'use strict';

/*
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https: //yosortable.sort(function(a, b) {
    return a[1] - b[1];
});utu.be/O2pusOp0gC0
*/

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];


/* Получим все товары у которых есть фотографии.
   Создадим новый массив prodImage и с помощью метода filter добавим туда только те элементы
   массива у которых есть фотография.
*/
const prodImage = products.filter(function (img) {
    return ("photos" in img) && (img.photos.length > 0);
});

// Выведем полученные массив в консоль.
prodImage.forEach(function (prodImage) {
    console.log(prodImage);
});

console.log("2. задание Отсортируем массив");
products.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
      // a должно быть равным b
      return 0;
});

// Выведем полученные массив в консоль.
for (let property in products) {
    console.log(products[property]);
}