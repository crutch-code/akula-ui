import {TestType} from "./TestType";
import {StorageType} from "./StorageType";

export type LessonType = {
    id: bigint,
    name: string,
    index: number,
    completed: boolean,
    content: string,
    description: string,
    tests: TestType[],
    disabled: boolean,
    photo: StorageType,
}