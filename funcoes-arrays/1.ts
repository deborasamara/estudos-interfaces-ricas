/**
 * 
1. Faça um programa TypeScript que calcule o quadrado de cada elemento do array, use as seguintes estratégias:
a. iterando com for simples
b. iterando com forEach
 */

import { ToArray } from "yargs";
// for simples
// Faça um programa TypeScript que calcule o quadrado de cada elemento do array, 
export function forSimples(array: number[]): number[] { // declaração de função - aceita como parâmetro um array de números e retorna um array de números
    const resultado: number[] = []; // declaração de array do tipo número
    for (let i = 0; i < array.length; i++) { // for usual 
        const quadrado = array[i] * array[i]; //  variavel para armazenar o valor atual do quadrado
        resultado.push(quadrado); // adicionar o valor ao array
    }
    return resultado; // retorna resultado
}

// for com foreach
// Faça um programa TypeScript que calcule o quadrado de cada elemento do array, 
export function forForeach(array: number[]): number[] { // função foreach com parametros e tipo de retorno
    const resultado: number[] = []; //  declaração de array de resultado
    array.forEach((numero) => { // iteração sem índice. Implementação de arrow function
      resultado.push(numero * numero); // Calcula o quadrado e adiciona ao array resultado
    });
    return resultado; // retorna o array do resultado
  }

