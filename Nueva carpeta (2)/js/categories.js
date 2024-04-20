import { categories } from "./info.js";

const businessSection = document.getElementById("categories");

categories.forEach((category) => {
  // Crear el elemento div
  const categoryItem = document.createElement("div");
  categoryItem.classList.add("category-item");

  // Crear el elemento button
  const categoryBtn = document.createElement("button");
  categoryBtn.classList.add("category-btn");
  categoryBtn.style.backgroundColor = category.color;
  

  // Crear el elemento img
  const img = document.createElement("img");
  img.src = `./public/categories/${category.imgName}`;
  img.alt = category.name;

  // Agregar la imagen al botón
  categoryBtn.appendChild(img);

  // Crear el elemento h3
  const h3 = document.createElement("h3");
  h3.textContent = category.name;
  h3.classList.add("name");

  // Agregar el botón y el h3 al div
  categoryItem.appendChild(categoryBtn);
  categoryItem.appendChild(h3);

  businessSection.appendChild(categoryItem);
});
