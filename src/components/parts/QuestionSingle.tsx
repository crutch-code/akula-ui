import {ChangeEvent, ReactElement} from "react";
import {AnswerType, QuestionType} from "../../types/QuestionType";

export function QuestionSingle(props: any): ReactElement {
    const question = props.question as QuestionType;

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        let answers: any[] = [{ id: BigInt(e.target.id.substring(1)) }];
        props.callback(answers);
    }

    return (<>
        {question.answers.map((a, i) =>
            <div key={(a as AnswerType).id}>
                <input type="radio" id={"a" + (a as AnswerType).id} name={"q" + question.id} onChange={handleOnChange}/>
                <label htmlFor={"a" + (a as AnswerType).id}>{(a as AnswerType).content}</label>
            </div>
        )}
    </>);
}