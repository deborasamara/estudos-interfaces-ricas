import { Gato, Vaca, Mamifero } from "./q2";

test('Teste da classe gato', () =>{
    const gato = new Gato('5', 'Preto', true);
    gato.anosDeVida = '7';
    expect(gato.anosDeVida).toBe('7');

    expect(Mamifero.infosDoBicho(gato)).toBe('esse mamifero tem 7 anos de vida e tem cor Preto')

})

test('Teste da classe vaca', () =>{
    const vaca = new Vaca('5', 'Colorida', true);
    vaca.anosDeVida = '8';
    expect(vaca.anosDeVida).toBe('8');

    expect(Mamifero.infosDoBicho(vaca)).toBe('esse mamifero tem 8 anos de vida e tem cor Colorida')
    
})