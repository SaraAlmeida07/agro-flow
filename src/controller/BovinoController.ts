
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
        
        
        const novoBovino = new BovinoCorte(brinco, raca, peso, idade);
        
       
       this.db.salvarBovino(novoBovino);
        
        console.log(`✅ [Sistema] Boi da raça ${raca} (Brinco: ${brinco}) salvo com sucesso!`);
    }

    
    public gerarRelatorios(cotacaoDiaVivo: number): string {
        let relatoriosProntos: string[] = [];
        
      for (let boi of this.db.listarRebanho()) {
            const textoRelatorio = this.relatorioService.gerarRelatorioEngorda(boi, cotacaoDiaVivo);
            relatoriosProntos.push(textoRelatorio);
        }
        return relatoriosProntos.join("\n"); 
    }
}