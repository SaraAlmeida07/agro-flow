import { Bovino } from "../model/Bovino";

export class RelatorioService {
    public gerarRelatorioEngorda(boi: Bovino, cotacaoDia: number = 1): string {
        return boi.gerarRelatorio() + boi.obterValor(cotacaoDia);
    }
}