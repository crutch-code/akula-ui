import React, {ReactElement, useEffect, useState} from 'react'
import {NewsCard} from '../components/NewsCard'
import {NewsType} from '../types/NewsType'
import {REST} from "../api/REST";

export function MainPage(props: any): ReactElement {
    const [news, setNews] = useState<NewsType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.getNews().then(n => {
            setNews(n!);
            setLoading(false);
        });
    }, []);

    return (
        <main>
            <div className={'section'}>
                <div className="container">
                    <div className="row mb-5">
                        {news?.map(n =>
                            <div className="col-12 col-md-6 col-lg-6 mb-5" key={n!.id!}>
                                <NewsCard news={n!} isPreview={true}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}