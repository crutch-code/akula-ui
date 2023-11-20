import {StorageType} from "./StorageType";

export type UserType = {
    id: bigint,
    fio: string,
    photo: StorageType
}