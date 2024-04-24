import React, {ChangeEvent, ReactElement, useEffect, useState} from "react";
import {AnswerType, QuestionType} from "../../types/QuestionType";
import {Button} from "../Button";

export function AddQuestionMultiple(props: any): ReactElement {
    const qIndex = props.index!;
    let question: QuestionType = props.question;

    const [answers, setAnswers] = useState<AnswerType[]>([]);

    useEffect(() => {
        setAnswers(question?.answers.map((a, i) => {
            a._index = i + 1;
            return a;
        }) ?? []);
    }, [question])

    const addAnswer = () => {
        const newAnswer: AnswerType = {
            id: BigInt(0),
            content: '',
            correct: false,
            _index: answers.length + 1,
        }
        setAnswers((prev) => [...prev, newAnswer]);
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

            {answers.map((a, i) =>
                <div key={i} className={"inputGroup"}
                     style={{padding: "0 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>{"Ответ " + a._index + ":"}</label>
                    <input type="checkbox" style={{marginRight: "8px"}} defaultChecked={a.correct ?? false}
                           name={"q" + qIndex} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        a.correct = e.target.checked
                        question.answers = answers;
                    }}/>
                    <input type="text" placeholder={"Вариант ответа"} style={{width: "100%"}} defaultValue={a.content}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => {
                               a.content = e.target.value
                               question.answers = answers;
                           }}/>
                </div>
            )}
            <Button text={"Добавить вариант ответа"} onClick={() => addAnswer()}/>
        </div>
    )
}