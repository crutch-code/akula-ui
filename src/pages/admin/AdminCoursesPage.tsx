import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "../../components/parts/ListItem";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {CourseType} from "../../types/CourseType";
import {BackButton} from "../../components/parts/BackButton";
import {CourseModal} from "../../components/CourseModal";

export function AdminCoursesPage(props: any): ReactElement {
    const [courses, setCourses] = useState<CourseType[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        REST.adminGetCourses(page).then((c) => {
            setCourses(c)
            setLoading(false);
        });
    }, [page, showModal])

    const loadNext = () => {
        setLoading(true);
        setPage(p => p + 1);
        REST.adminGetCourses(page + 1).then((c) => {
            setCourses(c)
            setLoading(false);
        });
    }

    const loadPrev = () => {
        setLoading(true);
        setPage(p => p - 1);
        REST.adminGetCourses(page - 1).then((c) => {
            setCourses(c)
            setLoading(false);
        });
    }

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
                <div className={"TeachListHeader"} style={{
                    height: "48px",
                    display: "flex",
                    borderBottom: "1px solid rgb(54, 55, 56)",
                    justifyContent: "space-between"
                }}>
                    <BackButton link={"/admin"}/>
                    <div style={{
                        padding: "15px",
                        textAlign: "center",
                        width: "100%",
                        fontSize: "13px",
                        fontWeight: "500"
                    }}>Курсы и уроки
                    </div>
                    <div className={"forwardButton"} style={{
                        width: "148px",
                        color: "rgb(129, 140, 153)",
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        padding: "0 8px 0 20px",
                        cursor: "pointer",
                        fontSize: "14px",
                        justifyContent: "flex-end"
                    }} onClick={() => setShowModal(true)}>
                        Создать&nbsp;курс
                        <FontAwesomeIcon icon={faPlus} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                    </div>
                </div>

                <Loading/>

                <div className={"TeachListFooter"} style={{
                    height: "48px",
                    borderTop: "1px solid rgb(54, 55, 56)",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                </div>
            </section>
        </div>)
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"} style={{
                height: "48px",
                display: "flex",
                borderBottom: "1px solid rgb(54, 55, 56)",
                justifyContent: "space-between"
            }}>
                <BackButton link={"/admin"}/>
                <div style={{
                    padding: "15px",
                    textAlign: "center",
                    width: "100%",
                    fontSize: "13px",
                    fontWeight: "500"
                }}>Курсы и уроки
                </div>
                <div className={"forwardButton"} style={{
                    width: "148px",
                    color: "rgb(129, 140, 153)",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 8px 0 20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    justifyContent: "flex-end"
                }} onClick={() => setShowModal(true)}>
                    Создать&nbsp;курс
                    <FontAwesomeIcon icon={faPlus} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                </div>
            </div>

            {courses?.map((c, index) =>
                <ListItem key={index} link={"/admin/courses/" + c.id}
                          name={c.name} label="Курс"
                          image={REST.BASE + "/api/storage/" + c.photo.id}
                          disabled={c.disabled}
                />
            )}

            <div className={"TeachListFooter"} style={{
                height: "48px",
                borderTop: "1px solid rgb(54, 55, 56)",
                display: "flex",
                justifyContent: "space-between"
            }}>
                {page === 0
                    ? ""
                    : <div className={"backButton"} style={{
                        width: "148px",
                        color: "rgb(129, 140, 153)",
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        padding: "0 20px 0 8px",
                        cursor: "pointer",
                        fontSize: "14px",
                        textDecoration: "none"
                    }} onClick={() => loadPrev()}>
                        <FontAwesomeIcon icon={faAngleLeft} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                        Предыдущая
                    </div>
                }
                <div style={{width: "148px", padding: "0 20px 0 8px"}}></div>
                {courses!.length >= REST.PAGE_SIZE
                    ? <div className={"forwardButton"} style={{
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
                    }} onClick={() => loadNext()}>
                        Следующая
                        <FontAwesomeIcon icon={faAngleRight}
                                         style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                    </div>
                    : ""
                }
            </div>
        </section>

        <CourseModal visibleState={[showModal, setShowModal]}/>
    </div>);

}