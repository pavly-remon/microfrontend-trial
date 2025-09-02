import { faker } from "@faker-js/faker";

import "./styles.scss";

const productsContainer = document.getElementById("products-container");

const products = [];

for (let i = 0; i < 5; i++) {
  products.push({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
  });
}
const productListElem = document.createElement("ul");
productListElem.classList.add("product-list");

products.forEach((product) => {
  const productItemElem = document.createElement("li");
  productItemElem.innerHTML = `
    <h2>${product.name}</h2>
    <p>Price: $${product.price}</p>
  `;
  productListElem.appendChild(productItemElem);
});

productsContainer.innerHTML = "";
const title = document.createElement("h2");
title.innerText = "Products List";
productsContainer.appendChild(title);
productsContainer.appendChild(productListElem);
