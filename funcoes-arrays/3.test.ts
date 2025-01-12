/**
 3.1 Escreva um teste com o array [‘carro’, ’boneco’, ’ave’, ‘lapís’]
 */
import { imprimaElementosOrdenados } from "./3";

test('Impressao de elementos em ordem',()=>{
    const array_palavras = ["carro", "boneco", "ave", "lapis"];
    const res = imprimaElementosOrdenados(array_palavras);
    expect(res).toEqual(["ave", "boneco", "carro", "lapis"])
});