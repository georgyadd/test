import { business } from "./info.js";

const businessSection = document.getElementById("business");

const createItemList = (have, txt) => {
  const item = document.createElement("li");
  item.classList.add("business-list-item");

  const img = document.createElement("img");
  const imgResult = have ? "check.png" : "cross.png";
  img.src = `./public/${imgResult}`;
  img.alt = imgResult.split(".")[0];

  item.appendChild(img);
  const text = document.createTextNode(txt);
  item.appendChild(text);

  return item;
};

business.forEach((busine) => {
  // Crear el elemento div
  const businessItem = document.createElement("div");
  businessItem.classList.add("business-item");

  // Crear el elemento img
  const img = document.createElement("img");
  img.src = `./public/business/${busine.imgName}`;
  img.alt = busine.name;

  // Agregar la imagen al item
  businessItem.appendChild(img);

  // Crear el elemento div para el body
  const businessBody = document.createElement("div");
  businessBody.classList.add("business-item-body");

  //Creamos el elemento nombre
  const businessName = document.createElement("h3");
  businessName.classList.add("business-name");
  businessName.textContent = busine.name;

  //Creamos el elemento horario
  const businessTime = document.createElement("p");
  businessTime.classList.add("business-time");
  businessTime.textContent = `Horario de ${busine.starTime} a ${busine.endTime}`;

  //Creamos el elemento descripcion
  const businessDesc = document.createElement("p");
  businessDesc.classList.add("business-desc");
  businessDesc.textContent = busine.desc;

  //Creamos el elemento direccion
  const businessDir = document.createElement("p");
  businessDir.classList.add("business-dir");
  businessDir.textContent = busine.location;

  //Creamos el elemento telefono
  const businessTel = document.createElement("p");
  businessTel.classList.add("business-tel");
  businessTel.textContent = `Contacto: ${busine.tel}`;


  //Agregamos los elementos al body-item
  businessBody.appendChild(businessName);
  businessBody.appendChild(businessTime);
  businessBody.appendChild(businessDesc);
  businessBody.appendChild(businessDir);
  businessBody.appendChild(businessTel);
  

  //Agregamos el body al item
  businessItem.appendChild(businessBody);

  //Creamos la lista
  const businessList = document.createElement("ul");
  businessList.classList.add("business-list");

  //Creamos los items de la lista

  //Si tiene establecimiento fisico
  const stablish = createItemList(busine.haveLocal, "Establecimiento Físico");

  //Si tiene entrega a domicilio
  const delivery = createItemList(busine.delivery, "Envios a Domicilio");

  //Si tiene pago con tarjeta
  const payCard = createItemList(busine.cardPayment, "Pagos con tarjeta");

  //Agregamos los items a la lista
  businessList.appendChild(stablish);
  businessList.appendChild(delivery);
  businessList.appendChild(payCard);

  //Agregamos la lista al item
  businessItem.appendChild(businessList);

  //Agregamos el item a la seccion
  businessSection.appendChild(businessItem);
});
