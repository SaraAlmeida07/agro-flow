import { RacaBovina } from "../enum/RacaBovina";

export abstract class Bovino {
    private brinco: string;
    private raca: RacaBovina;
    private peso: number; 
    private idade: number;

    constructor(brinco: string, raca: RacaBovina, peso: number, idade: number) {
        this.brinco = brinco;
        this.raca = raca;
        this.peso = peso;
        this.idade = idade;
    }

    public getBrinco(): string {
        return this.brinco;
    }

    public getRaca(): RacaBovina {
        return this.raca;
    }

    public getPeso(): number {
        return this.peso;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setPeso(novoPeso: number): void {
        if (novoPeso <= 0) {
            console.log("Erro: Peso inválido para o animal.");
            return;
        }
        this.peso = novoPeso;
    }

    public gerarRelatorio(): string {
        return `Brinco: ${this.brinco}, Raça: ${this.raca}, Peso: ${this.peso}kg`;
    }

    public abstract obterValor(cotacaoDia: number): string;

    public abstract gerarAnalise(): string;
}