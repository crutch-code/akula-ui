import React, {ReactElement, useEffect, useState} from "react";
import {NewsType} from "../../types/NewsType";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";

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


    return (
        <main className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="accordion shadow-soft rounded">

                            {news!.map((n, index) =>
                                    <div className="card card-sm card-body bg-primary border-light mb-0" key={n.id}>
                                        <a href="" className="accordion-panel-header" role="button">
                            <span className="icon-title h6 mb-0 font-weight-bold">
                                <a href="" className="text-danger"><span className="fas fa-times-circle"
                                                                         title="Снята с публикации"></span></a>
                                <a href="" className="text-success"><span className="fas fa-check-circle"
                                                                          title="Опубликована"></span></a>
                                {n.title}
                            </span>
                                            <span className="h6 small">
                                                {new Date(Date.parse(n.publishDate!)).toLocaleString("ru-RU", {
                                                    day: '2-digit',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </span>
                                        </a>
                                    </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );

}