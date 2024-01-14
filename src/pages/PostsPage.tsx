import React, {ReactElement, useEffect, useState} from "react";
import {REST} from "../api/REST";
import {NewsType} from '../types/NewsType'
import {NewsCard} from "../components/NewsCard";

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
