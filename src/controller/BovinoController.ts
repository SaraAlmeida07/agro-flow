
import { BovinoCorte } from '../model/BovinoCorte';
import { RacaBovina } from '../enum/RacaBovina';
import { RelatorioService } from '../service/RelatorioService'

export class BovinoController {
    // Simulando um banco de dados (uma lista que guarda nossos animais do Model)
    private rebanho: BovinoCorte[] = [];

    private relatorioService: RelatorioService;

    constructor(relatorioService: RelatorioService) {
        this.relatorioService = relatorioService; // A dependência é injetada aqui
    }

    // Método que a View vai chamar quando o usuário quiser cadastrar um boi
    public cadastrarBovino(brinco: string, raca: RacaBovina, peso: number, idade: number): void {
        
        // 1. O Controller é quem cria a instância do Model
        const novoBovino = new BovinoCorte(brinco, raca, peso, idade);
        
        // 2. Salva no nosso "banco de dados"
        this.rebanho.push(novoBovino);
        
        console.log(`✅ [Sistema] Boi da raça ${raca} (Brinco: ${brinco}) salvo com sucesso!`);
    }

    // O método agora pede a cotação do dia e usa o Service
    public gerarRelatorios(cotacaoDiaVivo: number): string {
        let relatoriosProntos: string[] = [];
        
        for (let boi of this.rebanho) {
            // O Controller NÃO chama mais boi.relatorioDesempenho()
            // Ele DELEGA o trabalho para o Serviço Especialista:
            const textoRelatorio = this.relatorioService.gerarRelatorioEngorda(boi, cotacaoDiaVivo);
            
            relatoriosProntos.push(textoRelatorio);
        }
        return relatoriosProntos.join("\n"); // Junta todos os relatórios em uma única string, separados por linhas   
    }
}