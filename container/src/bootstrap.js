import { mount } from "products/ProductIndex";
import { mount as mountCart } from "cart/CartIndex";

const productsListElem = document.querySelector("#products-list");
mount(productsListElem);

const cartContainer = document.querySelector("#cart-container");
mountCart(cartContainer);
