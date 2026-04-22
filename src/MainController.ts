import Database from './Database';
import FirstScreen from './view/FirstScreen';
import { BovinoController } from './controller/BovinoController';
import { RelatorioService } from './service/RelatorioService';
import { RacaBovina } from './enum/RacaBovina';


export default class MainController {
    private database: Database;
    private bovinoController: BovinoController;
    private relatorioService: RelatorioService;
    private firstScreen: FirstScreen;

    constructor() {
        // 1. Cria instância única de Database
        this.database = new Database();

        // 2. Cria instância de RelatorioService
        this.relatorioService = new RelatorioService();

        // 3. Cria instância de BovinoController (passa dependências)
        this.bovinoController = new BovinoController(
            this.database,
            this.relatorioService
        );

        // 4. Cria instância de FirstScreen (passa a si mesmo como controller)
        this.firstScreen = new FirstScreen(this);
    }

    /**
     * iniciar(): Ponto de partida da aplicação
     * 
     * Chama o menu principal que entra em loop infinito
     */
    public async iniciar(): Promise<void> {
        await this.firstScreen.mainMenu();
    }

    // Métodos delegados pela FirstScreen:
    
    public cadastrarBovinoCorte(
        brinco: string,
        opcaoRacaNumero: string,
        peso: number,
        idade: number
    ): boolean {
        // Converte número (1-4) para enum RacaBovina
        const raca = this.converterOpcaoParaRaca(opcaoRacaNumero);

        // Delega ao BovinoController
        const sucesso = this.bovinoController.cadastrarBovinoCorte(
            brinco,
            raca,
            peso,
            idade
        );

        return sucesso;
    }

     //cadastrarBovinoLeite(): Delegado pela FirstScreen
     
    public cadastrarBovinoLeite(
        brinco: string,
        opcaoRacaNumero: string,
        peso: number,
        idade: number,
        litrosLeiteDia: number
    ): boolean {
        // Converte número para enum
        const raca = this.converterOpcaoParaRaca(opcaoRacaNumero);

        // Delega ao BovinoController
        const sucesso = this.bovinoController.cadastrarBovinoLeite(
            brinco,
            raca,
            peso,
            idade,
            litrosLeiteDia
        );

        return sucesso;
    }

    
     //gerarRelatorios(): Delegado para o Service
     
    public gerarRelatorios(): string {
    const bovinosCorte = this.database.bovinosCorte;
    const bovinosLeite = this.database.bovinosLeite;

    
    return this.relatorioService.gerarRelatorioGeral(bovinosCorte, bovinosLeite);
    }

    /**
     * Método auxiliar: converte opção numérica para enum RacaBovina
     * 
     * Exemplo:
     * "1" → RacaBovina.NELORE
     * "2" → RacaBovina.ANGUS
     * etc
     */
    private converterOpcaoParaRaca(opcao: string): RacaBovina {
        switch (opcao) {
            case '1':
                return RacaBovina.NELORE;
            case '2':
                return RacaBovina.ANGUS;
            case '3':
                return RacaBovina.BRAHMAN;
            case '4':
                return RacaBovina.CRUZAMENTO;
            default:
                return RacaBovina.CRUZAMENTO; // Padrão se inválido
        }
    }
}
