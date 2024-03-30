import React, {ReactElement, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {REST} from "../api/REST";
import {Editor} from "@tinymce/tinymce-react";

export function LessonModal(props: any): ReactElement {
    const [visible, setVisible] = props.visibleState;
    const cid = props.cid;
    const lastIndex = props.lastIndex;
    const name = useRef<HTMLInputElement>(null);
    const photo = useRef<HTMLInputElement>(null);
    const contentInput = useRef<Editor>(null);
    const descriptionInput = useRef<HTMLTextAreaElement>(null);

    if (!visible) {
        return (<></>);
    }

    const createLesson = () => {
        if ((photo.current?.files?.length ?? 0) > 0) {
            let storage: FormData = new FormData();
            storage.append("type", "lesson");
            storage.append("name", photo.current!.files!.item(0)!.name);
            storage.append("data", photo.current!.files!.item(0)!)

            REST.uploadFile(storage).then(s => {
                let l: any = {
                    id: null,
                    name: name.current!.value,
                    content: contentInput.current!.editor?.getContent(),
                    description: descriptionInput.current!.value,
                    disabled: false,
                    photo: {id: s.id},
                    index: lastIndex
                }

                REST.adminNewLesson(l, parseInt(cid!)).then((ll) =>
                    setVisible(false)
                );
            });
        } else {
            //TODO: error image selecting
        }
    }

    return (<div className={"modalBackground"}>
        <div className={"modal"}>
            <div className={"modalHeader"} style={{justifyContent: "space-between"}}>
                Урок
                <div onClick={() => setVisible(false)} style={{cursor: "pointer"}}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
            </div>

            <div className={"modalBody"}
                 style={{padding: "20px 24px 20px 24px", fontSize: "13px", display: "flex", flexDirection: "column"}}>

                <div className={"inputPhoto"} onClick={() => {photo.current!.click()}}>
                    <input type={"file"} style={{display: "none"}} ref={photo}/>
                    <span style={{color: "rgb(113, 170, 235)", padding: "0 8px 0 0"}}><FontAwesomeIcon icon={faPlus}/></span>
                    Загрузить фотографию
                </div>

                <div className={"inputGroup"} style={{padding: "15px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Заголовок:</label>
                    <input placeholder={"Заголовок урока"} style={{width: "100%"}} ref={name}></input>
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{color: "rgb(147, 147, 147)", fontSize: "13px", padding: "6px 10px 0 0", whiteSpace: "nowrap"}}>Содержимое:</label>
                    <Editor
                        apiKey={REST.MCE_API}
                        onInit={(evt, editor) => {
                        }}
                        ref={contentInput}
                        init={{
                            height: 400,
                            width: "100%",
                            menubar: false,
                            plugins: [ 'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount' ],
                            toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                                'alignleft aligncenter alignright alignjustify | ' +
                                'bullist numlist checklist outdent indent | removeformat | a11ycheck code table',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:13px }'
                        }}
                    />
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{color: "rgb(147, 147, 147)", fontSize: "13px", padding: "6px 10px 0 0", whiteSpace: "nowrap"}}>Описание:</label>
                    <textarea placeholder={"Описание"} style={{width: "100%", height: "100px"}} ref={descriptionInput}></textarea>
                </div>

            </div>

            <div className={"modalFooter"}>
                <div className={"button"} style={{
                    backgroundColor: "rgb(225, 227, 230)",
                    border: "1px solid rgb(34, 34, 34)",
                    borderRadius: "8px",
                    color: "rgb(34, 34, 34)"
                }} onClick={() => createLesson()}>Сохранить
                </div>
            </div>
        </div>
    </div>)
}