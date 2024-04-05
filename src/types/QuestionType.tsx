export type QuestionType = {
//{"status":"OK","body":{"id":1,"type":"SINGLE","points":1,"title":"Как называется организация?","answers":["ИП Иванов","ООО Акула","AkulaPlay"],"position":1,"amount":3}}
    id: bigint
    type: string
    points: number
    title: string
    position: number
    amount: number
    answers: AnswerType[]
}

export type AnswerType = {
    id: bigint
    content: string

    correct: boolean | null,
    _index: number | null,
}
