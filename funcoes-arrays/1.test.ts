/*
1.1 Escreve um teste com o array [3,5,7,3,8,9,1]
*/

import { forSimples, forForeach } from "./1";
// [3,5,7,3,8,9,1]
// test do for simples
test('for simples',()=>{
    const teste_array = [3,5,7,3,8,9,1];
    const res = forSimples(teste_array);
    expect(res).toEqual([9,25,49,9,64,81,1]);
});

// test do foreach
test('for foreach',()=>{
    const teste_array = [3,5,7,3,8,9,1];
    const res = forForeach(teste_array);
    expect(res).toEqual([9,25,49,9,64,81,1]);
});