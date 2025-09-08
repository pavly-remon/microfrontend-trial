import { faker } from "@faker-js/faker";

import "./styles.scss";

const mount = (elem) => {
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

  elem.innerHTML = "";
  elem.classList.add("container");
  const title = document.createElement("h2");
  title.innerText = "Products List";
  elem.appendChild(title);
  elem.appendChild(productListElem);
};

export { mount };

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#products-container");
  if (devRoot) {
    mount(devRoot);
  }
}
