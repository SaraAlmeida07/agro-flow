
import Database from '../Database';
import { BovinoCorte } from '../model/BovinoCorte';
import { BovinoLeite } from '../model/BovinoLeite';
import { RacaBovina } from '../enum/RacaBovina';
import { RelatorioService } from '../service/RelatorioService';

export class BovinoController {
    private database: Database;
    private relatorioService: RelatorioService;

    constructor(database: Database, relatorioService: RelatorioService) {
        this.database = database;
        this.relatorioService = relatorioService;
    }

    // Cadastrar Bovino de Corte
    public cadastrarBovinoCorte(brinco: string, raca: RacaBovina, peso: number, idade: number): boolean {
        const novoBovino = new BovinoCorte(brinco, raca, peso, idade);
        this.database.bovinosCorte.push(novoBovino);
        return true;
    }

    // Cadastrar Bovino de Leite
    public cadastrarBovinoLeite(brinco: string, raca: RacaBovina, peso: number, idade: number, litrosLeiteDia: number): boolean {
        const novoBovino = new BovinoLeite(brinco, raca, peso, idade, litrosLeiteDia);
        this.database.bovinosLeite.push(novoBovino);
        return true;
    }

   public gerarRelatorios(): string {
    // Ele pega os dados do banco e passa para o serviço formatar
    return this.relatorioService.gerarRelatorioGeral(
        this.database.bovinosCorte, 
        this.database.bovinosLeite
    );
    }
}