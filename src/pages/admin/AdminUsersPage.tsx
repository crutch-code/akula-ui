import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {Loading} from "../../components/Loading";
import {REST} from "../../api/REST";
import {UserType} from "../../types/UserType";
import {ListItem} from "../../components/parts/ListItem";
import {BackButton} from "../../components/parts/BackButton";

export function AdminUsersPage(props: any): ReactElement {
    const [users, setUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    useEffect(() => {
        REST.adminGetUsers(page).then(u => {
            setUsers(u!);
            setLoading(false);
        });
    }, []);

    const loadNext = () => {
        setLoading(true);
        setPage(p => p + 1);
        REST.adminGetUsers(page + 1).then(u => {
            setUsers(u!);
            setLoading(false);
        });
    }

    const loadPrev = () => {
        setLoading(true);
        setPage(p => p - 1);
        REST.adminGetUsers(page - 1).then(u => {
            setUsers(u!);
            setLoading(false);
        });
    }

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
                <div className={"TeachListHeader"} style={{
                    height: "48px",
                    display: "flex",
                    borderBottom: "1px solid rgb(54, 55, 56)",
                    justifyContent: "space-between"
                }}>
                    <BackButton link={"/admin"}/>
                    <div style={{
                        padding: "15px",
                        textAlign: "center",
                        width: "100%",
                        fontSize: "13px",
                        fontWeight: "500"
                    }}>Пользователи
                    </div>
                    <div style={{width: "148px", padding: "0 8px 0 20px"}}></div>
                </div>

                <Loading/>

                <div className={"TeachListFooter"} style={{
                    height: "48px",
                    borderTop: "1px solid rgb(54, 55, 56)",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                </div>
            </section>
        </div>)
    }

    return (<div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
                <div className={"TeachListHeader"} style={{
                    height: "48px",
                    display: "flex",
                    borderBottom: "1px solid rgb(54, 55, 56)",
                    justifyContent: "space-between"
                }}>
                    <BackButton link={"/admin"}/>
                    <div style={{
                        padding: "15px",
                        textAlign: "center",
                        width: "100%",
                        fontSize: "13px",
                        fontWeight: "500"
                    }}>Пользователи
                    </div>
                    <div style={{width: "148px", padding: "0 8px 0 20px"}}></div>
                </div>

                {users?.map((u, index) =>
                    //TODO: modal ???
                    <ListItem key={index} link={"/admin/users/" + u.id}
                              name={u.fio} label="Пользователь"
                              image={REST.BASE + "/api/storage/" + u.photo.name}
                              disabled={u.disabled}
                    />
                )}

                <div className={"TeachListFooter"} style={{
                    height: "48px",
                    borderTop: "1px solid rgb(54, 55, 56)",
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    {page === 0
                        ? ""
                        : <div className={"backButton"} style={{
                            width: "148px",
                            color: "rgb(129, 140, 153)",
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            padding: "0 20px 0 8px",
                            cursor: "pointer",
                            fontSize: "14px",
                            textDecoration: "none"
                        }} onClick={() => loadPrev()}>
                            <FontAwesomeIcon icon={faAngleLeft}
                                             style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                            Предыдущая
                        </div>
                    }
                    <div style={{width: "148px", padding: "0 20px 0 8px"}}></div>
                    {users!.length > 0
                        ? <div className={"forwardButton"} style={{
                            width: "148px",
                            color: "rgb(129, 140, 153)",
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                            padding: "0 8px 0 20px",
                            cursor: "pointer",
                            fontSize: "14px",
                            justifyContent: "flex-end",
                            textDecoration: "none"
                        }} onClick={() => loadNext()}>
                            Следующая
                            <FontAwesomeIcon icon={faAngleRight}
                                             style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                        </div>
                        : ""
                    }
                </div>
            </section>
        </div>
    );

}