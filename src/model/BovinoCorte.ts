import { Bovino } from "./Bovino";

export class BovinoCorte extends Bovino {
    private valorQuiloVivo: number;
    private valorQuiloMorto: number;
    private pesoEntrada: number;    

    constructor(brinco: string, raca: string, peso: number, idade: number, valorQuiloVivo: number, valorQuiloMorto: number, pesoEntrada: number) {
        super(brinco, raca, peso, idade);
        this.valorQuiloVivo = valorQuiloVivo;
        this.valorQuiloMorto = valorQuiloMorto;
        this.pesoEntrada = pesoEntrada;
    }

     getValorEstimadoVivo(): number {
        return super.getPeso() * this.valorQuiloVivo;
    }
    
    getValorEstimadoMorto(): number {
        return super.getPeso() * this.valorQuiloMorto;
    }
    
    public calcularGanhoDePeso(): number {
        
        let ganho = super.getPeso() - this.pesoEntrada;
        return ganho;
    }
}