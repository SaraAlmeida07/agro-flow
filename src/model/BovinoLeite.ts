import { Bovino } from "./Bovino";

export class BovinoLeite extends Bovino {
    private litrosLeiteDia: number;

    constructor(brinco: string, raca: string, peso: number, idade: number, litrosLeiteDia: number) {
        
        super(brinco, raca, peso, idade);
        this.litrosLeiteDia = litrosLeiteDia;
    }

    public getLitrosLeiteDia(): number {
        return this.litrosLeiteDia;
    }

    // getRelatorioOrdenha(): void {
    public relatorioOrdenha(): void {
        console.log(`🐄 Relatório de Ordenha: Este animal produz ${this.litrosLeiteDia} litros por dia.`);
    }
}