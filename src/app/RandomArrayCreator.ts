import { ArrayOptions } from "./Domain";

export class RandomArrayCreator {
    public generateRandomArray(opt: ArrayOptions): number[][] {
        const array: number[][] = [];
        for (let i = 0; i < opt.rows; i++) {
            const row: number[] = [];
            for (let j = 0; j < opt.cols; j++) {
                row.push(Math.floor(Math.random() * (opt.max - opt.min + 1)) + opt.min);
            }
            array.push(row);
        }
        return array;
    }
}