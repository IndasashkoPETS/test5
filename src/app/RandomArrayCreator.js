
export class RandomArrayCreator {
    generateRandomArray(opt ) {
        const array = [];
        for (let i = 0; i < opt.rows; i++) {
            const row = [];
            for (let j = 0; j < opt.cols; j++) {
                row.push(Math.floor(Math.random() * (opt.max - opt.min + 1)) + opt.min);
            }
            array.push(row);
        }
        return array;
    }
}