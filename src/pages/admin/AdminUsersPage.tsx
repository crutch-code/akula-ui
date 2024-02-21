import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {Loading} from "../../components/Loading";
import {REST} from "../../api/REST";
import {UserType} from "../../types/UserType";
import {ListItem} from "../../components/parts/ListItem";

export function AdminUsersPage(props: any): ReactElement {
    const [users, setUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        REST.adminGetUsers().then(u => {
            setUsers(u!);
            setLoading(false);
        });
    }, []);

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
                        <FontAwesomeIcon icon={faAngleLeft} style={{width: "24px", height: "24px"}}/>
                        Назад
                    </a>
                </div>

                {users?.map((u, index) =>
                    //TODO: modal
                    <ListItem key={index} link={"/admin/users/" + u.id}
                              name={u.fio} label="Пользователь"
                              image={REST.BASE + "/api/storage/" + u.photo.name}
                    />
                )}

                <div className={"TeachListFooter"} style={{height: "48px"}}>

                </div>
            </section>
        </div>
    );

}