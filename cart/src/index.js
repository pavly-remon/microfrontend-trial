import ShoppingCart from "./assets/shopping-cart.png";
import "./styles.scss";

function mount(elem) {
  const title = document.createElement("h2");
  title.innerText = "Shopping Cart";
  elem.appendChild(title);

  const shoppingCartImg = document.createElement("img");
  shoppingCartImg.src = ShoppingCart;
  shoppingCartImg.alt = "Shopping Cart";
  elem.appendChild(shoppingCartImg);
}

if (process.env.NODE_ENV === "development") {
  const cartContainer = document.createElement("div");
  if (cartContainer) {
    mount(cartContainer);
  }
}

export { mount };
