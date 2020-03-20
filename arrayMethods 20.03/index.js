// const numbers = [1, 2, 3, 4, 5];

// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 2) {
//         filteredNumbers.push(numbers[i])
//     }
// }

// // for (const number of numbers) {
// //     (number > 2) && filteredNumbers.push(number);
// // }

// console.log('filteredNumbers :', filteredNumbers);




// objects.method((item, index, array ) => {      })

// objects.forEach(function (item, index, arr) {
//     // console.log('item :', item, 'index: ', index, "arr: ", arr);
//     // console.log('arr[index] :', arr[index]);
// })

// const func = function() {
//     return
// }

// function func () {
//     return
// }
// let x = 5;
// let res = 100;

// const func = (y) => {
//     let res = y;

//     return function () {
//         return res += x
//     };
// }

// const getResult = func(5);
// console.log(getResult());
// console.log(getResult());
// console.log(getResult());


// const students = [
//     { id: 1, name: "Tymur2", isActive: false },
//     { id: 2, name: "Natasha", isActive: false },
//     { id: 3, name: "Denis", isActive: false },
//     { id: 4, name: "Illya", isActive: false },
//     { id: 5, name: "Tymur2", isActive: false },
// ];

// const result = students.map(({ name }, index, arr) => name === "Tymur2")
// console.log('result :', result); //

// ===============================
// const isSudentsActive = students.every(student => !student.isActive);
// console.log('isSudentsActive :', isSudentsActive);
// ====================================

// const isSudentsActive = students.some(student => student.name === "Illyfdsfsa");
// console.log('isSudentsActive :', isSudentsActive);

// ============================
// const user = students.find(student => student.name === "Tymur1");
// console.log('user :', user);

// ===============================

// students.map(student => (student.name === "Tymur1") && (student.isActive = true));
// students.forEach((student => console.log('student :', student)));

// ================================

// const studentsNames = students.map(student => student.name);
// console.log('studentsNames :', studentsNames);

// ================================

// const unactiveStudents = students.filter(student => student.id > 2)
// console.log('students :', unactiveStudents);

// ================================
// const numbers = [10, 2212, 212, 12, 43, 5434236, 544362];
// const sortNumbers = numbers.sort();
// console.log('sortNumbers :', sortNumbers);

// +======================
// const users = ['Andrii', "andrii", "Tymur", "tymur", "timur"];
// const sortUsers = users.sort();
// console.log('sortUsers :', sortUsers);

// const students = [
//     { id: 1, name: "Tymur2", isActive: false, posts: 1 },
//     { id: 2, name: "Natasha", isActive: false, posts: 2 },
//     { id: 3, name: "Denis", isActive: false, posts: 3 },
//     { id: 4, name: "Illya", isActive: false, posts: 4 },
//     { id: 5, name: "Tymur2", isActive: false, posts: 5 },
// ];

// const uniqueUser1 = students.reduce((accum, student) => {
//     (!accum.includes(student.name) && accum.push(student.name))
//     return accum
// }, [])
// console.log('uniqueUser :', uniqueUser1);

// const uniqueUser2 = students.reduce((accum, item) => {
//         //true                          //true
//     (!accum.includes("Tymur2") && accum.push("Tymur2"))
//     return accum    //["Tymur2", "Natasha", "Denis", "Illya" ]
// }, [])
// console.log('uniqueUser :', uniqueUser2);

// const _uniqueUser2 = {
//     accum: [],
//     method: () => {
//         if (!this.accum.includes(student.name)) {
//             this.accum.push(student.name)
//         }
//     }
// }



// ================================
// const uniqueUser = students.reduce((accum, student) => {
//     accum.every(item => item.name !== student.name) && accum.push(student)
//     return accum
// }, []).map(item => item.name);
// console.log('uniqueUser :', uniqueUser);

//  ===========================
// const unique = [];
// students.map(item => item.name).map(item => ((!unique.includes(item)) && (unique.push(item))))
// console.log('unique :', unique);

// // ===============================

// const students = [
//     { id: 1, name: "Tymur2", isActive: false, posts: 1 },
//     { id: 2, name: "Natasha", isActive: false, posts: 2 },
//     { id: 3, name: "Denis", isActive: false, posts: 3 },
//     { id: 4, name: "Illya", isActive: false, posts: 4 },
//     { id: 5, name: "Tymur2", isActive: false, posts: 5 },
// ];

// const arr = students.map(student => student.name); //
// const newUnique = Array.from(new Set(arr)); //
// console.log('unique :', newUnique);
// // ----- OR ----------------->
// const unique2 = [...new Set(arr)]; //
// console.log('unique2 :', unique2); //



// test - 1
// let arr = ['Lorem', 'Ipsum', 'Amet', 'gjhjk', 'bjnj'];

// //  for (let i = 0; i < arr.length; i++ ) {
// //      arr.length[i] = arr[i].length;
// //  }

// let arrLength = arr.map(item => item.length)

// // let arrLength = arr.map(item => (item.length < 10) ? item : 'not correct')

// console.log('arrLength :', arrLength); //



// ===================
// test-2
// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((numSum, num) => (numSum += num), 0)

// console.log('result :', result);

// ===============================
// test-3

// const students = [
//     { id: 1, name: "Tymur2", isActive: false, posts: 1 },
//     { id: 2, name: "Natasha", isActive: false, posts: 2 },
//     { id: 3, name: "Denis", isActive: true, posts: 3 },
//     { id: 4, name: "Illya", isActive: false, posts: 4 },
//     { id: 5, name: "Tymur2", isActive: true, posts: 5 },
// ];

// // const isActive = students[0].isActive; //false
// const { isActive } = students[0];

// let result = students.reduce((numSum, { isActive, posts }) => {
//     (isActive === true) && (numSum += posts)
//     return numSum;
// }, 0)

// console.log('result :', result);

// ex1 sort
// let arr = ['Lorem', 'Ipsum', 'Dolor', 'Amet'];
// let asd = [...arr].sort()
// console.log('arr :', asd);

// ex2 sort

// let arr = [1, 2, 5, 4, 10, 6];

// function sort(a, b) {
//     if (a < b) { return -1 }
//     if (a > b) { return 1 }
//     if (a === b) { return 0 }
// }
// let result = arr.sort((5, 4) => { return a - b }) //[1, 2, 4, 5]
// console.log('result :', result);
















