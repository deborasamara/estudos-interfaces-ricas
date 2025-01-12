/**
5. Faça um programa que leia o array e extrai os elementos pares. Use o método FILTER da classe Array.
 */

export function extrai_pares(array:number[]): number[]{
    return array.filter(numeros => numeros % 2 === 0);
}



