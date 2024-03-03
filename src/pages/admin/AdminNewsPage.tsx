import React, {ReactElement, useEffect, useState} from "react";
import {NewsType} from "../../types/NewsType";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "../../components/parts/ListItem";
import {BackButton} from "../../components/parts/BackButton";

export function AdminNewsPage(props: any): ReactElement {
    const [news, setNews] = useState<NewsType[]>();
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(() => {
        REST.adminGetNews(page).then((n) => {
            setNews(n!);
            setLoading(false);
        });
    }, [])

    const loadNext = () => {
        setLoading(true);
        setPage(p => p + 1);
        REST.adminGetNews(page + 1).then((n) => {
            setNews(n!);
            setLoading(false);
        });
    }

    const loadPrev = () => {
        setLoading(true);
        setPage(p => p - 1);
        REST.adminGetNews(page - 1).then((n) => {
            setNews(n!);
            setLoading(false);
        });
    }

    if (loading)
        return (<div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
                <div className={"TeachListHeader"} style={{
                    height: "48px",
                    display: "flex",
                    borderBottom: "1px solid rgb(54, 55, 56)",
                    justifyContent: "space-between"
                }}>
                    <BackButton link={"/admin"}/>
                    <div style={{
                        padding: "15px",
                        textAlign: "center",
                        width: "100%",
                        fontSize: "13px",
                        fontWeight: "500"
                    }}>Новости
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
                    }}>
                        Создать&nbsp;новость
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
        </div>);


    return (<div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
                <div className={"TeachListHeader"} style={{
                    height: "48px",
                    display: "flex",
                    borderBottom: "1px solid rgb(54, 55, 56)",
                    justifyContent: "space-between"
                }}>
                    <BackButton link={"/admin"}/>
                    <div style={{
                        padding: "15px",
                        textAlign: "center",
                        width: "100%",
                        fontSize: "13px",
                        fontWeight: "500"
                    }}>Новости
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
                    }}>
                        Создать&nbsp;новость
                        <FontAwesomeIcon icon={faPlus} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                    </div>
                </div>

                {news!.map((n, index) =>
                    <ListItem key={index} link={"/admin/news/" + n.id}
                              name={n.title} label={new Date(Date.parse(n.publishDate!)).toLocaleString("ru-RU", {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    })}
                              image={REST.BASE + "/api/storage/" + n.photo.name}
                              disabled={n.disabled}/>
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
                            <FontAwesomeIcon icon={faAngleLeft}
                                             style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                            Предыдущая
                        </div>
                    }
                    <div style={{width: "148px", padding: "0 20px 0 8px"}}></div>
                    {news!.length > 0
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
                        :""
                    }
                </div>
            </section>
        </div>
    );

}
