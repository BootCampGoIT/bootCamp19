// 1 ================
// const getContext = function () {
//     console.log('current Context :', this);
// }
// getContext(); //window

// 2 ===============
// const getContext = function () {
//     console.log('current Context :', this);
// }
// const object = {
//     context: "object",
//     getThisContext: getContext
// }
// object.getThisContext() //object

// 3 ====== bind ===========
// const logInfo = function () {
//     console.log('this.name :', this.name);
//     console.log('this.status :', this.status);
//     console.log('this.students :', this.students);
// }
// const person = {
//     name: "Andrii",
//     status: "teacher",
//     students: "bootCamp 19"
// }
// const getInfo = logInfo.bind(person);
// getInfo();
// // === alternative expression with bind ===
// // logInfo.bind(person)()

// 4 ======== bind ===============
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
// logInfo.call(andrii);
// logInfo.call(maxim);

// 5 =======================
// const user = {
//     userName: "default",
//     logInfo: function (userName, status, course) {
//         console.log('userName :', userName);
//         console.log('status :', status);
//         console.log('course :', course);
//     }
// }
// user.logInfo('Nikita', 'student', "bootCamp 19")

// 6 ====================
// const user = {
//     userName: "default",
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
// const getInfo = user.logInfo.bind(vlad);
// getInfo();
// // alternative expression call
// // user.logInfo.call(vlad)


