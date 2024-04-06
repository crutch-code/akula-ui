import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "../../components/parts/ListItem";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {useParams} from "react-router-dom";
import {BackButton} from "../../components/parts/BackButton";
import {TestType} from "../../types/TestType";
import {TestModal} from "../../components/TestModal";

export function AdminTestsPage(props: any): ReactElement {
    const me = props.me;
    const {cid} = useParams<string>();
    const {lid} = useParams<string>();
    const [tests, setTests] = useState<TestType[]>();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [currentTest, setCurrentTest] = useState<TestType | null>(null);

    useEffect(() => {
        REST.adminGetTests(parseInt(lid!), page).then((t) => {
            setTests(t)
            setLoading(false);
        });
    }, [lid, page, showModal])

    const loadNext = () => {
        setLoading(true);
        setPage(p => p + 1);
        REST.adminGetTests(parseInt(lid!), page + 1).then((t) => {
            setTests(t)
            setLoading(false);
        });
    }

    const loadPrev = () => {
        setLoading(true);
        setPage(p => p - 1);
        REST.adminGetTests(parseInt(lid!), page - 1).then((t) => {
            setTests(t)
            setLoading(false);
        });
    }

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
                <div className={"TeachListHeader"} style={{
                    height: "48px",
                    display: "flex",
                    borderBottom: "1px solid rgb(54, 55, 56)",
                    justifyContent: "space-between"
                }}>
                    <BackButton link={"/admin/courses/" + cid + "/lessons/" + lid}/>
                    <div style={{
                        padding: "15px",
                        textAlign: "center",
                        width: "100%",
                        fontSize: "13px",
                        fontWeight: "500"
                    }}>Курсы и уроки
                    </div>
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
                    }} onClick={() => { setShowModal(true); setCurrentTest(null);}}>
                        Создать&nbsp;тест
                        <FontAwesomeIcon icon={faPlus} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                    </div>
                </div>

                <Loading/>

                <div className={"TeachListFooter"} style={{
                    height: "48px",
                    borderTop: "1px solid rgb(54, 55, 56)",
                    display: "flex",
                    justifyContent: "space-between"
                }}>

                </div>
            </section>
        </div>)
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"} style={{
                height: "48px",
                display: "flex",
                borderBottom: "1px solid rgb(54, 55, 56)",
                justifyContent: "space-between"
            }}>
                <BackButton link={"/admin/courses/" + cid + "/lessons/" + lid}/>
                <div style={{
                    padding: "15px",
                    textAlign: "center",
                    width: "100%",
                    fontSize: "13px",
                    fontWeight: "500"
                }}>Курсы и уроки
                </div>
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
                }} onClick={() => { setShowModal(true); setCurrentTest(null);}}>
                    Создать&nbsp;тест
                    <FontAwesomeIcon icon={faPlus} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                </div>
            </div>

            {tests?.map((t, index) =>
                <ListItem key={index} onClick={() => { setShowModal(true); setCurrentTest(t);}}
                    //href={"/admin/courses/" + cid + "/lessons/" + lid + "/tests/" + t.id}
                          name={t.theme} label="Тест"
                          image={REST.AKULA}
                          disabled={false}
                />
            )}

            <div className={"TeachListFooter"} style={{
                height: "48px",
                borderTop: "1px solid rgb(54, 55, 56)",
                display: "flex",
                justifyContent: "space-between"
            }}>
                {page === 0
                    ? ""
                    : <div className={"backButton"} style={{
                        width: "148px",
                        color: "rgb(129, 140, 153)",
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        padding: "0 20px 0 8px",
                        cursor: "pointer",
                        fontSize: "14px",
                        textDecoration: "none"
                    }} onClick={() => loadPrev()}>
                        <FontAwesomeIcon icon={faAngleLeft} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                        Предыдущая
                    </div>
                }
                <div style={{width: "148px", padding: "0 20px 0 8px"}}></div>
                {tests!.length >= REST.PAGE_SIZE
                    ? <div className={"forwardButton"} style={{
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
                    }} onClick={() => loadNext()}>
                        Следующая
                        <FontAwesomeIcon icon={faAngleRight}
                                         style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                    </div>
                    : ""
                }
            </div>
        </section>

        <TestModal visibleState={[showModal, setShowModal]} me={me} lid={lid} test={currentTest}/>
    </div>);

}