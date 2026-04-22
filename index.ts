import MainController from './src/MainController';

async function main(): Promise<void> {
    const app = new MainController();
    await app.iniciar();
}


main();
