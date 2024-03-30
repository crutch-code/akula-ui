import React, {ReactElement, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {UserType} from "../types/UserType";
import {REST} from "../api/REST";

export function NewsModal(props: any): ReactElement {
    const me = props.me as UserType;
    const [visible, setVisible] = props.visibleState;
    const imageInput = useRef<HTMLInputElement>(null);
    const titleInput = useRef<HTMLInputElement>(null);
    const authorInput = useRef<HTMLSelectElement>(null);
    const publishDateInput = useRef<HTMLInputElement>(null);
    const contentInput = useRef<HTMLTextAreaElement>(null);

    if (!visible) {
        return (<></>);
    }

    const createNews = () => {
        if((imageInput.current?.files?.length ?? 0) > 0) {
            let storage: FormData = new FormData();
            storage.append("type", "news");
            storage.append("name", imageInput.current!.files!.item(0)!.name);
            storage.append("data", imageInput.current!.files!.item(0)!)

            REST.uploadFile(storage).then(s => {
                let n: any = {
                    id: null,
                    author: {id: BigInt(authorInput.current!.value)},
                    publishDate: publishDateInput.current!.value,
                    disabled: false,

                    title: titleInput.current!.value,
                    content: contentInput.current!.value,
                    photo: { id: s.id }
                }

                REST.adminCreateNews(n).then((nn) =>
                        setVisible(false)
                );
            });
        } else {
            //TODO: error image selecting
        }
    }

// onClick={(e) => {e.stopPropagation(); setVisible(false)}}
    return (<div className={"modalBackground"}>
        <div className={"modal"} style={{width: "700px"}}>
            <div className={"modalHeader"} style={{justifyContent: "space-between"}}>
                Новость
                <div onClick={() => setVisible(false)} style={{cursor: "pointer"}}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
            </div>

            <div className={"modalBody"} style={{padding: "20px 24px 24px 24px", fontSize: "13px", display: "flex", flexDirection: "column"}}>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Заголовок:</label>
                    <input placeholder={"Заголовок"} style={{width: "100%"}} ref={titleInput}/>
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Автор:</label>
                    <select placeholder={"Автор"} style={{width: "100%"}} ref={authorInput}>
                        <option value={me.id.toString()}>{me.fio}</option>
                    </select>
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Дата публикации:</label>
                    <input type={"datetime-local"} placeholder={"Дата публикации"} style={{width: "100%"}} ref={publishDateInput} defaultValue={new Date().toJSON().substr(0, 16)}/>
                </div>

                <div className={"inputPhoto"} style={{margin: "0px 0 15px 0"}} onClick={() => {imageInput.current!.click()}}>
                    <input type={"file"} style={{display: "none"}} ref={imageInput}/>
                    <span style={{color: "rgb(113, 170, 235)", padding: "0 8px 0 0"}}><FontAwesomeIcon icon={faPlus}/></span>
                    Загрузить фотографию
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{color: "rgb(147, 147, 147)", fontSize: "13px", padding: "6px 10px 0 0", whiteSpace: "nowrap"}}>Содержимое:</label>
                    <textarea placeholder={"Содержимое"} style={{width: "100%", height: "400px"}} ref={contentInput}></textarea>
                </div>

            </div>

            <div className={"modalFooter"}>
                <div className={"button"} style={{
                    backgroundColor: "rgb(225, 227, 230)",
                    border: "1px solid rgb(34, 34, 34)",
                    borderRadius: "8px",
                    color: "rgb(34, 34, 34)"
                }} onClick={() => createNews()}>Опубликовать
                </div>
            </div>
        </div>
    </div>)
}