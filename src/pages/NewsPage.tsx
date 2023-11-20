import React, {ReactElement, useEffect, useState} from "react";
import {REST} from "../api/REST";
import {useParams} from "react-router-dom";
import {NewsType} from '../types/NewsType'
import {NewsCard} from "../components/NewsCard";

export function NewsPage(): ReactElement {
        const {id} = useParams();
        const [news, setNews] = useState<NewsType>();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                REST.getNewsById(id).then((n: NewsType) => {
                        setNews(n);
                        setLoading(false);
                });
        }, [])

        if (loading)
                return (<div>"Wait news..."</div>);
        return (
            <main>
                    <div className={'section'}>
                            <div className="container">
                                    <NewsCard key={news?.id} news={news} />
                            </div>
                    </div>
            </main>
        );
}