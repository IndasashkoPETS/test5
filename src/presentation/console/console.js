import { StringBuilder } from "./stringBuilder.js";

export class Console {
    stringBuilder;
    constructor() {
        this.stringBuilder = new StringBuilder();
    }

    writeRandomArray() {
        console.log("\n\n___________________________Выводим 2D массив:___________________________\n\n");
        console.log(this.stringBuilder.stringifyRandomArray());
    }
}