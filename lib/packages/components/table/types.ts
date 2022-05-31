export interface ITableHeader {
    key: string,
    text: string,
    width?: number,
    template?: (value: string, index: number, row: ITableData) => JSX.Element, //本格数据，行号，整个一行的数据
}

export type ITableData = { [key: string]: any }