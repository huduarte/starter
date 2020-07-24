"use strict";

var arr = [1, 3, 4, 5, 8, 9]; //Percorrer o vetor e retornar uma informação

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //Consumir todo o vetor e transformar em uma unica informação

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //Filtrar valores - Retorna true ou false

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //Verificar se existe a informação dentro do array

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
