
import { BovinoController } from '../controller/BovinoController';
import { RelatorioService } from '../service/RelatorioService';
import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';


async function iniciarSistema() {
    console.log("=========================================");
    console.log("       TELA INICIAL: AGROFLOW            ");
    console.log("=========================================\n");

    // 1. INJEÇÃO DE DEPENDÊNCIA
    // Criamos o serviço especialista em relatórios
   const servicoDeRelatorio = new RelatorioService();
    // E passamos ele para o Controller, que é o gerente do sistema
    const controller = new BovinoController(servicoDeRelatorio);
    
    // Configura o leitor do terminal
    const rl = readline.createInterface({ input, output });

    let continuar = true;

    // Loop para permitir cadastrar vários animais seguidos
    while (continuar) {
        console.log("\n--- Novo Cadastro de Bovino de Corte ---");

        // O 'await' faz o código pausar e esperar o usuário digitar e dar Enter
        const brinco = await rl.question("Digite o brinco do animal (ex: C-101): ");
        const raca = await rl.question("Digite a raça (ex: Nelore): ");
        const pesoDigitado = await rl.question("Digite o peso atual em kg: ");
        const idadeDigitada = await rl.question("Digite a idade em meses: ");

        // Convertendo o texto digitado (string) para número (float)
        const peso = parseFloat(pesoDigitado);
        const idade = parseFloat(idadeDigitada);

       
        console.log("\nEnviando dados para o Controller...");
        
        // A View manda os dados para o Gerente (Controller)
        controller.cadastrarBovino(brinco, raca, peso, idade);

        // Pergunta se o usuário quer continuar
        const resposta = await rl.question("\nDeseja cadastrar outro animal? (s/n): ");
        if (resposta.toLowerCase() !== 's') {
            continuar = false; // Sai do loop
        }
    }

    // Quando o usuário terminar de cadastrar, mostramos o relatório
    console.log("\nCalculando fechamento do lote...");
    const listaDeRelatorios = controller.gerarRelatorios(15); // Exemplo de cotação do dia
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