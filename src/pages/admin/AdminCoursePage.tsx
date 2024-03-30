import React, {ChangeEvent, ReactElement, useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faRotate} from "@fortawesome/free-solid-svg-icons";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {CourseType} from "../../types/CourseType";
import {useParams} from "react-router-dom";
import {Toggler} from "../../components/parts/Toggler";
import {BackButton} from "../../components/parts/BackButton";

export function AdminCoursePage(props: any): ReactElement {
    const {id} = useParams<string>();
    const [course, setCourse] = useState<CourseType>();
    const [loading, setLoading] = useState(true);
    const [canSave, setCanSave] = useState<boolean>(false);

    const imageInput = useRef<HTMLInputElement>(null);
    const nameInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        REST.adminGetCourseById(parseInt(id!)).then((c) => {
            setCourse(c)
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
            REST.adminGetCourseDisable(parseInt(id!));
        } else {
            REST.adminGetCourseEnable(parseInt(id!));
        }
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(event.target.value.length > 0) {
            setCanSave(true);
        } else {
            setCanSave(false);
        }
    }

    const updateCourse = () => {
        let c = {
            id: course!.id,
            name: course!.name,
            photo: { id: course!.photo.id },
            disabled: course!.disabled
        }

        if((imageInput.current?.files?.length ?? 0) > 0) {
            let storage: FormData = new FormData();
            storage.append("type", "news");
            storage.append("name", imageInput.current!.files!.item(0)!.name);
            storage.append("data", imageInput.current!.files!.item(0)!)
            REST.uploadFile(storage).then(s => {
                c["photo"]["id"] = s.id;
                REST.adminUpdateCourse(c).then(() =>
                    setCanSave(false)
                );
            });
        } else {
            REST.adminUpdateCourse(c).then(() =>
                setCanSave(false)
            );
        }
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"} style={{
                height: "48px",
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgb(54, 55, 56)",
            }}>
                <BackButton link={"/admin/courses"}/>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 20px 0 20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    justifyContent: "center"
                }}>
                    <Toggler disabled={course!.disabled ?? false} callback={callBack}/>
                </div>
            </div>

            <div className={"modalBody"} style={{padding: "0px 24px 20px 24px", fontSize: "13px", display: "flex", flexDirection: "column"}}>

                <div className={"inputPhoto"} style={{margin: "20px 0 15px 0"}} onClick={() => {imageInput.current!.click()}}>
                    <input type={"file"} style={{display: "none"}} ref={imageInput} onChange={handleOnChange}/>
                    <span style={{color: "rgb(113, 170, 235)", padding: "0 8px 0 0"}}><FontAwesomeIcon icon={faRotate}/></span>
                    Обновить фотографию
                </div>

                <div className={"inputGroup"} style={{padding: "0px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{color: "rgb(147, 147, 147)", fontSize: "13px", padding: "6px 10px 0 0", whiteSpace: "nowrap"}}>Название курса:</label>
                    <input placeholder={"Полное название курса"} style={{width: "100%"}} defaultValue={course!.name} ref={nameInput} onChange={handleOnChange}/>
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
                         onClick={() => updateCourse()}>Сохранить</div>
                        : ""
                    }
                </div>

                <div style={{width: "148px", padding: "0 20px 0 8px"}}></div>
                <a href={"/admin/courses/" + course!.id + "/lessons/"} className={"forwardButton"} style={{
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
                    Список уроков
                    <FontAwesomeIcon icon={faAngleRight} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                </a>

            </div>


        </section>
    </div>);

}