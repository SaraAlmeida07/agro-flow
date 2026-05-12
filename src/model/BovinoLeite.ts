import { Bovino } from "./Bovino";
import { RacaBovina } from "../enum/RacaBovina";
import { IProdutivo } from "./IProdutivo";

export class BovinoLeite extends Bovino implements IProdutivo {
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

    public gerarAnalise(): string {
        return "";
    }

    public getProducaoDetalhada(): string {
        return `Produção de leite: ${this.getLitrosLeiteDia()}L/dia`;
    }
}