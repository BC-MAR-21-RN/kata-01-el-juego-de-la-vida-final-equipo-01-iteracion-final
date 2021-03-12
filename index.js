var prompt = require('prompt-sync')();
const JuegoVida = require('./src/app/juegoVida');

var askGenerations = prompt('¿Cuantas generaciones desea ver? ');
var askCellsLiveInitial = prompt(`¿Rango de celulas vivas con 
las que desea comenzar (3 - valor)? `);

if (parseInt(askCellsLiveInitial, 10) > 31 ||
    parseInt(askCellsLiveInitial, 10) <= 2) {
  console.log(`La cantidad de celulas vivas debe ser menor que 32 y
  mayor que 2`);
} else {
  var prueba = new JuegoVida(4, 8, askCellsLiveInitial, askGenerations);
  prueba.startGame();
}
