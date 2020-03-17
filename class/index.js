
// const Hero = function ({ name = "", health = 100, hitPower = 1.1, speed = 1 }) {
//     this.name = name;
//     this.health = health;
//     this.hitPower = hitPower;
//     this.speed = speed;
// }
// Hero.prototype.hit = function ({ hitPower, speed }) {
//     this.health -= hitPower * speed;
// }


// const spiderMan = new Hero({ name: "spiderMan", hitPower: 1.3, speed: 2.3 });

// const hulk = new Hero({ name: "Hulk", hitPower: 2.3 });


// hulk.hit(spiderMan);
// hulk.hit(spiderMan);
// hulk.hit(spiderMan);
// hulk.hit(spiderMan);
// hulk.hit(spiderMan);
// // hulk.hit(spiderMan.hitPower, spiderMan.speed);
// // hulk.hit(spiderMan.hitPower, spiderMan.speed);
// // hulk.hit(spiderMan.hitPower, spiderMan.speed);
// // hulk.hit(spiderMan.hitPower, spiderMan.speed);
// console.log('hulk :', hulk);

// // spiderMan.hit(hulk.hitPower, hulk.speed);
// // spiderMan.hit(hulk.hitPower, hulk.speed);
// // spiderMan.hit(hulk.hitPower, hulk.speed);
// // spiderMan.hit(hulk.hitPower, hulk.speed);
// // console.log('spiderMan :', spiderMan);


// // const { hitPower: sMhitPower, speed: sMspeed } = spiderMan;
// // console.log('object :', hitPower, speed);

// const Hero = function (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Hero.prototype.getInfo = function () {
//     console.log('this.name :', this.name);
// }

// const ironMan = new Hero("IronMan", 13)
// console.log('ironMan :', ironMan);

// const proskoviaIvanivna = {
//     name: "IronMan1",
//     age: 93,
//     forGameProperty: {
//         hp: 70,
//         hitPower: 1.2,
//         speed: 1.1
//     }
// }

// const coronaVirus = {
//     name: "IronMan1",
//     age: 23,
//     forGameProperty: {
//         hp: 100,
//         hitPower: 5,
//         speed: 2
//     }
// }


// class Hero1 {
//     constructor({ name, age, forGameProperty: { hp, hitPower, speed } }) {
//         this.name = name;
//         this.age = age;
//         this.hp = hp;
//         this.hitPower = hitPower;
//         this.speed = speed;
//     }
//     get healthPower() {
//         return this.hp;
//     }

//     set healthPower({ speed, hitPower }) {
//         if (this.hp <= 0) { console.log('granny is ... :') }
//         else { this.hp = this.healthPower - hitPower * speed };
//     }

//     // set healthPower(forGameProperty) {
//     //     const { speed, hitPower } = forGameProperty;
//     //     this.hp = this.hp - hitPower * speed
//     // }
// }

// const priv = new Hero1(proskoviaIvanivna);
// const covid = new Hero1(coronaVirus);

// console.log('priv.healthPower :', priv.healthPower);



// priv.healthPower = coronaVirus.forGameProperty;
// console.log('priv :', priv);
// priv.healthPower = coronaVirus.forGameProperty;
// console.log('priv :', priv);
// priv.healthPower = coronaVirus.forGameProperty;
// console.log('priv :', priv);
// priv.healthPower = coronaVirus.forGameProperty;
// console.log('priv :', priv);
// priv.healthPower = coronaVirus.forGameProperty;
// console.log('priv :', priv);
// priv.healthPower = coronaVirus.forGameProperty;
// console.log('priv :', priv);
// priv.healthPower = coronaVirus.forGameProperty;
// console.log('priv :', priv);


// ================= example2

// const Hero = function (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Hero.prototype.getInfo = function () {
//     console.log('this.name :', this.name);
// }

// class Hero1 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     get newName() {
//         return this.name;
//     }
//     set newName(name) {
//         this.name = name;
//     }

//     getInfo = (something) => {
//         this.name = something;
//     }
// }

// const hero = new Hero("spiderMan", 18);
// const hero1 = new Hero1("capAmerica", 85);

// console.log(hero);
// hero.getInfo();
// console.log(hero1);
// hero1.newName = "ironMan";
// console.log('hero1 :', hero1);
// hero1.getInfo("hulk");
// const newFunction = function (callBack) {
//     callBack("hjgjffggh");
// }
// newFunction(hero1.getInfo)
// console.log('hero1 :', hero1);

// example3
// class Hero1 {
//     static qqqqqqqq = "sggdahjdjdg";

//     static getInfo() {
//         console.log('qqqqqqqq :', this.qqqqqqqq);
//     }

//     constructor(name = "covid", property = 19) {
//         this.name = name;
//         this.property = property
//     }
// }

// class HumanHero extends Hero1 {
//     constructor(name, property) {
//         super(name, property)
//         // this.name = name;
//         // this.property = property;
//     }
// }

// console.dir(Hero1);

// const newHero = new HumanHero("Fairy", 15);
// Hero1.getInfo()


// ex3
// const obj = {
//     name: "1",
//     age: 2
// }

// const newObject = Object.create(obj);
// console.log('newObject :', newObject);




// example rest
// function getNumbers(...rest) {

//     console.log('rest :', rest);
// }

// getNumbers(1, 2);
// getNumbers(1, 2, "fsgjsfgh", "ghdghjdgs");
// getNumbers(1, 2, 3, 4);


// example spread
// const array = [1, 2, 3, 4, 5];

// function getNumbers(a, b, ...rest) {

//     console.log('parametr :', rest);
// }

// getNumbers(...array);


// example destruct {}
// const object = {
//     name: "Lorem",
//     b: {
//         // quantity: 15,

//     }
// }


// const object1 = {
//     name: "Ipsum",
//     b: {
//         quantity: 25,
//         c: {
//             rooms: 4
//         }
//     }
// }

// function hotel({ name, b: { quantity = "no information", c: { rooms = 10 } = {} } }) {
//     console.log(`In hotel ${name} - ${quantity} places free and ${rooms}`);
// }

// hotel(object);
// hotel(object1);


// example destruct []

// const a = 10;
// const b = 20;
// const c = 30;
// const array = [c, [a, b]];

// const array = [30, [10, 20], 4444, 5555];

// const [c, b, ...rest] = array;


// console.log('b :', b);
// console.log('c :', c);
// console.log('rest :', rest);

// console.log(...array);

// function get(a, c) {
//     console.log('a :', a);
//     console.log('c :', c);
// }

// const [a, , c] = array

// get(a, c)

// example object destruct

// const hulk = {
//     name: "Hulk",
//     age: 35
// }

// const newData = {
//     strange: 250
// }


// const newHulk = Object.assign({}, hulk, newData);

// console.log('newHulk :', newHulk);




// array-function

// class Hero1 {
//     constructor(name = "covid", property = 19) {
//         this.name = name;
//         this.property = property
//     }
//     getInfo = () => {
//         return "fsdfdssd";
//     }
// }

// // Hero1.getInfo()

// const newHero = new Hero1("gdhsds");
// // console.dir(newHero);


// console.dir(Hero1);
// console.log('name:', newHero.getInfo());

// const fn = function (callback) {
//     callback()
// }

// fn(Hero1.getInfo)


// const newArray = [1, 2, 3, 4, 5]

// const array = [...newArray, 323, 2332, 3232, 23];

// const array2 = [...array];
// console.log('array2 :', array2);

// newArray[4] = 222222;

// console.log('array2 :', array2);

// console.log('newArray :', newArray);














