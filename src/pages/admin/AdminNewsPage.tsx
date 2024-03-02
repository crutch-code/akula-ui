import React, {ReactElement, useEffect, useState} from "react";
import {NewsType} from "../../types/NewsType";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight,
    faCheckCircle,
    faCircleCheck, faNewspaper, faPlus,
    faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "../../components/parts/ListItem";

export function AdminNewsPage(props: any): ReactElement {
    const [news, setNews] = useState<NewsType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.adminGetNews().then((n) => {
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
                <div className={"TeachListHeader"} style={{height: "48px", display: "flex", justifyContent: "space-between"}}>
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
                        <FontAwesomeIcon icon={faAngleLeft} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                        Назад
                    </a>

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
                        Создать новость
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

                <div className={"TeachListFooter"} style={{height: "48px"}}>

                </div>
            </section>
        </div>
    );

}
