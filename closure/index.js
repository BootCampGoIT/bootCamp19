
// 1 ===========
// const getMult = function (n) {
//     return function () {
//         return console.log('result:', n * 1000);
//     }
// }
// const newResult = getMult(12);
// newResult();

// 2 ============
// const counter = function (n = 0) {
//     let count = n;
//     return function (z = 1) {
//         count += z;
//         return console.log('count', count);
//     }
// }
// const counter1 = counter();
// counter1()
// counter1()
// counter1()
// counter1()
// const counter2 = counter(10);
// counter2()
// counter2()
// counter2()
// counter2()
// const counter3 = counter();
// counter3(2)
// counter3(2)
// counter3(2)
// counter3(2)