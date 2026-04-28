import { BovinoCorte } from './model/BovinoCorte';

export class Database {
    private rebanho: BovinoCorte[] = [];

    public salvarBovino(bovino: BovinoCorte): void {
        this.rebanho.push(bovino);
    }

    public listarRebanho(): BovinoCorte[] {
        return this.rebanho;
    }
}