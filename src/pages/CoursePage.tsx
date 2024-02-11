import React, {ReactElement, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {REST} from "../api/REST";
import {CourseType} from "../types/CourseType";
import {Loading} from "../components/Loading";
import {ListItem} from "../components/parts/ListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

export function CoursePage(props: any): ReactElement {
    const {id} = useParams<string>();
    const [course, setCourse] = useState<CourseType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.getCourseById(id).then((l) => {
            setCourse(l)
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

    return (<div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
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

                {course?.lessons?.map((l, index) =>
                    <ListItem key={index} link={"/teach/" + id + "/" + l.id}
                              name={l.name} label="Урок"
                              image={"https://sun1-83.userapi.com/s/v1/ig2/A4ZoqZ4pBe7yzmjMmKaipOECqc_rciQCzWkG3k0tu1YFBEtneBJfActGkdg7uLdaHTtAtAq8ZwscRIXgQWtKesk0.jpg?size=50x50&quality=95&crop=0,0,400,400&ava=1"}
                    />
                )}

                <div className={"TeachListFooter"} style={{height: "48px"}}>

                </div>
            </section>
        </div>
    );
}
