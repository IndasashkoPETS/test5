import { Console } from "./presentation/console/console.js";
import * as readline from 'readline';



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askCommand() {
    rl.question('Введите команду (/help или /arr или /exit): ', (command) => {
        switch (command) {
            case '/help':
                console.log('\nДоступные команды:');
                console.log('/help:  Отображает это справочное сообщение.');
                console.log('/arr: Выводит случайный массив на консоль');
                console.log(`/exit чтобы выйти из программы`)
                break;
            case '/arr':
                const arrayWriter = new Console();
                arrayWriter.writeRandomArray();
                break;
            case '/exit':
                rl.close();
                return;
            default:
                console.log('\nНеверная команда. Введите /help для списка доступных команд.');
                break;
        }
        askCommand();
    });
}

askCommand();