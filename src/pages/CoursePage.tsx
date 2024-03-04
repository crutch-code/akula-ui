import React, {ReactElement, useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {REST} from "../api/REST";
import {CourseType} from "../types/CourseType";
import {Loading} from "../components/Loading";
import {ListItem} from "../components/parts/ListItem";
import {BackButton} from "../components/parts/BackButton";

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
                    <BackButton link={"/teach"}/>
                </div>

                {course?.lessons?.map((l, index) =>
                    <ListItem key={index} link={"/teach/" + id + "/" + l.id}
                              name={l.name} label="Урок"
                              image={REST.AKULA}
                              disabled={l.completed}
                    />
                )}

                <div className={"TeachListFooter"} style={{height: "48px"}}>

                </div>
            </section>
        </div>
    );
}
