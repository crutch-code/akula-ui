import {StorageType} from "./StorageType";
import {DepartmentType} from "./DepartmentType";

export type UserType = {
    id: bigint,
    fio: string,
    department: DepartmentType,
    photo: StorageType
    disabled: boolean
}