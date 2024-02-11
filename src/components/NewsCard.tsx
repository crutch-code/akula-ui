import React, {ReactElement, useState} from 'react'
import {NewsType} from "../types/NewsType";
import {REST} from "../api/REST";

export function NewsCard(props: any): ReactElement {
    const contentPreviewLength: number = 300;

    const news: NewsType = props.news;
    const [isPreview, setIsPreview] = useState(props.isPreview);

    let publishDate = new Date(Date.parse(news?.publishDate!)).toLocaleString("ru-RU", {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric'
    });
    let content = isPreview ? news?.content!.substring(0, Math.min(news?.content!.length ?? contentPreviewLength, contentPreviewLength)) : news?.content!;

    const showFull = () => {
        setIsPreview(false);
    }

    return (
        <section className={"page_block col-6"}>
            <div className={"header"} style={{height: "40px", display: "flex"}}>
                <a className={"avatar"} href={'/user/' + news?.author!.id!}><img
                    style={{height: "40px", width: "40px", borderRadius: "50%", marginRight: "12px"}}
                    src={REST.BASE + '/api/storage/' + news?.author!.photo!.name!} alt={'Автор'}/></a>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <a href={'/user/' + news?.author!.id!} style={{
                        fontSize: "13px",
                        color: "rgb(113, 170, 235)",
                        fontWeight: "bold",
                        lineHeight: "16px",
                        "textDecorationColor": "rgb(113, 170, 235)",
                        "textDecorationLine": "none",
                        "textDecorationStyle": "solid",
                        "textDecorationThickness": "auto"
                    }}>{news?.author!.fio!}</a>
                    <div className={"publishDate"}
                         style={{color: "rgb(130, 130, 130)", fontSize: "13px"}}>{publishDate}</div>
                </div>
            </div>
            <div className={"content"} style={{paddingTop: "8px"}}>
                <div className={"text"} style={{fontSize: "13px", overflowWrap: "break-word"}}>
                    <b>{news?.title!}</b><br/><br/>
                    <div dangerouslySetInnerHTML={{__html: content!}}></div>
                    {isPreview ? <div style={{color: "rgb(113, 170, 235)", fontWeight: "bold", cursor: "pointer"}} onClick={showFull}>Показать ещё</div> : ""}
                </div>
                <div className={"primary-image"} style={{marginTop: "12px"}}>
                    <img src={REST.BASE + '/api/storage/' + news?.photo!.name!} alt='news'
                         style={{width: "100%", borderRadius: "8px"}}/>
                </div>
            </div>
            <div className={"footer"}>

            </div>
        </section>
    );
}
