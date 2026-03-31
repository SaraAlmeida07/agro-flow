export class Bovino {
    private brinco: string;
    private raca: string;
    private peso: number;
    private idade: number;

    constructor(brinco: string, raca: string, peso: number, idade: number) {
        this.brinco = brinco;
        this.raca = raca;
        this.peso = peso;
        this.idade = idade;
    }

    public getBrinco(): string {
        return this.brinco;
    }

    public getRaca(): string {
        return this.raca;
    }

    public getPeso(): number {
        return this.peso;
    }

    public getIdade(): number {
        return this.idade;
    }


    public setPeso(novoPeso: number): void {
        if (novoPeso > 0) { // Regra de negócio: animal não pode ter peso negativo ou zero
            this.peso = novoPeso;
        } else {
            console.log("Erro: Peso inválido para o animal.");
        }
    }


    public imprimirFicha(): void {
        console.log(`🐄 [Ficha] Brinco: ${this.brinco} | Raça: ${this.raca} | Peso: ${this.peso}kg | Idade: ${this.idade} anos`);
    }
}