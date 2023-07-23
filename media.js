/*
Álvaro está economizando para viajar para a europa. Todo dia ele coloca mais dinheiro no seu cofre. A quantidade de dinheiro que ele coloca no cofre a cada dia está registrada no array lista. Faça um programa que calcule quanto Álvaro vem acumulando, em média, por dia.

Input Format

A entrada é uma lista que contém quanto Álvaro guarda no cofre a cada dia.

Constraints

A lista tem de 0 a 1000 itens.

Output Format

Imprima na tela o quanto Álvaro vem acumulando, em média, por dia.

Sample Input 0

2 3 4
Sample Output 0

3

*/

const lista = [1, 2, 3, 4]

function solucao(lista) {
    let total = 0
  let media = 0
  for(valor of lista){
      total = total + valor
      media = total / lista.length
  }
console.log(media)
}

solucao(lista)