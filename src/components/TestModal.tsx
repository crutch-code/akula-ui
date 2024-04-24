import React, {ChangeEvent, ReactElement, useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {REST} from "../api/REST";
import {Button} from "./Button";
import {QuestionType} from "../types/QuestionType";
import {AddQuestionSingle} from "./parts/AddQuestionSingle";
import {TestType} from "../types/TestType";
import {AddQuestionMultiple} from "./parts/AddQuestionMultiple";

export function TestModal(props: any): ReactElement {
    const [visible, setVisible] = props.visibleState;
    const lid = props.lid;
    const test: TestType | null = props.test;

    const theme = useRef<HTMLInputElement>(null);
    const min_ball = useRef<HTMLInputElement>(null);
    const [questions, setQuestions] = useState<QuestionType[]>([]);

    useEffect(() => {
        setQuestions(test?.questions ?? []);
    }, [test])

    if (!visible) {
        return (<></>);
    }

    const onNewQuestionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.value;
        e.target.value = "NO";

        let q: QuestionType = {
            id: BigInt(0),
            type: type,
            points: 1,
            title: '',
            position: questions.length,
            amount: 0,
            answers: []
        }
        setQuestions((prev) => [...prev, q])
    }

    const createTest = () => {
        //TODO: [{"id":"0","type":"SINGLE","points":3,"title":"fdfgfh","position":0,"amount":0,"answers":[{"id":"0","content":"an2","correct":true,"_index":1},{"id":"0","content":"an1","correct":false,"_index":2}]},{"id":"0","type":"SINGLE","points":2,"title":"q2","position":1,"amount":0,"answers":[{"id":"0","content":"sadf","correct":true,"_index":1},{"id":"0","content":"dasf","correct":false,"_index":2}]}]
        let data = {
            id: test === null ? null : test.id,
            lid: lid,
            disabled: false,
            success: false,
            min_ball: min_ball.current!.valueAsNumber,
            theme: theme.current!.value,
            questions: questions.map(q => {
                return {
                    id: q.id === BigInt(0) ? null : q.id,
                    type: q.type,
                    title: q.title,
                    points: q.points,
                    answers: q.answers.map(a => {
                        return {
                            id: a.id === BigInt(0) ? null : a.id,
                            content: a.content,
                            correct: a.correct
                        }
                    }),
                    comparisons: []//TODO: impl
                }
            })
            /*
            comparisons: [
                        {
                            id: null,
                            lid: { id: null, content: '', isLeft: true },
                            rid: { id: null, content: '', isLeft: false }
                        }
                    ]*/
        };
        //console.log(JSON.stringify(data, (_, v) => typeof v === 'bigint' ? v.toString() : v));
        REST.adminUpdateTest(data).then((t) => {
            setVisible(false);
        });
    }

    return (<div className={"modalBackground"}>
        <div className={"modal"}>
            <div className={"modalHeader"} style={{justifyContent: "space-between"}}>
                Тест
                <div onClick={() => setVisible(false)} style={{cursor: "pointer"}}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
            </div>

            <div className={"modalBody"}
                 style={{padding: "20px 24px 20px 24px", fontSize: "13px", display: "flex", flexDirection: "column"}}>

                <div className={"inputGroup"} style={{padding: "0 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Тема:</label>
                    <input type="text" placeholder={"Тема теста"} style={{width: "100%"}} ref={theme}
                           defaultValue={test?.theme}></input>
                </div>
                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Проходной балл:</label>
                    <input type={"number"} min={1} step={1} placeholder={"Проходной балл"} style={{width: "100%"}}
                           ref={min_ball} defaultValue={test?.min_ball}></input>
                </div>

                <div className={"hr"}></div>
                {questions.map((q, i) => <>
                        {q.type === "SINGLE"
                            ? <AddQuestionSingle key={i} question={q} index={i} arr={[questions, setQuestions]}/>
                            : q.type === "MULTIPLE"
                                ? <AddQuestionMultiple key={i} question={q} index={i}/>
                                : <div key={i}>TODO: COMPARISON</div>
                        }
                        <div className={"hr"}></div>
                    </>
                )}

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <select style={{width: "100%"}} onChange={onNewQuestionChange} multiple={false}
                            defaultValue={"NO"}>
                        <option value={"NO"} disabled={true}>Добавить вопрос</option>
                        <option value={"SINGLE"}>Одиночный</option>
                        <option value={"MULTIPLE"}>Множественный</option>
                        <option value={"COMPARISON"} disabled={true}>Сопоставление</option>
                    </select>
                </div>
            </div>

            <div className={"modalFooter"}>
                <Button text={"Удалить"} className={"danger"}/>
                <Button text={"Сохранить"} className={"success"} onClick={() => createTest()}/>
            </div>
        </div>
    </div>)
}