import { Base2DArray } from "./Base2DArray";
import { ArrayOptions } from "./Domain";
import { I2DArray } from "./I2DArray";
import { RandomArrayCreator } from "./RandomArrayCreator";

export class Random2DArray extends Base2DArray implements I2DArray  {

    constructor (opt : ArrayOptions) {
        super(new RandomArrayCreator().generateRandomArray(opt));
    }
}