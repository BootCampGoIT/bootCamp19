// 1 ================
// "use strict"
// const getContext = function () {
//     console.log('current Context :', this);
// }
// getContext(); //window //undefined

// 2 ===============
// const getContext = function () {
//     console.log('current Context :', this);
// }
// const object = {
//     context: "object",
//     getContext,
// }
// object.getContext() //object

// 3 ====== bind ===========
// const logInfo = function () {
//     console.log('this.name :', this.name);
//     console.log('this.status :', this.status);
//     console.log('this.course :', this.course);
// }

// const students = [{
//     id: 'vfgndshmfshdvfhmsdfbmhdsfsdsc',
//     name: "Andrii",
//     status: "teacher",
//     course: "bootCamp 19",
// }, {
//     id: 'gfdfgfdgdf',
//     name: "Maxim",
//     status: "student",
//     course: "bootCamp 19",
// }, {
//     id: 'vfgndshmfshdvfhmdfgdfgdfgsdfbmhdsfsdsc',
//     name: "Nikita",
//     status: "lazy student",
//     course: "bootCamp 19",
// }]

// for (const student of students) {
//     // logInfo.call(student);
//     // (student.course === "bootCamp 19") && console.log('student.name :', student.name);
//     (student.id === 'gfdfgfdgdf') ? console.log('student.name :', student.name) : console.log("not exist");
//     // ((student.status === "student") || (student.status === "lazy student")) && console.log('student.name :', student.name);
// }


// logInfo.call(person);

// === alternative expression with bind ===
// logInfo.bind(person)()

// 4 ======== bind ===============
// 'use strict';

// const logInfo = function () {
//     console.log("name:", this.name);
//     console.log("status:", this.status);
//     console.log("course:", this.course);
// }
// const andrii = {
//     name: "Andrii",
//     status: "teacher",
//     course: "bootCamp 19"
// }
// const maxim = {
//     name: "Maxim",
//     status: "student",
//     course: "bootCamp 19"
// }

// logInfo.call(andrii)
// // logInfo.bind(andrii)();

// // const logger = logInfo.bind(andrii);
// // logger();

// // logInfo.call(maxim);

// ==================
// const logInfo = function (status) {
//     this.newStatus = status;
//     console.log('this :', this);
// }
// const andrii = {
//     name: "Andrii",
//     status: "teacher",
//     course: "bootCamp 19"
// }
// logInfo.call(andrii, 'mentor')

// 5 =======================
// const user = {
//     userName: "castom name",
//     logInfo: function (userName1111111111, status, course) {
//         // console.log('userName :', this.userName);
//         this.userName = userName1111111111
//         // console.log('userName :', userName1111111111);
//         // console.log('status :', status);
//         // console.log('course :', course);
//         console.log('this :', this);
//     }
// }
// user.logInfo('Nikita', 'student', "bootCamp 19")

// ======================
// const user = {
//     userName: "castom name",
//     logInfo: function (userName1111111111) {
//         this.userName = userName1111111111
//     }
// }
// user.logInfo('Nikita', )

// 6 ====================
// const user = {
//     userName: "default",
//     status: "default",
//     course: "default",


//     logInfo: function () {
//         console.log('userName :', this.userName);
//         console.log('status :', this.status);
//         console.log('course :', this.course);
//     }
// }
// const vlad = {
//     userName: "Vlad",
//     status: "student",
//     course: 'BootCamp 25'
// }
// const dimonchik = {}

// user.logInfo()

// const getInfo = user.logInfo.bind(dimonchik);
// getInfo();

// // alternative expression call
// // user.logInfo.call(vlad)


// Practize at home
// const numbers = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`${i}`, numbers[i]);
// }
// for (const number of numbers) {
//     console.log(`${numbers.indexOf(number)}`, number);
// }



// logger()