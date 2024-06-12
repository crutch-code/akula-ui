import React, {ReactElement, useEffect, useState} from "react";
import {Loading} from "../components/Loading";
import {REST} from "../api/REST";
import {useParams} from "react-router-dom";
import {QuestionType} from "../types/QuestionType";
import {QuestionSingle} from "../components/parts/QuestionSingle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {QuestionMultiply} from "../components/parts/QuestionMultiply";
import {QuestionComparison} from "../components/parts/QuestionComparison";

export function TestPage(props: any): ReactElement {
    const {id} = useParams<string>();
    const {cid} = useParams<string>();
    const {lid} = useParams<string>();
    const [question, setQuestion] = useState<QuestionType>();
    const [loading, setLoading] = useState(false);
    let answeredQuestion: any = {};

    useEffect(() => {
        REST.startTest(id).then(q => {
            setQuestion(q!);
            answeredQuestion = {id: q!.id, type: q!.type, answers: []};
            setLoading(false);
        });
    }, [id]);

    console.log(question)

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>)
    }

    const callback = (answers: any) => {
        answeredQuestion.id = question!.id;
        answeredQuestion.type = question!.type;
        answeredQuestion.answers = answers;
    }

    const compCallback= (comparison: any) =>{
        answeredQuestion.id = question!.id;
        answeredQuestion.type = question!.type;
        answeredQuestion.comparisons = comparison;
    }

    const nextQuestion = (event: any) => {
        setLoading(true);
        if (answeredQuestion.id === undefined) {
            answeredQuestion = {id: question!.id, type: question!.type, answers: []};
        }
        console.log(answeredQuestion)
        REST.nextQuestion(answeredQuestion).then(q => {
            if (question?.position === question?.amount) {
                window.location.href = '/teach/' + cid + '/' + lid + '/' + id + '/result';
            } else {
                setQuestion(q!);
                setLoading(false);
            }
        });
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"}
                 style={{height: "48px", borderBottom: "1px solid rgb(54, 55, 56)", display: "flex"}}>
                <div style={{
                    padding: "15px",
                    textAlign: "center",
                    width: "100%",
                    fontSize: "13px",
                    fontWeight: "500"
                }} dangerouslySetInnerHTML={{__html: question?.title ?? ""}}></div>
            </div>

            <div style={{padding: "15px", textAlign: "justify", fontSize: "15px"}}>
                {question?.type === "SINGLE"
                    ? <QuestionSingle question={question} callback={callback}/>
                    : question?.type === "MULTIPLE"
                        ? <QuestionMultiply question={question} callback={callback}/>
                        : question?.type === "COMPARISON"?
                            <QuestionComparison question={question} callback={compCallback}/> : 'undef'
                }
            </div>

            <div className={"TeachListFooter"} style={{
                height: "48px",
                borderTop: "1px solid rgb(54, 55, 56)",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div style={{
                    padding: "15px",
                    textAlign: "left",
                    width: "100%",
                    fontSize: "13px",
                    fontWeight: "500"
                }}>{"Вопрос №" + question?.position + " из " + question?.amount}</div>

                <div style={{width: "148px", padding: "0 20px 0 8px"}}></div>

                <div className={"forwardButton"} style={{
                    width: "148px",
                    color: "rgb(129, 140, 153)",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 8px 0 20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    justifyContent: "flex-end"
                }} onClick={nextQuestion}>
                    {question?.position === question?.amount ? "Завершить" : "Далее"}
                    <FontAwesomeIcon icon={faAngleRight} style={{width: "24px", height: "24px"}}/>
                </div>

            </div>
        </section>
    </div>);
}