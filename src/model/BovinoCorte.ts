import { Bovino } from "./Bovino";
import { RacaBovina } from "../enum/RacaBovina";

export class BovinoCorte extends Bovino {
  
    private pesoEntrada: number;
    private dataEntrada: Date;
    private dataUltimaPesagem: Date;

    constructor(brinco: string, raca: RacaBovina, peso: number, idade: number) {
        super(brinco, raca, peso, idade);
        
        this.pesoEntrada = peso; 
        this.dataEntrada = new Date(); 
        this.dataUltimaPesagem = this.dataEntrada;
    }

     public getValorEstimadoVivo(cotacaoDiaVivo: number): number {
        return super.getPeso() * cotacaoDiaVivo;
    }
    
    public getValorEstimadoMorto(cotacaoDiaMorto: number): number {
        return super.getPeso() * cotacaoDiaMorto;
    }

    //Calculo do GMD - Ganho Médio Diário

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
    
}