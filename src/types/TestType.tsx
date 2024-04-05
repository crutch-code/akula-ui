import {QuestionType} from "./QuestionType";

export type TestType = {
    id: bigint,
    theme: string,
    min_ball: number,
    success: boolean | null,

    disabled: boolean | null,
    questions: QuestionType[] | null,
}