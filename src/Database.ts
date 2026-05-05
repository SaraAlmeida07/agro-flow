import { Bovino } from './model/Bovino';

export class Database {
    private rebanho: Bovino[] = [];

    public salvarBovino(bovino: Bovino): void {
        this.rebanho.push(bovino);
    }

    public listarRebanho(): Bovino[] {
        return this.rebanho;
    }
}