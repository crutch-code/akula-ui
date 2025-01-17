import React, {ReactElement, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faRotate} from "@fortawesome/free-solid-svg-icons";
import {Loading} from "../../components/Loading";
import {REST} from "../../api/REST";
import {UserType} from "../../types/UserType";
import {ListItem} from "../../components/parts/ListItem";
import {BackButton} from "../../components/parts/BackButton";

export function AdminUsersPage(props: any): ReactElement {
    const [users, setUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(() => {
        REST.adminGetUsers(page).then(u => {
            setUsers(u!);
            setLoading(false);
        });
    }, [page]);

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

                    <div className={"forwardButton"} style={{
                        width: "148px",
                        color: "rgb(129, 140, 153)",
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                        padding: "0 8px 0 20px",
                        cursor: "pointer",
                        fontSize: "14px",
                        justifyContent: "flex-end",
                        textDecoration: "none",
                        whiteSpace: "nowrap"
                    }} onClick={() => REST.adminSyncUsers()}>
                        Загрузить из 1С
                        <FontAwesomeIcon icon={faRotate} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
                    </div>


                </div>

                {users?.map((u, index) =>
                    //TODO: modal ???
                    <ListItem key={index} link={"/admin/users/" + u.id}
                              name={u.fio} label={u.department.name}
                              image={REST.BASE + "/api/storage/" + (u.disabled ? '0' : u.photo.id)}
                              disabled={u.disabled} active={!u.disabled}
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
                    {users!.length >= REST.PAGE_SIZE
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