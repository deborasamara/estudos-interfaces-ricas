const fatorial = require('./fatorial');  

// teste 1
test('fatorial de 4 deve ser 24', () => {
    expect(fatorial(4)).toBe(24);
});

// teste 2
test('fatorial de 6 deve ser 720', () => {
    expect(fatorial(6)).toBe(720);
});