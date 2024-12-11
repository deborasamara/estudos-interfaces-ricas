
import fatorial from './fatorial';

// teste 1 - numero negativo
test('Fatorial de número negativo não deve ser aceito', () => {
    expect(() => {
        fatorial(-10);
      }).toThrow();
});

// teste 2 - numero 1 (positivo)
test('fatorial de 1 deve ser 1', () => {
    expect(fatorial(1)).toBe(1);
});

// teste 3 - numero 0 (número neutro)
test('fatorial de 0 deve ser 1', () => {
    expect(fatorial(0)).toBe(1);
});

// teste 4 - numero 6 (positivo )
test('fatorial de 6 deve ser 720', () => {
    expect(fatorial(6)).toBe(720);
});