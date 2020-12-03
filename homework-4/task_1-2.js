'use strict';

/*
1.2
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true.
*/

// в стиле es5

function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text){
    this.text = text;
}

function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}

const post1 = new Post("Anna", "text", "30.11.2020");
console.log("Создан post1");
console.log(post1);

post1.edit("Новый текст");
console.log("post1 после применения функции edit()");
console.log(post1);

const attache1 = new AttachedPost("Sergey", "post Sergeya", "30.11.2020");
console.log("Создан attache1");
console.log(attache1);

attache1.edit("Новый текст в Attached Post");
console.log("attache1 после применения функции edit()");
console.log(attache1);

attache1.makeTextHighlighted();
console.log("attache1 после применения функции makeTextHighlighted()");
console.log(attache1);

// в стиле es6

class Post6{
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text){
        this.text = text;
    }
}

class AttachedPost6 extends Post6{
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted(){
        this.highlighted = true;
    }
}


const post2 = new Post6("Alexey", "Text write Alexey", "30.11.2020");
console.log("Создан post2");
console.log(post2);

post1.edit("Новый текст");
console.log("post2 после применения функции edit()");
console.log(post2);

const attache2 = new AttachedPost6("Damir", "Post write Damir", "30.11.2020");
console.log("Создан attache1");
console.log(attache2);

attache2.edit("Новый текст в Attached Post");
console.log("attache2 после применения функции edit()");
console.log(attache2);

attache2.makeTextHighlighted();
console.log("attache1 после применения функции makeTextHighlighted()");
console.log(attache2);