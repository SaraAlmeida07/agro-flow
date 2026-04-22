import { RacaBovina } from "../enum/RacaBovina";
import { Vacina } from "./Vacina";

export class Bovino {
    private brinco: string;
    private raca: RacaBovina;
    private peso: number; // Peso em kg
    private idade: number; // Idade em anos
    private vacinas: Vacina[] = []; // Lista de vacinas aplicadas

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


    public setPeso(novoPeso: number): boolean {
        if (novoPeso <= 0) {
            return false;
        }
        this.peso = novoPeso;
        return true;
    }

    // COMPOSIÇÃO: Bovino contém Vacinas
    public adicionarVacina(vacina: Vacina): void {
        this.vacinas.push(vacina);
    }

    public getVacinas(): Vacina[] {
        return this.vacinas;
    }

    // Método puro que retorna string formatada (sem console.log)
    public getHistoricoVacinas(): string {
        if (this.vacinas.length === 0) {
            return `Brinco ${this.brinco}: Sem vacinas registradas.`;
        }
        
        let historico = `Historico de Vacinas - Brinco ${this.brinco}:\n`;
        for (let vacina of this.vacinas) {
            historico += `  - ${vacina.getDetalhes()}\n`;
        }
        return historico;
    }
}