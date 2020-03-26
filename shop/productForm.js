const products = {
    items: [],
    add(product, price) {
        const item = {
            id: `${Date.now()}`,
            product: product,
            price
        }

        this.items = [...this.items, item]
        return item
    },
    delete(id) {
        this.items = [...this.items.filter(item => item.id !== id)]
    }
}

function createProductCard(item) {
    const { id, product, price } = item;
    return `
        <li class="productItem" data-id=${id}>
            <h2 class="productName">${product}</h2>
            <p class="productPrice">${price}</p>
            <button class="cardButton">Delete</button>
        </li>
        `
}

const refs = {
    productForm: document.querySelector('.productForm'),
    productList: document.querySelector(".productList"),
    pagination: document.querySelector(".pagination"),
}

refs.productForm.addEventListener("submit", handleSubmit);
refs.productList.addEventListener('click', deleteProductMarkup);



function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const productName = form.elements.name.value;
    const productPrice = form.elements.price.value;
    const currentProduct = products.add(productName, productPrice);
    const newProduct = createProductCard(currentProduct);
    injectProductMarkup(refs.productList, newProduct);
    form.reset();

    // refactoring need !!!!!!!!!
    // pagination.innerHTML = pageGenerator(products.items);
}

function injectProductMarkup(list, card) {
    list.insertAdjacentHTML('beforeend', card);
}

function deleteProductMarkup(e) {
    if (e.target.nodeName !== "BUTTON") return;
    const button = e.target;
    const li = button.closest(".productItem");
    const id = li.dataset.id
    products.delete(id);
    li.remove();
    // refs.productList.removeChild(li);
}

// ============= pagination ===========
// function pageGenerator(array) {
//     let pageNumbers = Math.ceil(array.length / 3);
//     // console.log('products.length :', products.length);
//     // console.log('pageNumbers :', pageNumbers);

//     let pages = '';
//     for (let i = 1; i <= pageNumbers; i++) {
//         let page = `<div class="pag"> ${i} </div>`
//         pages += page
//     }
//     return pages;
// }

// const pagination = document.querySelector('.pagination');
// pagination.insertAdjacentHTML('afterbegin', pageGenerator(products));
// pagination.addEventListener('click', pageHandler);
// pagination.querySelector('.pag').classList.add('activePag')

// function pageHandler(e) {
//     e.preventDefault();
//     if (e.target === e.currentTarget) {
//         return
//     }
//     const currentActiveLink = pagination.querySelector('.activePag');
//     (currentActiveLink) && currentActiveLink.classList.remove('activePag');
//     e.target.classList.add('activePag');
// }



























