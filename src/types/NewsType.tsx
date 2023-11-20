import {UserType} from "./UserType";
import {StorageType} from "./StorageType";

export type NewsType = {
    id: bigint;
    title: string;
    content: string;
    author: UserType;
    publishDate: string;
    photo: StorageType;
}