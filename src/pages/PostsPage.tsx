import React, {ReactElement, useEffect, useState} from "react";
import {REST} from "../api/REST";
import {useParams} from "react-router-dom";
import {NewsType} from '../types/NewsType'
import {NewsCard} from "../components/NewsCard";
import {Loading} from "../components/Loading";

export function PostsPage(props: any): ReactElement {
    const [news, setNews] = useState<NewsType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.getNews().then(n => {
            setNews(n!);
            setLoading(false);
        });
    }, []);

    return (<div className={"page_body"}>
        {news?.map(n =>
            <NewsCard news={n!} isPreview={true} key={n.id}/>
        )}
    </div>);
}
