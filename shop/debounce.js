import products from './productsTest.js';
console.log('products :', products);


function func(e) {
    const value = e.target.value;
    const newProducts = [...products.filter(item => item.title.includes(`${value}`))]
    console.log('newProducts :', newProducts);
}

// document.querySelector('.debouncedInput')
//     .addEventListener('input', func);


document.querySelector('.debouncedInput')
    .addEventListener('input', _.debounce(func, 1000));


