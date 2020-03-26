import products from './products.js';
// ================== pagination ===================
function pageGenerator(array) {
    let pageNumbers = Math.ceil(array.length / 3);
    let pages = '';
    for (let i = 0; i <= pageNumbers; i++) {
        const page = `<div class="pag">${i}</div>`
        pages += page
    }
    return pages;
}

const pagBlock = document.querySelector('.pagBlock');
pagBlock.insertAdjacentHTML("afterbegin", pageGenerator(products));
pagBlock.querySelector(".pag").classList.add("activePag");

function pagHandler(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) { return }
    const activeLink = pagBlock.querySelector('.activePag');
    (activeLink) && activeLink.classList.remove('activePag')
    e.target.classList.add("activePag");
}

pagBlock.addEventListener("click", pagHandler);


