import {TestType} from "./TestType";

export type LessonType = {
    id: bigint,
    name: string,
    index: number,
    completed: boolean,
    content: string,
    description: string,
    tests: TestType[],

}