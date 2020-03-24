"use strict";

class Product {
    constructor(product) {
        this.product = product;
    }

}

class User {
    constructor(login, password, products = []) {
        this.login = login;
        this.password = password;
        this.products = products;
    }
    createProduct = () => {
        const product = prompt("fdjhghfgfsdj")
        return new Product(product)
    }
}

const
const registerNewUser = function () {
    const login = prompt("enter your login");
    const password = prompt("enter your password");
    const user1 = new User(login, password);
    return user1;
}
registerNewUser();

const users = [user1];
console.log('users :', users);

const newLogin = prompt("enter your login");
const newPassword = prompt("enter your password");

if ((newLogin === user1.login) && (newPassword === user1.password)) {
    alert("welcome")
} else alert("wrong data")

const choice = confirm("Enter new product"); //true false

const createNewProduct = confirm("gdhjhgsajhsa");
createNewProduct && user1.createProduct();
!createNewProduct &&














