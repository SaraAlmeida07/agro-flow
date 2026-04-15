import { BovinoCorte } from "../model/BovinoCorte";

export class RelatorioService {
    
    // Esse serviço sabe como montar a string do relatório
    public gerarRelatorioEngorda(boi: BovinoCorte, cotacaoDia: number): string {
        return `
        🐂 --- Relatório do Boi: ${boi.getBrinco()} ---
        Peso Atual: ${boi.getPeso()}kg
        GMD: ${boi.calcularGanhoDiario().toFixed(2)} kg/dia
        Valor: R$ ${boi.getValorEstimadoVivo(cotacaoDia).toFixed(2)}
        -----------------------------------------`;
    }
}