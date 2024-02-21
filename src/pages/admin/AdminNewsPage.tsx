import React, {ReactElement, useEffect, useState} from "react";
import {NewsType} from "../../types/NewsType";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faCheckCircle, faCircleCheck, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "../../components/parts/ListItem";

export function AdminNewsPage(props: any): ReactElement {
    const [news, setNews] = useState<NewsType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.getNews().then((n) => {
            setNews(n!);
            setLoading(false);
        });
    }, [])

    if (loading)
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>);


    return (<div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
                <div className={"TeachListHeader"} style={{height: "48px"}}>
                    <a href={"/admin"} className={"backButton"} style={{
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

                <div className={"TeachListFooter"} style={{height: "48px"}}>

                </div>
            </section>
        </div>
    );

}

/*
<div className="card card-sm card-body bg-primary border-light mb-0" key={n.id}>
                                        <div className="accordion-panel-header">
                            <span>
                                {n.disabled
                                    ? <FontAwesomeIcon icon={faTimesCircle}/>
                                    : <FontAwesomeIcon icon={faCircleCheck} style={{color: "#00aa00",}}/>
                                }
                                &nbsp;{n.title}
                            </span>
                                            <span className="h6 small">
                                                {new Date(Date.parse(n.publishDate!)).toLocaleString("ru-RU", {
                                                    day: '2-digit',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>
 */