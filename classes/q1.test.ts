import { Vaca, Sapo } from "./q1.js";

 test('Teste da classe sapo', ()=>{
    const sapo = new Sapo('0.1m', 'Anfibio');
    sapo.alturaMediaDoPulo = '5 metros';
    expect(sapo.alturaMediaDoPulo).toBe('5 metros');
    sapo.emitirSom();
    expect(sapo.emitirSom).toHaveBeenCalled();
 })

 test('Teste da classe vaca', ()=>{
    const vaca = new Vaca('Médio', 'Alguma classificacao ai');
    vaca.porte = 'Grande';
    expect(vaca.porte).toBe('Grande');
    vaca.emitirSom();
    expect(vaca.emitirSom).toHaveBeenCalled();
 })