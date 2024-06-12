export type QuestionType = {
//{"status":"OK","body":{"id":1,"type":"SINGLE","points":1,"title":"Как называется организация?","answers":["ИП Иванов","ООО Акула","AkulaPlay"],"position":1,"amount":3}}
    id: bigint
    type: string
    points: number
    title: string
    position: number
    amount: number
    answers: AnswerType[]
    comparisons: ComparisonType[]
    _key: any
}

export type AnswerType = {
    id: bigint
    content: string

    correct: boolean | null,
    // _index: number | null,
    _key: any | null,
}

export type ComparisonType = {
    id: bigint,
    lid: OptionType,
    rid: OptionType,
    qid: bigint
    _key: any
}

export type OptionType = {
    id: bigint,
    content: string,
    isLeft: boolean
    _key: any | null
}