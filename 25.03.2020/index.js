'use strict'

// ========== 1 ===================

// let array = ["Andrii", "Nikita", "Vasya", "Sergii"];

// const myDiv = document.querySelector('#block')

// const fragment = document.createDocumentFragment()

// for (const item of array) {
//     const insetP = document.createElement('p')
//     insetP.innerText = item;
//     fragment.prepend(insetP)
// }

// myDiv.append(fragment)

// const elemArr = myDiv.querySelectorAll('p');

// const newArray = [...elemArr];

// let findIndex = null;

// // newArray[0].textContent = "fgushdgfhgfhds";
// newArray.map((item, index) => {
//     if (item.textContent === "Vasya") {
//         findIndex = index;
//     }
// })

// if (findIndex !== null) { elemArr[findIndex].remove() };

// console.log(elemArr[1])


// console.log(elemArr[1].parentElement);
// elemArr[1].parentElement.removeChild(elemArr[1]);

// ===================== 2 ==========================
// Удаление li по клику

// const ulList = document.querySelector('#list')

// const arrLi = document.querySelectorAll('#list li')
// // console.log(arrLi)
// for (const item of arrLi) {
//     item.addEventListener('click', () => {
//         item.remove(this);
//     })
// }
//  ============ 2 - 1 ==============

// const arrLi = document.querySelectorAll('#list li');
// console.log(arrLi);

// const arr = [...arrLi];
// console.log(arr);


// document.querySelector('#list').addEventListener('mouseover', (e) => {
//     e.target.style.color = "blue"
// })

// document.querySelector('#list').addEventListener('mouseout', (e) => {
//     e.target.style.color = "black"
// })

// document.querySelector('#list').addEventListener('click', (e) => {
//     e.target.remove(this);
//     // e.currentTarget.remove();
//     // console.log('e.target :', e.target);
//     // console.log('e.currentTarget :', e.currentTarget);
// })

// ======================= 2-2 ================
// const div = document.querySelector("div");

// document.querySelector('#list').addEventListener('click', (e) => {
//     div.textContent = e.target.dataset.index;
// })

// ================== 2 - 3 ===============
const myList = document.querySelector("#list");

myList.addEventListener('click', addInput);

function addInput(e) {
    const myInput = document.createElement("input");
    myInput.value = e.target.textContent;
    e.target.textContent = "";
    myInput.style.border = "1px dotted red";
    e.target.append(myInput);
    myList.removeEventListener('click', addInput);
    myInput.addEventListener('blur', (event) => {
        e.target.textContent = event.target.value;
        myInput.removeEventListener('blur', (event) => {
            e.target.textContent = event.target.value;
        })
        myList.addEventListener('click', addInput);
    })
}
// const button = document.querySelector("button");
// console.log('button :', button);

// function asd () {
//         const img = document.createElement("img");
//         img.src = "https://rusargument.ru/data/photo/032018_019169682783.jpg"

//     }

// button.addEventListener("click", asd);









