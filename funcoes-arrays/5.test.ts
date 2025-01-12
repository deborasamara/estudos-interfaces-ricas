/*
5.1 Escreva um teste com o array [8, 3, 9, 5, 6, 12]
*/

import { extrai_pares } from "./5";

test('Extrair pares',()=>{
    const array_numeros = [8, 3, 9, 5, 6, 12];
    const res = extrai_pares(array_numeros);
    expect(res).toEqual([8,6,12]);
});