/*
1. Faça um programa TypeScript:
1.1 Crie duas classes que possuam uma interface em comum. Evite criar classes com nomes sem significado (class A, class X). Crie classes com nomes que representem algo significativo.
1.2 As classes devem possuir atributos diferentes. 
1.3 A interface deve possuir pelo menos um método. 
1.4 A implementação desse método nas classes deve utilizar os atributos.
*/
export interface Animal{
    emitirSom(): void;
    classificacaoAnimal:string;
}

export class Sapo implements Animal{
    alturaMediaDoPulo:string;
    classificacaoAnimal:string;

    constructor(alturaMediaDoPuLO:string, classificacaoAnimal:string) {
        this.alturaMediaDoPulo = alturaMediaDoPuLO;
        this.classificacaoAnimal = classificacaoAnimal;
    }

    emitirSom(): void {
        console.log("Greb!!");
    }
}

export class Vaca implements Animal{
    porte: string;
    classificacaoAnimal:string;

    constructor(porte:string, classificacaoAnimal:string) {
        this.porte = porte;
        this.classificacaoAnimal = classificacaoAnimal;
    }

    emitirSom(): void {
        console.log("Muuuuu!");
    }
}