import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "../../components/parts/ListItem";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {CourseType} from "../../types/CourseType";

export function AdminCoursesPage(props: any): ReactElement {
    const [courses, setCourses] = useState<CourseType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        /*REST.getCourses().then((c) => {
            setCourses(c)
            setLoading(false);
        });*/
    }, [])

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>)
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"}>




            <div className={"TeachListHeader"} style={{height: "48px"}}>
                <a href={"/teach"} className={"backButton"} style={{
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
                    <FontAwesomeIcon icon={faAngleLeft} style={{width: "24px", height: "24px"}}/>
                    Назад
                </a>
            </div>

            {courses?.map((c, index) =>
                <ListItem key={index} link={"/admin/courses/" + c.id}
                          name={c.name} label="Курс"
                          image={"https://sun1-83.userapi.com/s/v1/ig2/A4ZoqZ4pBe7yzmjMmKaipOECqc_rciQCzWkG3k0tu1YFBEtneBJfActGkdg7uLdaHTtAtAq8ZwscRIXgQWtKesk0.jpg?size=50x50&quality=95&crop=0,0,400,400&ava=1"}
                />
            )}

            <div className={"TeachListFooter"} style={{height: "48px"}}>

            </div>




        </section>
    </div>);

}