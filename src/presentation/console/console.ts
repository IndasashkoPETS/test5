import { StringBuilder } from "./stringBuilder";

export class Console {
    private stringBuilder : StringBuilder;
    constructor() {
        this.stringBuilder = new StringBuilder();
    }

    public writeRandomArray() {
        console.log("\n\n___________________________Выводим 2D массив:___________________________\n\n");
        console.log(this.stringBuilder.stringifyRandomArray());
    }
}