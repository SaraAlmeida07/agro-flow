import { BovinoController } from '../controller/BovinoController';
import { RelatorioService } from '../service/RelatorioService';
import { RacaBovina } from '../model/RacaBovina'; 
import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

async function iniciarSistema() {
    console.log("=========================================");
    console.log("       TELA INICIAL: AGROFLOW            ");
    console.log("=========================================\n");

    // INJEÇÃO DE DEPENDÊNCIA
    const servicoDeRelatorio = new RelatorioService();
    const controller = new BovinoController(servicoDeRelatorio);
    
    // Configura o leitor do terminal
    const rl = readline.createInterface({ input, output });

    let continuar = true;

    // Loop para permitir cadastrar vários animais seguidos
    while (continuar) {
        console.log("\n--- Novo Cadastro de Bovino de Corte ---");

        const brinco = await rl.question("Digite o brinco do animal (ex: C-101): ");
        
        // 2. APLICAÇÃO DO ENUM (Cardápio fechado de raças)
        console.log("\nOpções de Raça:");
        console.log("1 - Nelore");
        console.log("2 - Angus");
        console.log("3 - Brahman");
        const opcaoRaca = await rl.question("Escolha a raça (digite 1, 2 ou 3): ");

        let racaEscolhida: RacaBovina;
        if (opcaoRaca === '1') {
            racaEscolhida = RacaBovina.NELORE;
        } else if (opcaoRaca === '2') {
            racaEscolhida = RacaBovina.ANGUS;
        } else if (opcaoRaca === '3') {
            racaEscolhida = RacaBovina.BRAHMAN;
        } else {
            racaEscolhida = RacaBovina.CRUZAMENTO; // Valor padrão se digitar algo errado
        }

        const pesoDigitado = await rl.question("Digite o peso atual em kg: ");
        const idadeDigitada = await rl.question("Digite a idade em meses: ");

        // Convertendo o texto digitado (string) para número (float)
        const peso = parseFloat(pesoDigitado);
        const idade = parseFloat(idadeDigitada);

        console.log("\nEnviando dados para o Controller...");
        
        // A View manda os dados para o Gerente usando a racaEscolhida do Enum
        controller.cadastrarBovino(brinco, racaEscolhida, peso, idade);

        const resposta = await rl.question("\nDeseja cadastrar outro animal? (s/n): ");
        if (resposta.toLowerCase() !== 's') {
            continuar = false; // Sai do loop
        }
    }

    //  Pergunta a cotação do dia de forma interativa
    console.log("\nCalculando fechamento do lote...");
    const cotacaoDigitada = await rl.question("Qual a cotação do quilo vivo hoje? (ex: 15.50): ");
    const cotacaoDoDia = parseFloat(cotacaoDigitada);
    
    const listaDeRelatorios = controller.gerarRelatorios(cotacaoDoDia); 

    console.log(listaDeRelatorios);
    

    // Fecha o leitor do terminal para o programa conseguir encerrar
    rl.close();
}

// Executa o sistema
iniciarSistema();


// import { Bovino } from '../model/Bovino';
// import { Vacina } from '../model/Vacina';

// console.log("=== SISTEMA AGROFLOW ===");

// const animal1 = new Bovino("A-101", "Nelore", 450, 3);
// const animal2 = new Bovino("A-102", "Angus", 520, 4);
// const animal3 = new Bovino("A-103", "Brahman", 480, 2);

// animal1.imprimirFicha();
// animal2.imprimirFicha();
// animal3.imprimirFicha();

// // 2. Materializando as Vacinas (Instâncias)
// const febreAftosa = new Vacina("Febre Aftosa", "L-99", "25/03/2026", "Ouro Fino");
// const raiva = new Vacina("Raiva", "R-12", "10/01/2026", "Vallée");

// febreAftosa.exibirDetalhes();
// raiva.exibirDetalhes();