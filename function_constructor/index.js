'use strict';
// const JS = {
//     object: {
//         name: "Sergii",
//         age: 25,
//         child: {
//             name: "Kolya",
//             age: 0,
//             smile() {
//                 console.log('smile');
//             }
//         }
//     },
//     object1: { name: "Andrii", age: 3 }
// }

// console.dir(JS);

// const object = new Object({ name: "Sergii", age: 25 });
// const child = new Object(object);

// console.dir(child)

// ========================
// function getData(data) {
//     if (data.constructor.name === "Array") {
//        return {
//            data: data,
//            name: data[0]
//        }
//     }
//     if (data.constructor.name === "String") {
//         console.log("String");
//     }
// }
// const array = ["Andrii", 2, 3, 4, 5];
// const string = "CGDGHMS";
// getData(string);
// const array = new Array(1, 2, 3, 4, 5);
// // console.log('array :', array);
// const string = new String("gycjgcha")
// // console.log('string :', string);
// console.dir(string);
// console.log('object :', object);

// =============================

// 1. 
// const parent = {
//     eyes: 2,
//     nose: 1,
//     hear: 2,
//     mouth: 1,
//     canSpeak: true,
//     smile() {
//         return console.log("smile");;
//     }
// }
// console.dir(parent);


// 2.
// const array = new Array(1, 2, 3, 4, 5);
// console.log('array :', array);

// const myObject = new Object({ a: 2, b: 3 });
// console.log('myObject :', myObject);

// 3.
// const parent = new Object({
//     eyes: 2,
//     nose: 1,
//     hear: 2,
//     mouth: 1,
// })


// const Human = function (name, age) {
//     this.name = name;
//     this.age = age;
// }
// Human.prototype.getInfo = function () {
//     console.log('this :', this);
// }

// const guard = Object.create(Human);
// const vasya = new guard("Vasya", 13)

// console.log('vasya :', vasya);


// const borys = new Parent("Boris", 25);
// const petro = new Parent("Petro", 39);
// console.log('borys :', borys);
// console.log('petro :', petro);


// console.dir(parent);

// parent.prototype.speak = function () {
//     console.log('hello');
// }

// console.dir(parent);



// console.dir(Object);

// 4. 
// const parent = {
//     eyes: 2,
//     nose: 1,
//     hear: 2,
//     mouth: 1,
//     canSpeak: true,
//     smile() {
//         return console.log("smile");
//     },
// }
// const children = {
//     canSpeak: false,
// }
// children.__proto__ = parent; //так не пишем
// delete children.canSpeak;
// console.dir(children.canSpeak);

// const children = Object.create(parent); // пишем так
// children.canSpeek = false;

// // console.log('children :', children);

// // console.dir(children);

// // children.smile();
// // console.log('children.eyes :', children.eyes);

// // console.dir(children.hasOwnProperty('eyes'));
// // console.dir(children.hasOwnProperty('canSpeek'));

// for (const key in children) {
//     children.hasOwnProperty(`${key}`) && console.log(`===>${key}`, children[key]);
// }

// ======================

// game "MARVEL'S HERO"
// // 1. Создаем прототип нашего героя 
const Hero = function ({ name = "", health = 100, hitPower = 1.1, speed = 1 }) {
    this.name = name;
    this.health = health;
    this.hitPower = hitPower;
    this.speed = speed;
}
Hero.prototype.hit = function (hitPower, speed) {
    this.health -= hitPower * speed;
}
// 2. Создаем героев на основе прототипа
const spiderMan = new Hero({ name: "spiderMan", hitPower: 1.3, speed: 2.3 });
const hulk = new Hero({ name: "Hulk", hitPower: 2.3 });

// 3. Тестируем возможности наших героев
hulk.hit(spiderMan.hitPower, spiderMan.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
hulk.hit(spiderMan.hitPower, spiderMan.speed);
console.log('hulk :', hulk);

spiderMan.hit(hulk.hitPower, hulk.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
spiderMan.hit(hulk.hitPower, hulk.speed);
console.log('spiderMan :', spiderMan);



// const Hero = function ({ health = 100, speed = 1.1, strange = 2 }) {
//     this.health = health;
//     this.speed = speed;
//     this.strange = strange;

//     // this.hit = function (hit, strange, speed) {
//     //     this.health = this.health - hit * strange * speed;
//     // }
// }

// // 2. Создаем героев на основе прототипа

// const ironMan = new Hero({ health: 100, speed: 1.3, strange: 2 });

// const capAmerica = new Hero({ health: 100, speed: 1.1, strange: 2 })

// // 3. Тестируем возможности наших героев

// // ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// // ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// // capAmerica.hit(20, ironMan.strange, ironMan.speed)
// // console.log('ironMan :', ironMan);
// // console.log('capAmerica :', capAmerica);

// // 4. Выносим методы в отдельные функции

// Hero.prototype.hit = function (hit, strange, speed) {
//     this.health = this.health - hit * strange * speed;
// }

// // console.dir(Hero.prototype);


// // 5. Тестируем
// ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// ironMan.hit(10, capAmerica.strange, capAmerica.speed);
// capAmerica.hit(20, ironMan.strange, ironMan.speed)
// console.log('ironMan :', ironMan);
// console.log('capAmerica :', capAmerica);

// game over












