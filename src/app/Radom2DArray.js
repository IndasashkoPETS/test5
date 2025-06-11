import { Base2DArray } from "./Base2DArray.js";
import { RandomArrayCreator } from "./RandomArrayCreator.js";

export class Random2DArray extends Base2DArray  {
    constructor (opt ) {
        super(new RandomArrayCreator().generateRandomArray(opt));
    }
}