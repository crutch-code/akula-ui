import React, {ReactElement, useEffect, useState} from 'react'
import {NewsType} from "../types/NewsType";
import {REST} from "../api/REST";
import {CourseType} from "../types/CourseType";

export function CourseCard(props: any): ReactElement {
    const course: CourseType = props.course!;

    return (
        <a className={"page_block col-6"} href={'/teach/course/' + course.id} style={{textDecorationLine: "none"}}>
            <div className={"primary-image"}>
                <img src={REST.BASE + '/api/storage/' + course.photo?.name!} alt={course.photo?.name!} style={{width: "100%"}}/>
            </div>
            <div className={"content"} style={{paddingTop: "8px"}}>
                <div className={"text"} style={{fontSize: "13px", overflowWrap: "break-word"}}>
                    <b>{course.name!}</b><br/>
                </div>
            </div>
            <div className={"footer"}>

            </div>
        </a>
    );
}
