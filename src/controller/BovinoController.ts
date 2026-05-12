
import { BovinoCorte } from '../model/BovinoCorte';
import { BovinoLeite } from '../model/BovinoLeite';
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
    
    public cadastrarBovinoCorte(brinco: string, raca: RacaBovina, peso: number, idade: number, pesoEntrada?: number, dataEntrada?: Date): void {
    const novoBovino = new BovinoCorte(brinco, raca, peso, idade);
    
    
    if (pesoEntrada !== undefined) {
        novoBovino.setPesoEntrada(pesoEntrada);
    }
    if (dataEntrada !== undefined) {
        novoBovino.setDataEntrada(dataEntrada);
    }
    
    this.db.salvarBovino(novoBovino);
    console.log(`✅ [Sistema] Bovino de Corte da raça ${raca} (Brinco: ${brinco}) salvo com sucesso!`);
    }

    public cadastrarBovinoLeite(brinco: string, raca: RacaBovina, peso: number, idade: number, litrosLeiteDia: number): void {
        const novoBovino = new BovinoLeite(brinco, raca, peso, idade, litrosLeiteDia);
        this.db.salvarBovino(novoBovino);
        console.log(`✅ [Sistema] Bovino de Leite da raça ${raca} (Brinco: ${brinco}) salvo com sucesso!`);
    }

    
    public gerarRelatorios(cotacaoDiaVivo: number): string {
        // Service orquestra todo o rebanho
        return this.relatorioService.gerarRelatoriodoRebanho(this.db.listarRebanho(), cotacaoDiaVivo, true);
    }
}