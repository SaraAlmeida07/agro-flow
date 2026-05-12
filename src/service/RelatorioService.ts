import { Bovino } from "../model/Bovino";

export class RelatorioService {
    
    
    public gerarRelatoriodoRebanho(rebanho: Bovino[], cotacao: number, detalhado: boolean = true): string {
        return rebanho
            .map(boi => this.gerarRelatorio(boi, cotacao, detalhado))
            .join("\n\n");
    }
    
    public gerarRelatorio(boi: Bovino): string;

    public gerarRelatorio(boi: Bovino, cotacao: number, detalhado: boolean): string;

    public gerarRelatorio(boi: Bovino, cotacao?: number, detalhado?: boolean): string {
        if (cotacao === undefined) {
            return boi.gerarRelatorio();
        }
        
        if (detalhado === false) {
            return boi.gerarRelatorio();
        }
        
        let relatorio = boi.gerarRelatorio();
        relatorio += boi.obterValor(cotacao);
        relatorio += boi.gerarAnalise(); 
        
        return relatorio;
    }

   
}