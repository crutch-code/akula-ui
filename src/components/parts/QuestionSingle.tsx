import {ReactElement} from "react";
import {QuestionType} from "../../types/QuestionType";

export function QuestionSingle(props: any): ReactElement {
    const question = props.question as QuestionType;

    return (<>
        {question.answers.map((a, i) =>
            <div>
                <input type="radio" id={"a" + i} name={"q" + question.id} value={a as string}/>
                <label htmlFor={"a" + i}>{a as string}</label>
            </div>
        )}
    </>);
}