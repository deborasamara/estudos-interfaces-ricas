/**
2.1 Escreva um teste com o array [‘Arrays’, ‘com’, ‘TypeScript’]
 */
import { concatenaArray } from "./2.js";

test('Concatenação de Arrays',()=>{
    const array_palavras = ["Arrays", "com", "Typescript"];
    const res = concatenaArray(array_palavras);
    expect(res).toEqual("Arrays com Typescript");
});

