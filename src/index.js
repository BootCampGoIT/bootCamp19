"use strict"

// // [Lorem, ipsum, dolor, sit, amet]
// // console.log('string[6] :', string[string.length - 1]);
// // const arr = string.slice(6);
// // const arr = string.split(' ');
// // console.log(arr);

// // const res = arr.join(" ")
// // console.log('res :', res);




// let string = "Lorem ipsum dolor sit amet";
// // // LoremIpsumDolorAmet

// const arr = string.split(" ");
// console.log('arr :', arr);
// let camelCaseExpression = "";


// let bln = true;

// const user = {
//     isActive: false
// }

// user.isActive ? console.log("Active") : console.log("Passive")


// function getUnderline(i, length) {
//     return (i === length - 1) ? "" : " "
// }


// // (bln === false) ? console.log("false") : console.log("true")


// for (let i = 0; i < arr.length; i++) {
//     let res = arr[i][0].toUpperCase() + arr[i].slice(1) + getUnderline(i, arr.length);
//     camelCaseExpression = camelCaseExpression + res;
// }
// console.log('object :', camelCaseExpression);

// // console.log('object :', camelCaseExpression.slice(0, camelCaseExpression.length - 1));


// // camelCaseExpression.length-1


function sum(a, b) {
    return console.log('result:', a + b);
}

function minus(a, b) {
    return console.log('result:', a - b);
}

function getResult(a, b, callback) {
    callback(a, b)
}

getResult(5, 4, minus)


const calculator = {
    result: {
        x: 5
    },
    sum(a, b) {
        return console.log('result:', a + b);
    },
    minus(a, b) {
        return console.log('result:', a - b);
    },
    getResult(a, b, callback) {
        callback(a, b)
    }
}



// const { result: { x } } = calculator

const x = calculator.result.x;
console.log('x', x);








