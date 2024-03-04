import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
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
    const [enableSave, setEnableSave] = useState(false);

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

                <div className={"inputGroup"} style={{padding: "20px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{color: "rgb(147, 147, 147)", fontSize: "13px", padding: "6px 10px 0 0", whiteSpace: "nowrap"}}>Название курса:</label>
                    <input placeholder={"Полное название курса"} style={{width: "100%"}} value={course!.name}/>
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
                    {enableSave
                   ? <div className={"button primary"}
                         onClick={() => {alert('ok'); }}>Сохранить</div>
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