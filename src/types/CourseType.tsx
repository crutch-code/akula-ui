import {LessonType} from "./LessonType";
import {StorageType} from "./StorageType";

export type CourseType = {
    id: bigint,
    name: string,
    lessons: LessonType[],
    photo: StorageType,
    disabled: boolean
}