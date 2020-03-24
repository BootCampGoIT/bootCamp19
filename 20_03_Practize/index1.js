// const x = 5;
// console.log('x :', x);

// let y = 5;
// console.log('y :', y);

// y = 10;
// console.log('y :', y);

// let input = confirm("Your choice"); //true   false 

// (input === true) && console.log('Your choice is TRUE');

// (input === false) && console.log("Your choice is FALSE");


let input;
let sum = 0;

while (input !== null) {
    input = prompt("Enter your number"); 
    if (input === null) {dhahhd} 
    if (typeof Number(input) !== "number") { input = 0 } else { input = Number(input) }

    sum += input;
}

alert(`${sum}`)


