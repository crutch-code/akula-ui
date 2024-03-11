import React, {ChangeEvent, ReactElement, useEffect, useRef, useState} from "react";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {useParams} from "react-router-dom";
import {Toggler} from "../../components/parts/Toggler";
import {NewsType} from "../../types/NewsType";
import {BackButton} from "../../components/parts/BackButton";
import { Editor } from '@tinymce/tinymce-react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export function AdminOneNewsPage(props: any): ReactElement {
    const {id} = useParams<string>();
    const [news, setNews] = useState<NewsType>();
    const [loading, setLoading] = useState<boolean>(true);
    const [canSave, setCanSave] = useState<boolean>(false);

    const imageInput = useRef<HTMLInputElement>(null);
    const titleInput = useRef<HTMLInputElement>(null);
    const contentInput = useRef<HTMLTextAreaElement>(null);

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

    const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(event.target.value.length > 0) {
            setCanSave(true);
        } else {
            setCanSave(false);
        }
    }

    const saveNews = () => {
        let n: any = {
            id: news!.id,
            author: {id: news!.author.id},
            publishDate: news!.publishDate,
            disabled: news!.disabled,

            title: titleInput.current!.value,
            content: contentInput.current!.value,
            photo: { id: news!.photo.id }
        }
        if(imageInput.current?.files?.length ?? 0 > 0) {
            let storage: FormData = new FormData();
            storage.append("type", "news");
            storage.append("name", imageInput.current!.files!.item(0)!.name);
            storage.append("data", imageInput.current!.files!.item(0)!)

            REST.uploadFile(storage).then(s => {
                n["photo"]["id"] = s.id;

                REST.adminUpdateNews(n).then(() =>
                    setCanSave(false)
                );
            });
        } else {
            REST.adminUpdateNews(n).then(() =>
                setCanSave(false)
            );
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
                    <input placeholder={"Заголовок"} style={{width: "100%"}} defaultValue={news!.title} ref={titleInput} onChange={handleOnChange}/>
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Автор:</label>
                    <div className={"input"} placeholder={"Автор"} style={{width: "100%"}}>{news!.author.fio}</div>
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Дата публикации:</label>
                    <div className={"input"} placeholder={"Дата публикации"} style={{width: "100%"}}>{publishDate}</div>
                </div>

                <div className={"inputPhoto"} style={{margin: "0px 0 15px 0"}} onClick={() => {imageInput.current!.click()}}>
                    <input type={"file"} style={{display: "none"}} ref={imageInput} onChange={handleOnChange}/>
                    <span style={{color: "rgb(113, 170, 235)", padding: "0 8px 0 0"}}><FontAwesomeIcon icon={faPlus}/></span>
                    Обновить фотографию
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 6px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Содержимое:</label>
                    <textarea placeholder={"Содержимое"} style={{width: "100%", height: "400px"}}
                              ref={contentInput} onChange={handleOnChange}>{news!.content}</textarea>
                </div>


            </div>

            <div className={"modalFooter"}>
                {canSave
                    ? <div className={"button"} style={{
                        backgroundColor: "rgb(225, 227, 230)",
                        border: "1px solid rgb(34, 34, 34)",
                        borderRadius: "8px",
                        color: "rgb(34, 34, 34)"
                    }} onClick={() => saveNews()}>Сохранить
                    </div>
                    : ""
                }
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