import {ReactElement} from "react";
import {QuestionType} from "../../types/QuestionType";

export function QuestionMultiply(props: any): ReactElement {
    const question = props.question as QuestionType;

    return (<>
        {question.answers.map((a, i) =>
            <div>
                <input type="checkbox" id={"a" + i} name={"q" + question.id} value={a as string}/>
                <label htmlFor={"a" + i}>{a as string}</label>
            </div>
        )}
    </>);
}