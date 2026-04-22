import { BovinoCorte } from "../model/BovinoCorte";
import { BovinoLeite } from "../model/BovinoLeite";

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

     //gerarRelatorioGeral(): Formata relatório com TODOS os bovinos
     
    public gerarRelatorioGeral(
        bovinosCorte: BovinoCorte[],
        bovinosLeite: BovinoLeite[]
    ): string {
        // Verifica se há algum bovino cadastrado
        if (bovinosCorte.length === 0 && bovinosLeite.length === 0) {
            return "Nenhum bovino cadastrado.";
        }

        let relatorio = "\n📋 --- REBANHO CADASTRADO ---\n";

        // Formata bovinos de corte
        if (bovinosCorte.length > 0) {
            relatorio += "\n🐂 BOVINOS DE CORTE:\n";
            bovinosCorte.forEach((bovino, index) => {
                relatorio += `  ${index + 1}. Brinco: ${bovino.getBrinco()} | Raça: ${bovino.getRaca()} | Peso: ${bovino.getPeso()}kg | Idade: ${bovino.getIdade()}m\n`;
            });
        }

        // Formata bovinos de leite
        if (bovinosLeite.length > 0) {
            relatorio += "\n🐄 BOVINOS DE LEITE:\n";
            bovinosLeite.forEach((bovino, index) => {
                relatorio += `  ${index + 1}. Brinco: ${bovino.getBrinco()} | Raça: ${bovino.getRaca()} | Peso: ${bovino.getPeso()}kg | Idade: ${bovino.getIdade()}m\n`;
            });
        }

        return relatorio;
    }
}