'use strict';

// const element = document.querySelector('ul');

// const fragment = document.createDocumentFragment();
// const browsers = ['Firefox', 'Chrome', 'Opera',
//     'Safari', 'Internet Explorer'];

// browsers.forEach(function (browser) {

//     const li = document.createElement('li');
//     li.textContent = browser;
//     li.classList.add('listItem');
//     fragment.appendChild(li);
// });

// element.appendChild(fragment);

// ======= IIFE ==========
// const browsers = ['Firefox', 'Chrome', 'Opera',
//     'Safari', 'Internet Explorer'];

// (function getInfo() {

//     function getName(item1111) {
//         return `===========_${item1111}_====================`
//     }

//     let string = '';
//     browsers.map(item => {
//         string += `<li><span>${item}</span><span>${getName(item)}</span></li>`;
//         console.log('string :', string);
//     })

// }());

// ======================


// ======================== EVENTS ==============================

// const myButton = document.querySelector('button');

// myButton.addEventListener('click', function (event) {
//     console.log(event)
// })

// =================

// const user = {
//     name: "",
//     email: "",
//     password: "",
//     // result: "",
//     // check: ""
// }

// const myForm = document.querySelector("form");
// console.log(myForm.elements);

// myForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const name = myForm.elements.name.value;
//     const email = myForm.elements.email.value;
//     const password = myForm.elements.password.value;

//     user.name = name;
//     user.email = email;
//     user.password = password;

// });

// ======== my Example =============
// const form = document.querySelector('form');

// const user = {
//     name: "",
//     email: "",
//     password: "",
//     result: "",
//     check: ""
// }

// function getInfo(event, name, value) {
//     console.log(event.target, event.currentTarget);
//     user[name] = value;
// }

// form.addEventListener('input', (e) => {
//     e.preventDefault();
//     // getInfo(event, e.target.name, e.target.value)
//     getWithFormData(e)
// });


// function getWithFormData(e) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     console.log('formData :', formData);
//     formData.forEach((value, key) => {
//         user[key] = value
//     })
//     console.log('user :', user);
// }

// const button = document.querySelector("button");
// button.addEventListener("click", () => console.log('user :', user));



// =============  Form DAta  ========
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     // getInfo(e.target.name, e.target.value);
//     getWithFormData(e)
// });

// function getWithFormData(e) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);


//     formData.forEach((value, key) => {
//         user[key] = value;

//     })
//     console.log('user :', user);
// }


// ===================
const input = document.querySelector('.input11');

input.addEventListener('focus', () => {
    input.style.backgroundColor = "pink";
})

input.addEventListener('blur', () => {
    input.style.backgroundColor = "white";
})

input.addEventListener("input", (e) => {
    console.log('input', e.target.value);
})

input.addEventListener("change", (e) => {
    console.log('change', e.target.value);
})

input.addEventListener('')



































