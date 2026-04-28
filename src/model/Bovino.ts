import { RacaBovina } from "../enum/RacaBovina";

export class Bovino {
    private brinco: string;
    private raca: RacaBovina;
    private peso: number; // Peso em kg
    private idade: number; // Idade em anos
    // private vacinas: Vacina[] = []; // Lista de vacinas aplicadas

    constructor(brinco: string, raca: RacaBovina, peso: number, idade: number) { //muita coisa no construtor, talvez seja melhor deixar somente os setters e getters
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

    
    
   
}