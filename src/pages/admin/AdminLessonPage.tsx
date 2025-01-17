import React, {ChangeEvent, ReactElement, useEffect, useRef, useState} from "react";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {useParams} from "react-router-dom";
import {Toggler} from "../../components/parts/Toggler";
import {BackButton} from "../../components/parts/BackButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faRotate} from "@fortawesome/free-solid-svg-icons";
import {LessonType} from "../../types/LessonType";
import {Editor} from "@tinymce/tinymce-react";

export function AdminLessonPage(props: any): ReactElement {
    const {cid} = useParams<string>();
    const {lid} = useParams<string>();
    const [lesson, setLesson] = useState<LessonType>();
    const [loading, setLoading] = useState<boolean>(true);
    const [canSave, setCanSave] = useState<boolean>(false);

    const imageInput = useRef<HTMLInputElement>(null);
    const nameInput = useRef<HTMLInputElement>(null);
    const contentInput = useRef<Editor>(null);
    const descriptionInput = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        REST.adminGetLessonById(parseInt(lid!)).then((l) => {
            setLesson(l)
            setLoading(false);
        });
        console.log(REST.MCE_API)
    }, [cid, lid])

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>)
    }

    const callBack = (disabled: boolean) => {
        if (disabled) {
            REST.adminGetLessonDisable(parseInt(lid!));
        } else {
            REST.adminGetLessonEnable(parseInt(lid!));
        }
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.target.value.length > 0) {
            setCanSave(true);
        } else {
            setCanSave(false);
        }
    }

    const handleOnContentChange = (e: string) => {
        setCanSave(true);
    }

    const saveLesson = () => {
        let l: any = {
            id: lesson!.id,
            disabled: lesson!.disabled,
            index: lesson!.index,

            name: nameInput.current!.value,
            content: contentInput.current!.editor?.getContent(),
            description: descriptionInput.current!.value,
            //photo: { id: lesson!.photo.id }
        }
        REST.adminUpdateLesson(l).then(() =>
            setCanSave(false)
        );
    }



    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"} style={{
                height: "48px",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgb(54, 55, 56)",
            }}>
                <BackButton link={"/admin/courses/" + cid + "/lessons"}/>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 20px 0 20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    justifyContent: "center"
                }}>
                    <Toggler disabled={lesson!.disabled ?? false} callback={callBack}/>
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
                    }}>Название:</label>
                    <input placeholder={"Название"} style={{width: "100%"}} defaultValue={lesson!.name} ref={nameInput}
                           onChange={handleOnChange}/>
                </div>

                <div className={"inputPhoto"} style={{margin: "0px 0 15px 0", padding: 0}} onClick={() => {
                    imageInput.current!.click()
                }}>
                    <img src={REST.BASE + '/api/storage/' + lesson!.photo?.id!} alt={lesson!.photo?.name!}  style={{width: "100%", borderRadius: "8px"}}/>
                    <input type={"file"} style={{display: "none"}} ref={imageInput} onChange={handleOnChange}/>
                    <div style={{position: "absolute"}} className={"inputPhotoBtn"}><span style={{color: "rgb(113, 170, 235)", padding: "0 8px 0 0"}}><FontAwesomeIcon icon={faRotate}/></span>
                        Обновить фотографию</div>
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 6px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Содержимое:</label>

                    <Editor
                        apiKey={"gwugrfimv8vunwoh3peunq9gfqstna5demu0xwup7axpra02"}
                        onInit={(evt, editor) => {
                        }}
                        initialValue={lesson!.content}
                        onEditorChange={(e) => handleOnContentChange(e)}
                        ref={contentInput}
                        init={{
                            height: 500,
                            width: "100%",
                            language: 'ru_RU',
                            menubar: "edit insert format table",
                            skin: 'oxide-dark',
                            content_css: 'dark',
                            menu: {
                                insert: {
                                    title: 'Вставить',
                                    items: 'image link media addcomment pageembed codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime'
                                },
                            },
                            plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'],
                            toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
                                'alignleft aligncenter alignright alignjustify | ' +
                                'bullist numlist checklist outdent indent removeformat code table',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:13px }'
                        }}
                    />
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 6px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Описание:</label>
                    <textarea placeholder={"Описание"} style={{width: "100%", height: "200px"}}
                              ref={descriptionInput} onChange={handleOnChange}>{lesson!.description}</textarea>
                </div>

            </div>

            <div className={"TeachListFooter"} style={{
                height: "48px",
                borderTop: "1px solid rgb(54, 55, 56)",
                display: "flex",
                justifyContent: "space-between"
            }}>

                <div style={{
                    width: "148px",
                    color: "rgb(129, 140, 153)",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 20px 0 8px",
                    fontSize: "14px",
                    textDecoration: "none"
                }}>
                    {canSave
                        ? <div className={"button primary"}
                               onClick={() => saveLesson()}>Сохранить</div>
                        : ""
                    }
                </div>

                <div style={{width: "148px", padding: "0 20px 0 8px"}}></div>
                <a href={"/admin/courses/" + cid + "/lessons/" + lid + "/tests/"} className={"forwardButton"} style={{
                    width: "148px",
                    color: "rgb(129, 140, 153)",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 8px 0 20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    justifyContent: "flex-end",
                    textDecoration: "none"
                }}>
                    Список тестов
                    <FontAwesomeIcon icon={faAngleRight} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                </a>
            </div>


        </section>
    </div>);

}
