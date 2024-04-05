import React, {ChangeEvent, ChangeEventHandler, ReactElement, useEffect, useRef, useState} from "react";
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

    const [singleQuestionFields, showSingleQuestionFields] = useState<boolean>(false)
    const [multipleQuestionFields, showMultipleQuestionFields] = useState<boolean>(false)

    useEffect(() => {
        setQuestions(test?.questions ?? []);
    }, [test])

    if (!visible) {
        return (<></>);
    }

    const onNewQuestionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.value;
        e.target.value = "NO";

        showSingleQuestionFields(false);
        showMultipleQuestionFields(false);
        if (type === "SINGLE") {
            showSingleQuestionFields(true);
        } else if (type === "MULTIPLE") {
            showMultipleQuestionFields(true);
        } else {

        }
    }

    const createTest = () => {
        /*if (photo.current?.files?.length ?? 0 > 0) {
            let storage: FormData = new FormData();
            storage.append("type", "test");
            storage.append("name", photo.current!.files!.item(0)!.name);
            storage.append("data", photo.current!.files!.item(0)!)

            REST.uploadFile(storage).then(s => {
                let t: any = {
                    id: null,
                    theme: theme.current!.value,
                    //content: contentInput.current!.value,
                    //description: descriptionInput.current!.value,
                    //disabled: false,
                    //photo: {id: s.id},
                    //index: lastIndex
                }

                REST.adminNewTest(t, parseInt(tid!)).then((tt) =>
                    setVisible(false)
                );
            });
        } else {
            //TODO: error image selecting
        }*/
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
                            ? <AddQuestionSingle question={q} index={i}/>
                            : q.type === "MULTIPLE"
                                ? <AddQuestionMultiple question={q} index={i}/>
                                : <div>COMPARISON</div>
                        }
                        <div className={"hr"}></div>
                    </>
                )}

                {singleQuestionFields
                    ? <AddQuestionSingle/>
                    : ""}
                {multipleQuestionFields
                    ? "multipleQuestionFields"
                    : ""}

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <select style={{width: "100%"}} onChange={onNewQuestionChange} multiple={false}
                            defaultValue={"NO"}>
                        <option value={"NO"} disabled={true}>Добавить вопрос</option>
                        <option value={"SINGLE"}>Одиночный</option>
                        <option value={"MULTIPLE"}>Множественный</option>
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