import ShoppingCart from "./assets/shopping-cart.png";
import "./styles.scss";

const cartContainer = document.getElementById("cart-container");
const title = document.createElement("h2");
title.innerText = "Shopping Cart";
cartContainer.appendChild(title);

const shoppingCartImg = document.createElement("img");
shoppingCartImg.src = ShoppingCart;
shoppingCartImg.alt = "Shopping Cart";
cartContainer.appendChild(shoppingCartImg);
