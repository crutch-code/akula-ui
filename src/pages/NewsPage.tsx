import React, {ReactElement, useEffect, useState} from "react";
import {REST} from "../api/REST";
import {useParams} from "react-router-dom";
import {NewsType} from '../types/NewsType'
import {NewsCard} from "../components/NewsCard";
import {Loading} from "../components/Loading";

export function NewsPage(props: any): ReactElement {
    const {id} = useParams<string>();
    const [news, setNews] = useState<NewsType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.getNewsById(id).then((n) => {
            setNews(n!);
            setLoading(false);
        });
    }, [id])

    if (loading)
        return (
            <main>
                <div className={'section'}>
                    <div className="container">
                        <Loading/>
                    </div>
                </div>
            </main>
        );

    return (
        <main>
            <div className={'section'}>
                <div className="container">
                    <NewsCard key={news?.id} news={news}/>
                </div>
            </div>
        </main>
    );
}