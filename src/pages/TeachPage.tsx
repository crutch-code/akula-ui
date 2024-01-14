import React, {ReactElement, useEffect, useState} from 'react'
import {REST} from "../api/REST";
import {CourseCard} from "../components/CourseCard";
import {CourseType} from "../types/CourseType";
import {Loading} from "../components/Loading";

export function TeachPage(props: any): ReactElement {
    const [course, setCourse] = useState<CourseType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.getAsssignedCourses().then(c => {
            setCourse(c!);
            setLoading(false);
        });
    }, []);

    if(loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>)
    }

    if (course?.length === 0) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                Нет назначенных курсов и уроков
            </section>
        </div>);
    }

    return (<div className={"page_body"}>
        {course?.map(c =>
            <CourseCard course={c!} key={c.id}/>
        )}
    </div>);
}
