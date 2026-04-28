import { Database } from './Database';
import { RelatorioService } from './service/RelatorioService';
import { BovinoController } from './controller/BovinoController';
import { FirstScreen } from './view/FirstScreen';


const db = new Database();

const servicoDeRelatorio = new RelatorioService();

const controller = new BovinoController(db, servicoDeRelatorio);

const tela = new FirstScreen(controller);

tela.iniciarInteracao();