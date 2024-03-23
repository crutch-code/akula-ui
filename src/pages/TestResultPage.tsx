import React, {ReactElement, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Loading} from "../components/Loading";
import {REST} from "../api/REST";
import {BackButton} from "../components/parts/BackButton";
import {TestResultType} from "../types/TestResultType";

export function TestResultPage(props: any) : ReactElement {
    const {id} = useParams<string>();
    const {cid} = useParams<string>();
    const {lid} = useParams<string>();
    const [result, setResult] = useState<TestResultType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.resultTest(id).then(r => {
            setResult(r!);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
                <div className={"TeachListHeader"}
                     style={{height: "48px", borderBottom: "1px solid rgb(54, 55, 56)", display: "flex"}}>
                    <BackButton link={"/teach/" + cid + "/" + lid}/>
                    <div style={{width: "148px", padding: "0 8px 0 20px"}}></div>
                </div>

                <Loading/>

                <div className={"TeachListFooter"} style={{
                    height: "48px",
                    borderTop: "1px solid rgb(54, 55, 56)",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    textAlign: "justify",
                    justifyContent: "right"
                }}>

                </div>
            </section>
        </div>)
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"}
                 style={{height: "48px", borderBottom: "1px solid rgb(54, 55, 56)", display: "flex"}}>
                <BackButton link={"/teach/" + cid + "/" + lid}/>
                <div style={{width: "148px", padding: "0 8px 0 20px"}}></div>
            </div>

            <div style={{padding: "15px", textAlign: "justify", fontSize: "15px"}}>
                <div>Тема теста: <b>{result![0].theme}</b></div>
                <div>Проходной балл: <b>{result![0].min_ball}</b></div>
                <div>Набрано баллов: <b>{result![0].taked_ball}</b></div>
                <div>Результат: {result![0].taked_ball >= result![0].min_ball ? <b color={"green"}>Тест сдан</b> : <b color={"red"}>Тест не сдан</b>}</div>
            </div>

            <div className={"TeachListFooter"} style={{
                height: "48px",
                borderTop: "1px solid rgb(54, 55, 56)",
                display: "flex",
                alignItems: "center",
                fontSize: "13px",
                textAlign: "justify",
                justifyContent: "right"
            }}>

            </div>
        </section>
    </div>);
}