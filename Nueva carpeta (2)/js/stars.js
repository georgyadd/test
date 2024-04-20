const container = document.getElementById("stars");

for (let i = 0; i < 5; i++) {
  // Crear el elemento img
  const img = document.createElement("img");
  img.src = `./public/empty-star.png`;
  img.alt = "empty-star";
  img.classList.add("star");

  //Agregar el elemento
  container.appendChild(img);
}

const active = "active";

const activeStars = (star) => {
  star.src = "./public/fill-star.png";
  star.classList.add(active);
};

const removeStars = (star) => {
  star.src = "./public/empty-star.png";
  star.classList.remove(active);
};

const hoverStar = (star) => {
  star.src = "./public/fill-star.png";
};

const unhoverStar = (star) => {
  if (!star.classList.contains(active)) {
    star.src = "./public/empty-star.png";
  }
};

const stars = document.querySelectorAll(".star");
stars.forEach((item, index) => {
  item.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index >= index2 ? activeStars(star) : removeStars(star);
    });
  });
});

stars.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    stars.forEach((star, index2) => {
      index >= index2 ? hoverStar(star) : unhoverStar(star);
    });
  });
});

container.addEventListener("mouseout", () => {
  stars.forEach((star) => {
    unhoverStar(star);
  });
});
