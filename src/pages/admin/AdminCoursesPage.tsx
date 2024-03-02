import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faPlus} from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "../../components/parts/ListItem";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {CourseType} from "../../types/CourseType";

export function AdminCoursesPage(props: any): ReactElement {
    const [courses, setCourses] = useState<CourseType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.adminGetCourses().then((c) => {
            setCourses(c)
            setLoading(false);
        });
    }, [])

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>)
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"} style={{height: "48px", display: "flex", justifyContent: "space-between"}}>
                <a href={"/admin"} className={"backButton"} style={{
                    width: "148px",
                    color: "rgb(129, 140, 153)",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 20px 0 8px",
                    cursor: "pointer",
                    fontSize: "14px",
                    textDecoration: "none"
                }}>
                    <FontAwesomeIcon icon={faAngleLeft} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                    Назад
                </a>

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
                }}>
                    Создать курс
                    <FontAwesomeIcon icon={faPlus} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                </div>
            </div>

            {courses?.map((c, index) =>
                <ListItem key={index} link={"/admin/courses/" + c.id}
                          name={c.name} label="Курс"
                          image={REST.BASE + "/api/storage/" + c.photo.name}
                          disabled={c.disabled}
                />
            )}

            <div className={"TeachListFooter"} style={{height: "48px"}}>

            </div>



        </section>
    </div>);

}