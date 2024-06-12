import {UserType} from "./UserType";
import {TestType} from "./TestType";

export type TestResultType = {
    id: bigint,
    uid: UserType,
    tid: TestType,
    points: number
}