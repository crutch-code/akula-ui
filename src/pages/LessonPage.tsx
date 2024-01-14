import React, {ReactElement, useEffect, useState} from "react";
import {REST} from "../api/REST";
import {useParams} from "react-router-dom";
import {LessonType} from "../types/LessonType";
import {Loading} from "../components/Loading";
import {Button} from "../components/Button";

export function LessonPage(props: any): ReactElement {
    const {id} = useParams<string>();
    const [lesson, setLesson] = useState<LessonType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.getLessonById(id).then(l => {
            setLesson(l!);
            setLoading(false);
        });
    }, [id]);

    if(loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>)
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"} style={{height: "48px", borderBottom: "1px solid rgb(54, 55, 56)"}}>
                <div style={{padding: "15px", textAlign: "center"}}>{lesson?.name}</div>
            </div>

            <div style={{padding: "15px", textAlign: "justify"}} dangerouslySetInnerHTML={{__html: lesson?.content!}}>
            </div>

            <div style={{padding: "15px", display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                {lesson?.tests?.map((t, index) =>
                        <Button text={t.theme} href={"/teach/test/" + t.id}/>
                )}
            </div>

            <div className={"TeachListFooter"} style={{minHeight: "48px", borderTop: "1px solid rgb(54, 55, 56)", display: "flex", alignItems: "center", padding: "15px 15px 15px 15px", fontSize: "13px", textAlign: "justify"}}>
                <div>{lesson?.description}</div>
            </div>
        </section>
    </div>);
}
