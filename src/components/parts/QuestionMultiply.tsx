import {ChangeEvent, ReactElement} from "react";
import {AnswerType, QuestionType} from "../../types/QuestionType";

export function QuestionMultiply(props: any): ReactElement {
    const question = props.question as QuestionType;
    let answers: any[] = [];

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            answers.push({ id: BigInt(e.target.id.substring(1)) });
        } else {
            answers = answers.filter(a => a.id !== BigInt(e.target.id.substring(1)));
        }
        props.callback(answers);
    }

    return (<>
        {question.answers.map((a, i) =>
            <div key={(a as AnswerType).id}>
                <input type="checkbox" id={"a" + (a as AnswerType).id} name={"q" + question.id} onChange={handleOnChange}/>
                <label htmlFor={"a" + (a as AnswerType).id}>{(a as AnswerType).content}</label>
            </div>
        )}
    </>);
}