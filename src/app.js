/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector(".the-excuse").innerHTML = generateExcuse();
  });
  //document.querySelector(".imagen").src = selectedImage(generateExcuse().);
  //document.querySelector(".the-excuse").innerHTML = generateExcuse();
  console.log(generateExcuse());
};

//var selectedPersonaje = fotos[Math.floor(Math.random() * who.length)];

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let personaje = Math.floor(Math.random() * who.length);
  /*selectedPersonaje = fotos[personaje];*/
  //console.log(selectedPersonaje);
  return (
    who[personaje] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)]
  );
};

//let selectImage = (indice) => {
//let fotos = [
"https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-m.jpg",
  "https://escudodigital.com/wp-content/uploads/2020/05/abuela-condenada-fotos-menores-696x522.jpg",
  "https://i.blogs.es/efd01d/comedy-wildlife-awards-2020-winner/450_1000.jpg",
  "https://vod-hogarmania.atresmedia.com/hogarmania/images/images01/2013/06/17/5c00f4be5a2c110001775696/1239x697.jpg";
//];
//return fotos[indice];
//};
