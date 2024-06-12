import React, {ChangeEvent, ReactElement, useEffect, useState} from "react";
import {AnswerType, ComparisonType, OptionType, QuestionType} from "../../types/QuestionType";
import {Button} from "../Button";
import DeleteIcon from "./icons/DeleteIcon";
import {AddOptionComparison} from "./AddOptionComparison";
import {AnswerApi} from "../../api/AnswerApi";

export function AddQuestionComparison(props: any): ReactElement {
    let question: QuestionType = props.question

    const [comparisons, setComparison] = useState<ComparisonType[]>([]);


    useEffect(
        () => {
            setComparison(question?.comparisons?.map(comparison => {
                comparison._key = comparison.id === BigInt(0) ? comparison.id : crypto.randomUUID();
                comparison.qid = question.id
                return comparison;
            }) ?? []);
        }, [question]
    )

    const addComparison = () => {
        if(question.comparisons === undefined) {question.comparisons = []}
        const newComparison: ComparisonType = {
            id: BigInt(0),
            lid: {
                id: BigInt(0),
                content: '',
                _key: crypto.randomUUID(),
                isLeft: true
            },
            rid: {
                id: BigInt(0),
                content: '',
                _key: crypto.randomUUID(),
                isLeft: false
            },
            qid: question?.id,
            _key: crypto.randomUUID()
        }
        console.log(newComparison);
        question.comparisons?.push(newComparison)
        setComparison((prev) => [...prev, newComparison]);
    }

    const deleteComparison = (target: ComparisonType) => {
        // console.log(target)
        console.log(question.comparisons)
        if (target.id!) {
            AnswerApi.adminRemoveComparison(target.id).catch(e => console.log(e));
        }
        console.log(question.comparisons.filter(c => c._key !== target._key))
        question.comparisons = question.comparisons.filter(c => c._key !== target._key)
        setComparison(question.comparisons)
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
                comparisons.map((comparison, i) => {
                    return <div key={comparison._key} className={"inputGroup"}
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
                        }}>{"Сопоставление " + `${i + 1}` + ":"}</label>
                        <AddOptionComparison comparison={comparison}/>
                        <Button
                            className={"danger"}
                            disabled={false}
                            style={{paddingTop: '1rem'}}
                            text={<DeleteIcon/>}
                            onClick={() => deleteComparison(comparison)}
                        />
                    </div>
                })
            }
            <Button text={"Добавить сопоставление"} onClick={() => addComparison()}/>
        </div>
    );
}