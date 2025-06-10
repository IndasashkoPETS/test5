export interface ArrayOptions {
    rows : number;
    max : number;
    min : number;
    cols : number;
}

export interface RowData {
    row : number[];
    isMinimalValueRow : boolean;
    minPositive : number | null;
    replacements : number;
}