import { BovinoCorte } from "./model/BovinoCorte";
import { BovinoLeite } from "./model/BovinoLeite";

// Simulador do SGDB (Sistema de Gerenciamento de Banco de Dados)
export default class Database {
    public bovinosCorte: BovinoCorte[] = [];
    public bovinosLeite: BovinoLeite[] = [];
}
