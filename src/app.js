import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
 function generarCartaAleatoria() {
  const palos = ['diamond', 'heart', 'spade', 'club'];
  const simbolos = ['♦','♥','♠','♣'];
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const indicePalo = Math.floor(Math.random() * 4);
  const indiceValor = Math.floor(Math.random() * 13);

  const palo = palos[indicePalo];
  const simbolo = simbolos[indicePalo];
  const valor = valores[indiceValor];

  const cartaDiv = document.getElementById("carta");
  cartaDiv.className = `card ${palo}`;
  cartaDiv.innerHTML = `${valor}${simbolo}`;
 }

 generarCartaAleatoria();
};
