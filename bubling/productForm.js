const products = {
    items: [],
    add(product, price) {
        const item = {
            id: Date.now(),
            product,
            price
        }
        this.items.push(item);
        return item
    },
    delete(id) {
        this.items = [...this.items.filter(item => item.id !== id)]
    }
}

const refs = {
    productForm: document.querySelector(".productForm"),
    productList: document.querySelector(".productList"),
}

refs.productForm.addEventListener("submit", handleSubmit);
refs.productList.addEventListener("click", deleteProductCard)

function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const productName = form.elements.name.value;
    const productPrice = form.elements.price.value;

    const product = products.add(productName, productPrice);

    const newProduct = createProductCard(product);

    addNewProductCard(refs.productList, newProduct);
    form.reset()

}

function createProductCard(item) {
    const { id, product, price } = item;
    return `
    <li class="productItem" data-id=${id}>
        <h2 class="productName">${product}</h2>
        <h4 class="productPrice">$ ${price}</h4>
        <button class="cardButton">Delete</button>
    </li>    `
}

function addNewProductCard(list, card) {
    list.insertAdjacentHTML('beforeend', card)
}

function deleteProductCard(e) {
    if (e.target.nodeName !== "BUTTON") return
    const button = e.target;
    const li = button.closest('.productItem');
    const id = Number(li.dataset.id)
    products.delete(id);
    // refs.productList.removeChild(li)
    li.remove()
}






