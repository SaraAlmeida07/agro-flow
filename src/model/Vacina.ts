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

    // getDetalhesDaVacina(): string {
    public exibirDetalhes(): void {
        console.log(` [Vacina] ${this.nome} | Lote: ${this.lote} | Data: ${this.dataAplicacao} | Fab: ${this.fabricante}`);
    }
}