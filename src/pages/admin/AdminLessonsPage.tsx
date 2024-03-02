import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faPlus} from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "../../components/parts/ListItem";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {LessonType} from "../../types/LessonType";
import {useParams} from "react-router-dom";

export function AdminLessonsPage(props: any): ReactElement {
    const {cid} = useParams<string>();
    const [lessons, setLessons] = useState<LessonType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.adminGetLessons(parseInt(cid!)).then((l) => {
            setLessons(l)
            setLoading(false);
        });
    }, [cid])

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
                <a href={"/admin/courses/" + cid} className={"backButton"} style={{
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
                    Создать урок
                    <FontAwesomeIcon icon={faPlus} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                </div>
            </div>

            {lessons?.map((c, index) =>
                <ListItem key={index} link={"/admin/courses/" + cid + "/lessons/" + c.id}
                          name={c.name} label="Урок"
                          image={REST.AKULA}
                          disabled={c.disabled}
                />
            )}

            <div className={"TeachListFooter"} style={{height: "48px"}}>

            </div>



        </section>
    </div>);

}