import { Bovino } from "./Bovino";
import { RacaBovina } from "../enum/RacaBovina";
import { IProdutivo } from "./IProdutivo";

export class BovinoCorte extends Bovino implements IProdutivo {
  
    private pesoEntrada: number;
    private dataEntrada: Date;
    private dataUltimaPesagem: Date;

    constructor(brinco: string, raca: RacaBovina, peso: number, idade: number) {
        super(brinco, raca, peso, idade);
        
        this.pesoEntrada = peso; 
        this.dataEntrada = new Date(); 
        this.dataUltimaPesagem = this.dataEntrada;
    }

    public setPesoEntrada(peso: number): void {
    this.pesoEntrada = peso;        
    }

    public setDataEntrada(data: Date): void {
    this.dataEntrada = data;
    }

    public gerarRelatorio(): string {
        return `🐂 --- Relatório do Boi: ${this.getBrinco()} ---
        Peso Atual: ${this.getPeso()}kg
        -----------------------------------------`;
    }

    public obterValor(cotacaoDia: number): string {
        return `\nValor: R$ ${this.getValorEstimadoVivo(cotacaoDia).toFixed(2)}`;
    }

    public gerarAnalise(): string {
        return `\n📊 Análise:
        - Ganho Total: ${this.calcularGanhoTotal()}kg
        - GMD: ${this.calcularGanhoDiario().toFixed(2)}kg/dia
        - Rentabilidade: ${(this.calcularGanhoDiario() * 30).toFixed(2)}kg/mês`;
    }

    public getValorEstimadoVivo(cotacaoDiaVivo: number): number {
        return super.getPeso() * cotacaoDiaVivo;
    }
    
    public getValorEstimadoMorto(cotacaoDiaMorto: number): number {
        return super.getPeso() * cotacaoDiaMorto;
    }

        //GMD Calculos
    public calcularGanhoTotal(): number {
        // Peso de hoje menos o peso de quando chegou
        return super.getPeso() - this.pesoEntrada;
    }
    
    public calcularGanhoDiario(): number {
        // Descobre que dia é hoje
        const dataHoje = new Date();
        
        // Calcula a diferença de tempo desde que o animal entrou
        const diferencaMilissegundos = dataHoje.getTime() - this.dataEntrada.getTime();
        const diasPassados = Math.ceil(diferencaMilissegundos / (1000 * 3600 * 24));
        
        // Evita erro de matemática se o boi foi cadastrado hoje mesmo
        if (diasPassados === 0) return 0;

        return this.calcularGanhoTotal() / diasPassados;
    }

    public getProducaoDetalhada(): string {
        return `Ganho de peso total: ${this.calcularGanhoTotal()}kg`;
    }
    
}