export class Vacina {
    private nome: string;
    private lote: string;
    private dataAplicacao: string; // Date
    private fabricante: string;

    constructor(nome: string, lote: string, dataAplicacao: string, fabricante: string) {
        this.nome = nome;
        this.lote = lote;
        this.dataAplicacao = dataAplicacao;
        this.fabricante = fabricante;
    }

    public getNome(): string { return this.nome; }          
    public getLote(): string { return this.lote; }
    public getDataAplicacao(): string { return this.dataAplicacao; }
    public getFabricante(): string { return this.fabricante; }
    
    public getDetalhes(): string {
        return ` [Vacina] ${this.nome} | Lote: ${this.lote} | Data: ${this.dataAplicacao} | Fab: ${this.fabricante}`;
    }
}