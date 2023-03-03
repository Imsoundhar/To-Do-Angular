export interface Task {
    id: number,
    name: string,
    categoryIds: Array<number>,
    note: string,
    isCompleted: boolean,
    isImportant: boolean
}
