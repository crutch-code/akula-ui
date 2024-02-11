import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useParams} from "react-router-dom";
import {Loading} from "../components/Loading";
import {TestType} from "../types/TestType";
import {REST} from "../api/REST";

export function TestWelcomePage(props: any) : ReactElement {
    const {id} = useParams<string>();
    const {cid} = useParams<string>();
    const {lid} = useParams<string>();
    const [test, setTest] = useState<TestType>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        REST.getTestById(id).then(t => {
            setTest(t!);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>)
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"}
                 style={{height: "48px", borderBottom: "1px solid rgb(54, 55, 56)", display: "flex"}}>
                <a href={"/teach/" + cid + "/" + lid} className={"backButton"} style={{
                    width: "148px",
                    color: "rgb(129, 140, 153)",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 20px 0 8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    textDecoration: "none"
                }}>
                    <FontAwesomeIcon icon={faAngleLeft} style={{width: "24px", height: "24px"}}/>
                    Назад
                </a>
                <div style={{width: "148px", padding: "0 8px 0 20px"}}></div>
            </div>

            <div style={{padding: "15px", textAlign: "justify", fontSize: "15px"}}>
                <div>Тема теста: <b>{test?.theme}</b></div>
                <div>Проходной балл: <b>{test?.min_ball}</b></div>
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

                <a href={"/teach/" + cid + "/" + lid + "/" + test?.id + "/"} className={"forwardButton"} style={{
                    width: "148px",
                    color: "rgb(129, 140, 153)",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 8px 0 20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    justifyContent: "flex-end",
                    textDecoration: "none"
                }}>
                    Начать тест
                    <FontAwesomeIcon icon={faAngleRight} style={{width: "24px", height: "24px"}}/>
                </a>

            </div>
        </section>
    </div>);
}