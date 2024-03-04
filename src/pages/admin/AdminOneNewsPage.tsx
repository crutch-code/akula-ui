import React, {ReactElement, useEffect, useRef, useState} from "react";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {useParams} from "react-router-dom";
import {Toggler} from "../../components/parts/Toggler";
import {NewsType} from "../../types/NewsType";
import {BackButton} from "../../components/parts/BackButton";
import { Editor } from '@tinymce/tinymce-react';

export function AdminOneNewsPage(props: any): ReactElement {
    const {id} = useParams<string>();
    const [news, setNews] = useState<NewsType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.adminGetNewsById(parseInt(id!)).then((c) => {
            setNews(c)
            setLoading(false);
        });
    }, [id])

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>)
    }

    const callBack = (disabled: boolean) => {
        if (disabled) {
            REST.adminGetNewsDisable(parseInt(id!));
        } else {
            REST.adminGetNewsEnable(parseInt(id!));
        }
    }

    let publishDate = new Date(Date.parse(news?.publishDate!)).toLocaleString("ru-RU", {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric'
    });

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"} style={{
                height: "48px",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgb(54, 55, 56)",
            }}>
                <BackButton link={"/admin/news"}/>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 20px 0 20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    justifyContent: "center"
                }}>
                    <Toggler disabled={news!.disabled ?? false} callback={callBack}/>
                </div>
            </div>

            <div className={"modalBody"}
                 style={{padding: "0px 24px 20px 24px", fontSize: "13px", display: "flex", flexDirection: "column"}}>

                <div className={"inputGroup"} style={{padding: "20px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Заголовок:</label>
                    <input placeholder={"Заголовок"} style={{width: "100%"}} value={news!.title}/>
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Автор:</label>
                    <input placeholder={"Автор"} style={{width: "100%"}} value={news!.author.fio}/>
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Дата публикации:</label>
                    <input placeholder={"Дата публикации"} style={{width: "100%"}} value={publishDate}/>
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{color: "rgb(147, 147, 147)", fontSize: "13px", padding: "6px 10px 0 0", whiteSpace: "nowrap"}}>Содержимое:</label>
                    <textarea placeholder={"Содержимое"} style={{width: "100%", height: "400px"}}>{news!.content}</textarea>
                </div>


            </div>

            <div className={"TeachListFooter"} style={{
                height: "48px",
                borderTop: "1px solid rgb(54, 55, 56)",
                display: "flex",
                justifyContent: "space-between"
            }}>

            </div>


        </section>
    </div>);

}
/*
                <Editor
                    apiKey={REST.MCE_API}
                    onInit={(evt, editor) => {
                    }}
                    initialValue={news!.content}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export',
                            'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                            'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                            'alignleft aligncenter alignright alignjustify | ' +
                            'bullist numlist checklist outdent indent | removeformat | a11ycheck code table',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
 */