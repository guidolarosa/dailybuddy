type LabelType =  1 | 2 | 3 | 4 | 5 | 6;
  
interface TaskType {
    type: 'repeatable' | 'unique',
    id: string,
    creationDate: Date,
    name: string,
    date?: Date,
    labels?: Array<LabelType> | LabelType,
    priority?: 1 | 2 | 3,
    reward?: number,
    status?: 'incomplete' | 'complete' | 'disabled',
    tags?: string[]
}

export default TaskType;