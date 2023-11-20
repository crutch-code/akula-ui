import React, {ReactElement, useEffect, useState} from 'react'
import {NewsType} from "../types/NewsType";

export function NewsCard(props: any): ReactElement {
    const contentPreviewLength: number = 100;
    const [news, setNews] = useState<NewsType>();
    const [isPreview, setIsPreview] = useState(false);

    useEffect(() => {
        setNews(props.news);
        setIsPreview(props.isPreview ?? false);
    }, []);

    let fio = news?.author.fio.includes(' ') ?
        news?.author.fio!.split(' ')[1].substring(0, 1) + '. ' + news?.author.fio!.split(' ')[0] :
        news?.author.fio!;
    let publishDate = new Date(Date.parse(news?.publishDate!)).toLocaleString("ru-RU", {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    let content = isPreview ? news?.content!.substring(0, Math.min(news?.content.length ?? contentPreviewLength, contentPreviewLength)) : news?.content!;
    return (
        <div className="card bg-primary border-light shadow-soft">
            <img src={'/api/storage/' + news?.photo!.name!} className="card-img-top rounded-top" alt='image'/>
            <div className="card-body pt-2">
                <div className="media d-flex align-items-center justify-content-between">
                    <div className="post-group">
                        <a href={'/user/' + news?.author!.id!}><img
                            className="avatar-sm mr-2 img-fluid rounded-circle"
                            src={'/api/storage/' + news?.author!.photo!.name!}
                            alt={'Автор'}/>&nbsp;{fio}</a>
                    </div>
                    <div className="d-flex align-items-center">
                                <span className="small"><span
                                    className="far fa-calendar-alt mr-2"></span>{publishDate}</span>
                    </div>
                </div>
                <h3 className="h5 card-title mt-4">{news?.title!}</h3>
                <p className="card-text">{content}</p>
                {isPreview ? <a href={'/news/'+news?.id!} className="btn btn-primary btn-sm">Читать далее ...</a> : ''}
            </div>
        </div>
    );
}