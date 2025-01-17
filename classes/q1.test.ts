import { Vaca, Sapo } from "./q1";

 test('Teste da classe sapo', ()=>{
    const sapo = new Sapo('0.1m', 'Anfibio');
    sapo.alturaMediaDoPulo = '5 metros';
    expect(sapo.alturaMediaDoPulo).toBe('5 metros');
    const emitirSomSpy = jest.spyOn(sapo, 'emitirSom');
    sapo.emitirSom();
    expect(sapo.emitirSom).toHaveBeenCalled();
    emitirSomSpy.mockRestore();
 })

 test('Teste da classe vaca', ()=>{
    const vaca = new Vaca('Médio', 'Alguma classificacao ai');
    vaca.porte = 'Grande';
    expect(vaca.porte).toBe('Grande');
    const emitirSomSpy = jest.spyOn(vaca, 'emitirSom');
    vaca.emitirSom();
    expect(vaca.emitirSom).toHaveBeenCalled();
    emitirSomSpy.mockRestore();
 })