
export class Base2DArray {

    value;
    constructor (array) {
        this.value = array;
    }

    convertArray () {
        let rowDatas = [];
        const minValueRow = this.findMinRow();
        for (let i = 0; i < this.value.length; i++) {
            let isMin = i === minValueRow ? true : false;
            rowDatas.push({
                isMinimalValueRow : isMin,
                minPositive : this.findMinPositive(i),
                replacements : this.calculateReplacements(i),
                row : this.value[i]
            });
        }
        return rowDatas;
    }

    findMinPositive(rowNumber) {
        const row = this.value[rowNumber];
        let minPositive = null;
        for (const num of row) {
            if (num > 0 && (minPositive === null || num < minPositive)) {
                minPositive = num;
            }
        }
        return minPositive;
    }

    findMinRow() {
        let minVal = this.value[0][0];
        let minRow = 0;
        for (let i = 0; i < this.value.length; i++) {
            for (let j = 0; j < this.value[i].length; j++) {
                if (this.value[i][j] < minVal) {
                    minVal = this.value[i][j];
                    minRow = i;
                }
            }
        }
        return minRow;
    }

    calculateReplacements(rowNumber ) {
        const row = this.value[rowNumber]
        let replacements = 0;
        let singleDigitCounter = 0;
        let prevSign = 0;
        for (const num of row) {
            const sign = num >= 0 ? 1 : -1;
            if (sign === prevSign ) {
                singleDigitCounter++;
            } else {
                singleDigitCounter = 1;
                prevSign = sign;
            }
            if (singleDigitCounter >= 3) {
                replacements++;
                singleDigitCounter = 1;
                prevSign *= -1;
            }
        }
        return replacements;
    }
}