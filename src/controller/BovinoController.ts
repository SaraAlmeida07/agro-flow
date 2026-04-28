
import { BovinoCorte } from '../model/BovinoCorte';
import { RacaBovina } from '../enum/RacaBovina';
import { RelatorioService } from '../service/RelatorioService'
import { Database } from '../Database';

export class BovinoController {
    
    private db: Database;

    private relatorioService: RelatorioService;

   constructor(db: Database, relatorioService: RelatorioService) {
        this.db = db;
        this.relatorioService = relatorioService;
    }
    public cadastrarBovino(brinco: string, raca: RacaBovina, peso: number, idade: number): void {
        
        // 1. O Controller é quem cria a instância do Model
        const novoBovino = new BovinoCorte(brinco, raca, peso, idade);
        
        // salva no Database
       this.db.salvarBovino(novoBovino);
        
        console.log(`✅ [Sistema] Boi da raça ${raca} (Brinco: ${brinco}) salvo com sucesso!`);
    }

    // Usando o Service
    public gerarRelatorios(cotacaoDiaVivo: number): string {
        let relatoriosProntos: string[] = [];
        
      for (let boi of this.db.listarRebanho()) {
            const textoRelatorio = this.relatorioService.gerarRelatorioEngorda(boi, cotacaoDiaVivo);
            relatoriosProntos.push(textoRelatorio);
        }
        return relatoriosProntos.join("\n"); 
    }
}