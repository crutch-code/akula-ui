import React, {ChangeEvent, ReactElement, useEffect, useState} from "react";
import {AnswerType, ComparisonType, OptionType, QuestionType} from "../../types/QuestionType";
import {Button} from "../Button";
import Select, {SingleValue} from "react-select";

export function QuestionComparison(props: any): ReactElement {
    const question = props.question as QuestionType;
    let answers: any[] = [];
    const [comparisons, setComparison] = useState<ComparisonType[]>([]);
    const [left, setLeft] = useState<OptionType[]>([]);
    const [right, setRight] = useState<OptionType[]>([]);

    useEffect(() => {
        let _left: OptionType[] = [];
        let _right: OptionType[] = [];
        question.comparisons.map(c => {
            _left.push(c.lid);
            _right.push(c.rid);
        })
        setLeft(_left)
        setRight(_right)
    }, [question.comparisons])

    const addComparison = () => {
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
        setComparison((prev) => [...prev, newComparison]);
    }

    const handleOnChangeLeft = (key:any, val:bigint) => {
        comparisons.find(p => p._key === key)!.lid.id = val
        props.callback(comparisons)
    }

    const handleOnChangeRight = (key:any, val:bigint) => {
        comparisons.find(p => p._key === key)!.rid.id = val
        props.callback(comparisons)
    }

    return (<>
        {comparisons.map((c, i) =>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{display: 'flex',alignSelf: 'center',  justifyContent: 'space-between', alignItems: 'center', width: '25vw', marginBottom: '2rem'}}>
                    <div>
                        <Select
                            className={"inputGroup"}
                            placeholder={"Выберите правое значение"}
                            options={
                                left.map(l =>{ return{
                                    label: l.content,
                                    value: l.id
                                }})
                            }
                            onChange={event => {handleOnChangeLeft(c._key, event!.value)}}
                        />
                    </div>
                    <div>
                        <Select
                            placeholder={"Выберите правое значение"}
                            options={
                                right.map(r =>{ return{
                                    label: r.content,
                                    value: r.id
                                }})
                            }
                            onChange={event => {handleOnChangeRight(c._key, event!.value)}}
                        />
                        
                    </div>
                </div>
            </div>
        )}
        <Button text={"Добавить сопоставление"} onClick={() => addComparison()}/>
    </>);
}