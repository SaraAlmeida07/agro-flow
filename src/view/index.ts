import { Bovino } from '../model/Bovino';
import { Vacina } from '../model/Vacina';

console.log("=== SISTEMA AGROFLOW ===");

const animal1 = new Bovino("A-101", "Nelore", 450, 3);
const animal2 = new Bovino("A-102", "Angus", 520, 4);
const animal3 = new Bovino("A-103", "Brahman", 480, 2);

animal1.imprimirFicha();
animal2.imprimirFicha();
animal3.imprimirFicha();

// 2. Materializando as Vacinas (Instâncias)
const febreAftosa = new Vacina("Febre Aftosa", "L-99", "25/03/2026", "Ouro Fino");
const raiva = new Vacina("Raiva", "R-12", "10/01/2026", "Vallée");

febreAftosa.exibirDetalhes();
raiva.exibirDetalhes();