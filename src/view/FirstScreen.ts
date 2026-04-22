import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import MainController from '../MainController';

//FirstScreen: Tela de Menu Principal

export default class FirstScreen {
    private mainController: MainController;
    private rl: readline.Interface;

    constructor(mainController: MainController) {
        this.mainController = mainController;
        this.rl = readline.createInterface({ input, output });
    }

    // mainMenu(): Loop principal da aplicação
   
    public async mainMenu(): Promise<void> {
        console.log("\n=========================================");
        console.log("       BEM-VIDO AO AGROFLOW            ");
        console.log("=========================================\n");

        let sair = false;

        while (!sair) {
            // Exibe menu
            console.log("\n--- MENU PRINCIPAL ---");
            console.log("1 - Cadastrar Bovino de Corte");
            console.log("2 - Cadastrar Bovino de Leite");
            console.log("3 - Ver Relatório de Bovinos");
            console.log("4 - Sair");

            // Lê escolha do usuário
            const opcao = (await this.rl.question("\nEscolha uma opção (1-4): ")).trim();

            // Processa a escolha
            switch (opcao) {
                case '1':
                    await this.cadastrarBovinoCorte();
                    break;
                case '2':
                    await this.cadastrarBovinoLeite();
                    break;
                case '3':
                    await this.verRelatorios();
                    break;
                case '4':
                    sair = true;
                    console.log("\n✅ Encerrando aplicação...");
                    break;
                default:
                    console.log("\n❌ Opção inválida! Escolha entre 1-4.");
            }
        }

        this.rl.close();
    }

    // cadastrarBovinoCorte(): Captura dados e passa ao Controller
   
    private async cadastrarBovinoCorte(): Promise<void> {
        console.log("\n--- CADASTRO DE BOVINO DE CORTE ---");

        const brinco = (await this.rl.question("Digite o brinco do animal (ex: C-101): ")).trim();
        
        console.log("\nOpções de Raça:");
        console.log("1 - Nelore");
        console.log("2 - Angus");
        console.log("3 - Brahman");
        console.log("4 - Cruzamento Industrial");
        const opcaoRaca = (await this.rl.question("Escolha a raça (1-4): ")).trim();

        const pesoStr = (await this.rl.question("Digite o peso atual em kg: ")).trim();
        const idadeStr = (await this.rl.question("Digite a idade em meses: ")).trim();

        // Converte string para número
        const peso = parseFloat(pesoStr);
        const idade = parseFloat(idadeStr);

        // Passa tudo ao Controller processar
        const sucesso = this.mainController.cadastrarBovinoCorte(
            brinco,
            opcaoRaca,
            peso,
            idade
        );

        // FirstScreen apenas EXIBE o resultado
        if (sucesso) {
            console.log(`\n✅ Bovino de corte ${brinco} cadastrado com sucesso!`);
        } else {
            console.log(`\n❌ Erro ao cadastrar bovino.`);
        }
    }

    
      //cadastrarBovinoLeite(): Captura dados de bovino de leite
     
    private async cadastrarBovinoLeite(): Promise<void> {
        console.log("\n--- CADASTRO DE BOVINO DE LEITE ---");

        const brinco = (await this.rl.question("Digite o brinco do animal (ex: L-101): ")).trim();
        
        console.log("\nOpções de Raça:");
        console.log("1 - Nelore");
        console.log("2 - Angus");
        console.log("3 - Brahman");
        console.log("4 - Cruzamento Industrial");
        const opcaoRaca = (await this.rl.question("Escolha a raça (1-4): ")).trim();

        const pesoStr = (await this.rl.question("Digite o peso atual em kg: ")).trim();
        const idadeStr = (await this.rl.question("Digite a idade em meses: ")).trim();
        const litrosStr = (await this.rl.question("Digite litros de leite/dia: ")).trim();

        // Converte strings para números
        const peso = parseFloat(pesoStr);
        const idade = parseFloat(idadeStr);
        const litros = parseFloat(litrosStr);

        // Passa ao Controller
        const sucesso = this.mainController.cadastrarBovinoLeite(
            brinco,
            opcaoRaca,
            peso,
            idade,
            litros
        );

        // FirstScreen EXIBE resultado
        if (sucesso) {
            console.log(`\n✅ Bovino de leite ${brinco} cadastrado com sucesso!`);
        } else {
            console.log(`\n❌ Erro ao cadastrar bovino.`);
        }
    }

    /**
     * verRelatorios(): Exibe lista de bovinos cadastrados
     */
   private async verRelatorios(): Promise<void> {
        console.log("\n--- RELATÓRIO DE BOVINOS ---");

        const relatorio = this.mainController.gerarRelatorios();

        if (!relatorio) { // Verifica se a string veio vazia
            console.log("❌ Nenhum bovino cadastrado ainda.");
        } else {
            console.log(relatorio); // Imprime a string gigante formatada
        }
    }
}
