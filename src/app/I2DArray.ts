import { RowData } from "./Domain";

export interface I2DArray {

    value : number[][];
    
    convertArray () : RowData[];

    findMinPositive(rowNumber : number): number | null;

    findMinRow(): number;

    calculateReplacements(rowNumber : number): number;
}