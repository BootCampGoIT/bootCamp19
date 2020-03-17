
// 1 ===========
// const getMult = function (n) {
//     return function () {
//         return console.log('result:', n * 1000);
//     }
// }
// const newResult = getMult(12);

// newResult();

// =================================
// const getMult = function () {
//     let n = 0;
//     return function () {
//         return console.log('result:', n += 1);
//     }
// }
// const newResult = getMult();
// newResult();
// newResult();
// newResult();

// 2 ============
const counter = function (n = 0) {
    let count = n;

    return function (step = 1) {
        count += step;
        return console.log('count', count);
    }

}
const counter1 = counter(50);
counter1(50)
counter1(2)
counter1(2)
counter1(2)
console.log("================");

const counter2 = counter();
counter2()
counter2()
counter2()
counter2()
console.log("================");

const counter3 = counter();
counter3(2)
counter3(2)
counter3(2)
counter3(2)


