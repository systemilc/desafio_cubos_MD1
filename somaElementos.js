/*
Álvaro está economizando para comprar uma uma passagem para a europa. Por isso diariamente ele coloca um valor no cofre. Faça um programa que calcule o total acumulado no cofre até o momento.

Input Format

A entrada será sempre uma lista de inteiros positivos.

Constraints

A lista pode conter até 1000 inteiros positivos.

Output Format

Imprima na tela o total acumulado nessa lista.

Sample Input 0

1 2 3 4
Sample Output 0

10

*/

const lista = [1, 2, 3, 4]

function solucao(lista) {
  let total = 0
    for(let valor of lista){
      total = total + valor
  }
  console.log(total)
}

solucao(lista)