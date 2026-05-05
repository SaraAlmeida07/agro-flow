import { Bovino } from "./Bovino";
import { RacaBovina } from "../enum/RacaBovina";

export class BovinoLeite extends Bovino {
    private litrosLeiteDia: number;

    constructor(brinco: string, raca: RacaBovina, peso: number, idade: number, litrosLeiteDia: number) {
        
        super(brinco, raca, peso, idade);
        this.litrosLeiteDia = litrosLeiteDia;
    }

    public getLitrosLeiteDia(): number {
        return this.litrosLeiteDia;
    }

    public gerarRelatorio(): string {
        return `🐄 --- Relatório de Ordenha: ${this.getBrinco()} ---
            Produção: ${this.litrosLeiteDia}L/dia
            Peso: ${this.getPeso()}kg
            -----------------------------------------`;
    }

    public obterValor(cotacaoDia: number): string {
        return "";
    }
}