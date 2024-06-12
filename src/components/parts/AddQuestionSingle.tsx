import React, {ChangeEvent, ReactElement, useEffect, useState} from "react";
import {AnswerType, QuestionType} from "../../types/QuestionType";
import {Button} from "../Button";
import DeleteIcon from "./icons/DeleteIcon";
import {AnswerApi} from "../../api/AnswerApi";

export function AddQuestionSingle(props: any): ReactElement {
    const qIndex = props.index!;
    let question: QuestionType = props.question;

    const [answers, setAnswers] = useState<AnswerType[]>([]);

    useEffect(() => {
        setAnswers(question?.answers?.map(a => {
            a._key = a.id === BigInt(0) ? a.id : crypto.randomUUID();
            return a;
        }) ?? []);
    }, [question])

    const addAnswer = () => {
        const newAnswer: AnswerType = {
            id: BigInt(0),
            content: '',
            correct: false,
            _key: null
        }
        newAnswer._key = crypto.randomUUID()
        setAnswers((prev) => [...prev, newAnswer]);
    }

    const deleteAnswer = (target: AnswerType) => {
        if (target.id!) {
            AnswerApi.adminRemoveAnswer(target.id).catch(e => console.log(e));
        }
        question.answers = question.answers.filter((a: AnswerType) => a._key !== target._key)
        setAnswers(question.answers)
    }

    return (
        <div>
            <div className={"inputGroup"} style={{padding: "0 0 15px 0", display: "flex", width: "100%"}}>
                <label style={{
                    color: "rgb(147, 147, 147)",
                    fontSize: "13px",
                    padding: "6px 10px 0 0",
                    whiteSpace: "nowrap"
                }}>Текст вопроса:</label>
                <input type="text" placeholder={"Текст вопроса"} style={{width: "100%"}} defaultValue={question.title}
                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                           question.title = e.target.value;
                       }}/>
            </div>
            <div className={"inputGroup"} style={{padding: "0 0 15px 0", display: "flex", width: "100%"}}>
                <label style={{
                    color: "rgb(147, 147, 147)",
                    fontSize: "13px",
                    padding: "6px 10px 0 0",
                    whiteSpace: "nowrap"
                }}>Балл:</label>
                <input type="number" min={1} placeholder={"Балл за вопрос"} style={{width: "100%"}}
                       defaultValue={question.points} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    question.points = parseInt(e.target.value);
                }}/>
            </div>

            {
                answers.map((answer, i) => {

                        return <div key={answer._key} className={"inputGroup"}
                                    style={{
                                        padding: "0 0 15px 0",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: "100%"
                                    }}>
                            <label style={{
                                color: "rgb(147, 147, 147)",
                                fontSize: "13px",
                                padding: "6px 10px 0 0",
                                whiteSpace: "nowrap"
                            }}>{"Ответ " + `${i + 1}` + ":"}</label>
                            <input type="radio" style={{marginRight: "8px"}}
                                   defaultChecked={answer.correct ?? false}
                                   name={"q" + qIndex}
                                   onChange={
                                       (e: ChangeEvent<HTMLInputElement>) => {
                                           answer.correct = e.target.checked
                                           question.answers = answers;
                                       }
                                   }
                            />
                            <input type="text" placeholder={"Вариант ответа"} style={{width: "100%"}}
                                   defaultValue={answer.content}
                                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                       answer.content = e.target.value
                                       question.answers = answers;
                                   }}/>
                            <Button
                                className={"danger"}
                                disabled={false}
                                style={{paddingTop: '1rem'}}
                                text={<DeleteIcon/>}
                                onClick={() => deleteAnswer(answer)}
                            />
                        </div>
                    }
                )
            }
            <Button text={"Добавить вариант ответа"} onClick={() => addAnswer()}/>
        </div>
    )
}