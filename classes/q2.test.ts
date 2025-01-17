import { Gato, Vaca, Mamifero } from "./q2.js";

test('Teste da classe gato', () =>{
    const gato = new Gato('5', 'Preto', true);
    gato.anosDeVida = '7';
    expect(gato.anosDeVida).toBe('7');

    Mamifero.infosDoBicho(gato);


})

test('Teste da classe vaca', () =>{
    const vaca = new Vaca('5', 'Colorida', true);
    vaca.anosDeVida = '8';
    expect(vaca.anosDeVida).toBe('8');

    Mamifero.infosDoBicho(vaca);
    
})