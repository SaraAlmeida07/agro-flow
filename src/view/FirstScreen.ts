import { BovinoController } from '../controller/BovinoController';
import { RacaBovina } from '../enum/RacaBovina'; 
import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

export class FirstScreen {
    private controller: BovinoController;

    constructor(controller: BovinoController) {
        this.controller = controller;
    }

    public async iniciarInteracao() {
        console.log("=========================================");
        console.log("       TELA INICIAL: AGROFLOW            ");
        console.log("=========================================\n");

        const rl = readline.createInterface({ input, output });
        let continuar = true;

        while (continuar) {
            console.log("\n--- Novo Cadastro de Bovino de Corte ---");

            const brinco = await rl.question("Digite o brinco do animal (ex: C-101): ");
            
            console.log("\nOpções de Raça:");
            console.log("1 - Nelore");
            console.log("2 - Angus");
            console.log("3 - Brahman");
            const opcaoRaca = await rl.question("Escolha a raça (digite 1, 2 ou 3): ");

            let racaEscolhida: RacaBovina;
            if (opcaoRaca === '1') racaEscolhida = RacaBovina.NELORE;
            else if (opcaoRaca === '2') racaEscolhida = RacaBovina.ANGUS;
            else if (opcaoRaca === '3') racaEscolhida = RacaBovina.BRAHMAN;
            else racaEscolhida = RacaBovina.CRUZAMENTO;

            const pesoDigitado = await rl.question("Digite o peso atual em kg: ");
            const idadeDigitada = await rl.question("Digite a idade em meses: ");

            const peso = parseFloat(pesoDigitado);
            const idade = parseFloat(idadeDigitada);

            console.log("\nEnviando dados para o Controller...");
            
            this.controller.cadastrarBovino(brinco, racaEscolhida, peso, idade);

            const resposta = await rl.question("\nDeseja cadastrar outro animal? (s/n): ");
            if (resposta.toLowerCase() !== 's') {
                continuar = false;
            }
        }

        console.log("\nCalculando fechamento do lote...");
        const cotacaoDigitada = await rl.question("Qual a cotação do quilo vivo hoje? (ex: 15.50): ");
        const cotacaoDoDia = parseFloat(cotacaoDigitada);
        
        // A View pede os relatórios ao Controller e os exibe 
        const listaDeRelatorios = this.controller.gerarRelatorios(cotacaoDoDia); 
        console.log(listaDeRelatorios);
        
        rl.close();
    }
}