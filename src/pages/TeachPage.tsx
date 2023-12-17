import React, {ReactElement, useEffect, useState} from 'react'
import {REST} from "../api/REST";
import {TeachType} from "../types/TeachType";
import {ListItem} from "../components/parts/ListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";

export function TeachPage(props: any): ReactElement {
    const [teach, setTeach] = useState<TeachType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.getAllAssignedTo().then(t => {
            setTeach(t!);
            setLoading(false);
        });
    }, []);

    if (teach?.length == 0) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                Нет назначенных курсов и уроков
            </section>
        </div>);
    }

    return (
        <div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
                <div className={"TeachListHeader"} style={{height: "48px"}}>

                </div>

                {teach?.map((t, index) =>
                    <ListItem key={index} link={"/teach/" + (t.type === 0 ? 'course' : 'lesson') + "/" + t.id}
                              name={t.name} label={t.type === 0 ? 'Курс' : 'Урок'}
                              image={"https://sun1-83.userapi.com/s/v1/ig2/A4ZoqZ4pBe7yzmjMmKaipOECqc_rciQCzWkG3k0tu1YFBEtneBJfActGkdg7uLdaHTtAtAq8ZwscRIXgQWtKesk0.jpg?size=50x50&quality=95&crop=0,0,400,400&ava=1"}
                    />
                )}

                <div className={"TeachListFooter"} style={{height: "48px"}}>

                </div>
            </section>
        </div>
    );
}
/*
image={<FontAwesomeIcon icon={(t.target === 'user' ? faUser : faPeopleGroup)} style={{height: "80px", width: "80px"}}/>}
 */