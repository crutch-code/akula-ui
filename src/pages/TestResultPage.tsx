import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router-dom";
import {Loading} from "../components/Loading";
import {TestType} from "../types/TestType";
import {REST} from "../api/REST";
import {BackButton} from "../components/parts/BackButton";

export function TestResultPage(props: any) : ReactElement {
    const {id} = useParams<string>();
    const {cid} = useParams<string>();
    const {lid} = useParams<string>();
    const [test, setTest] = useState<TestType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //REST.getTestById(id).then(t => {
            //setTest(t!);
            setLoading(false);
        //});
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
                TODO: Результаты теста
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