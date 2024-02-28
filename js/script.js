import { getDatas } from "../api/fetchAPI.js";
import { cardProduct } from "../components/cardProduct.js";
import { cardUser } from "../components/cardUser.js";

const productDatas = await getDatas("products");
const userDatas = await getDatas("users");

const renderAreaProduct = document.getElementById('contentProduct');
const renderAreaUser = document.getElementById('contentUser');

productDatas.map(product => {
    renderAreaProduct.innerHTML += cardProduct(product);
});

userDatas.map(user => {
    renderAreaUser.innerHTML += cardUser(user);
});

