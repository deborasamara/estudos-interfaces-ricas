/*
2. Faça um programa TypeScript:
2.1 Crie duas subclasses que possuam uma classe abstrata em comum. Evite criar classes com nomes sem significado (class A, class X). Crie classes com nomes que representem algo significativo.
2.2 As subclasses devem possuir atributos diferentes. 
2.3 As subclasses devem possuir construtores.
2.4 Crie um método estático na classe abstrata. Esse método estático deve realizar uma operação com o método abstrato.
*/

export abstract class Mamifero{
    anosDeVida:string;
    cor:string;

    constructor(anosDeVida:string, cor:string){
        this.anosDeVida = anosDeVida;
        this.cor = cor;
    }

    abstract emitirSom(): string;

    static infosDoBicho(mamifero: Mamifero):string{
        console.log(`esse mamifero tem ${mamifero.anosDeVida} anos de vida e tem cor ${mamifero.cor}`);
        return mamifero.emitirSom()
    }

}

export class Gato extends Mamifero{
    castrado:boolean;

    constructor(anosDeVida:string, cor:string, castrado:boolean){
        super(anosDeVida, cor);
        this.castrado = castrado;
    }

    emitirSom(): string {
        return "Miau!"
    }
}

export class Vaca extends Mamifero{
    estaChipada:boolean;

    constructor(anosDeVida:string, cor:string, estaChipada:boolean){
        super(anosDeVida, cor);
        this.estaChipada = estaChipada;
    }

    emitirSom(): string {
        return "Muuuuuuuu!";
    }
    
}