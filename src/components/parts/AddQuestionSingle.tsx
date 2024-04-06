import React, {ReactElement, useEffect, useState} from "react";
import {AnswerType, QuestionType} from "../../types/QuestionType";
import {Button} from "../Button";

export function AddQuestionSingle(props: any): ReactElement {
    const qIndex = props.index!;
    const question: QuestionType = props.question;

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
                <input type="text" placeholder={"Текст вопроса"} style={{width: "100%"}} defaultValue={question.title}/>
            </div>
            <div className={"inputGroup"} style={{padding: "0 0 15px 0", display: "flex", width: "100%"}}>
                <label style={{
                    color: "rgb(147, 147, 147)",
                    fontSize: "13px",
                    padding: "6px 10px 0 0",
                    whiteSpace: "nowrap"
                }}>Балл:</label>
                <input type="number" min={1} placeholder={"Балл за вопрос"} style={{width: "100%"}} defaultValue={question.points}/>
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
                    <input type="radio" style={{marginRight: "8px"}} defaultChecked={a.correct ?? false}
                           name={"q" + qIndex}></input>
                    <input type="text" placeholder={"Вариант ответа"} style={{width: "100%"}} defaultValue={a.content}/>
                </div>
            )}
            <Button text={"Добавить вариант ответа"} onClick={() => addAnswer()}/>
        </div>
    )
}