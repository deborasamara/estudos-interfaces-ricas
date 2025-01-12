/**
 * 
 4.1 Escreva um teste com o array [2,4,6,2,8,9,5]
 */

 import { primeiros_elementos } from "./4.js";

 test('Teste com o array para mostrar os dois primeiros números',()=>{
    const array_numeros = [2,4,6,2,8,9,5];
    const res = primeiros_elementos(array_numeros);
    expect(res).toEqual([2,4])
 });