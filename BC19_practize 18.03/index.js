
"use strict";

// const Hero = function (name = "Anonimus", xp = 100) {
//     this.name = name;
//     this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//     console.log(`${this.name} gained ${amount} experience points`);
//     this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//     Hero.call(this, name, xp)
//     this.weapon = weapon;
// };


// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// // if (newWarrior.constructor.name === "Hero") console.log('OK');

// const newWarrior = new Warrior("Mango", 100, 'axe');

// Warrior.prototype.attack = function () {
//     console.log(`${this.name} attacks with ${this.weapon}`);
// };
// console.dir(newWarrior);

// const newHero = new Hero("Mangocdgsd", 100);

// Hero.prototype = Object.create(Warrior.prototype)
// console.dir(newHero);

// const poly = new Warrior('Poly', 200, 'sword');

// class BMW {
//     constructor(name, speed = 0) {
//         this.name = name;
//         this.speed = speed;
//     }

//     get move() {
//         console.log('this.speed :', this.speed);
//         return this.speed;
//     }
//     //=====prototype
//     set move(value) {
//         this.speed += value;
//         console.log('this.speed :', this.speed);
//         // console.log(`I, ${this.name}, am moving!`);
//     }
//     //=====prototype
// }

// const GT3236 = new BMW("Bluebird");
// GT3236.move;
// GT3236.move = 2;
// GT3236.move;
// GT3236.move = 12;
// GT3236.move;
// GT3236.move = 100;

// const GT3236 = {
//     name: "Bluebird",
//     speed: 0,
// }

// GT3236.speed = 2;
// console.log('GT3236 :', GT3236);
// GT3236.speed = 12;
// console.log('GT3236 :', GT3236);
// GT3236.speed = 100;
// console.log('GT3236 :', GT3236);

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     move() {
//         console.log(`I, ${this.name}, am moving!`);
//     }
// }
// class Dog extends Animal {
//     constructor(name, breed) {
//         // Вызвать конструктор Animal с аргументом name
//         super(name);
//         this.breed = breed;
//     }
//     bark() {
//         console.log('woof!');
//     }

//     moveAndMakeSound() {
//         super.move();
//         this.bark();
//     }
// }

// class Minidog extends Dog {
//     constructor(name, breed, length) {
//         // Вызвать конструктор Animal с аргументом name
//         super(name, breed);
//         this.length = length;
//     }
// }

// const minidog = new Minidog("dsffsfdsf", "dhgdhs", 'gdhgdssd');
// console.dir(minidog)
// minidog.moveAndMakeSound();

// const dog = new Dog('Mango', 'shepherd');
// console.dir(dog);
// dog.move(); // I, Mango, am moving!
// dog.bark(); // woof!
// dog.moveAndMakeSound(); // I, Mango, am moving! woof!


// class Rabbit {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let rabbit = new Rabbit("Rab");
// console.dir(rabbit)

// // hasOwnProperty method is from Object.prototype
// alert(rabbit.hasOwnProperty('name')); // true
// class Rabbit  {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let rabbit = new Rabbit("Rab");

// console.dir(rabbit); // true

class Car {
    /*
     * Добавь статический метод `getSpecs(car)`,
     * который принимает объект-машину как параметр и выводит
     * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
     */

    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */
    constructor() { }

    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */

    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */
    turnOn() { }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */
    turnOff() { }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */
    accelerate(value) { }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
    decelerate(value) { }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    drive(hours) { }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000















