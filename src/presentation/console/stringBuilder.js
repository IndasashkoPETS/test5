
import { Random2DArray } from "../../app/Radom2DArray.js";

export class StringBuilder {
 
    stringifyRandomArray() {
        const rows = 10;
        const cols = 10;
        const array = new Random2DArray({ cols: cols, max: 100, min: -100, rows: rows }).convertArray();
        return this.StringlyArray(array);
    }

    StringlyArray(data ) {
        let answer = "";
        for (let i = 0; i < data.length; i++) {
            let rowStr = this.stringifyRow(data[i]);
            rowStr = data[i].isMinimalValueRow ? rowStr.slice(0, -1) + "*" : rowStr;
            rowStr = data[i].minPositive ? rowStr + `   Наименьшее положительное: ${data[i].minPositive}` : rowStr + `   Нет положительных`;
            rowStr = data[i].replacements ? rowStr + `   Заменить нужно: ${data[i].replacements}` : rowStr + `   Менять ничего не нужно`;
            answer += rowStr + "\n"
        }
        return answer;
    }

    stringifyRow(data) {
        let beforeValue = data.row[0];
        let rowStr = beforeValue >= 0 ? " " : "";
        for (let j = 0; j < data.row.length; j++) {
            const currentValue = data.row[j];
            const nextValue = data.row[1 + j];
            let spaces = '';
            let spacesCount = 5 - String(currentValue < 0 ? currentValue * -1 : currentValue).length;
            if (nextValue && nextValue < 0) {
                spacesCount--;
            }
            for (let s = 0; s < spacesCount; s++) {
                spaces += " ";
            }
            rowStr += currentValue + spaces;
        }
        return rowStr;
    }
}