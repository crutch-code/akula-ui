import React, {ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "../../components/parts/ListItem";
import {REST} from "../../api/REST";
import {BackButton} from "../../components/parts/BackButton";

export function AdminPage(props: any): ReactElement {

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"}
                 style={{height: "48px", borderBottom: "1px solid rgb(54, 55, 56)", display: "flex"}}>
                <BackButton link={"/"}/>
                <div style={{
                    padding: "15px",
                    textAlign: "center",
                    width: "100%",
                    fontSize: "13px",
                    fontWeight: "500"
                }}>Администрирование
                </div>
                <div style={{width: "148px", padding: "0 8px 0 20px"}}></div>
            </div>

            <ListItem link={"/admin/courses"}
                      name={"Курсы и уроки"} label=""
                      image={REST.AKULA}
            />
            <ListItem link={"/admin/news"}
                      name={"Новости"} label=""
                      image={REST.AKULA}
            />
            <ListItem link={"/admin/analytics"}
                      name={"Отчеты и аналитика"} label=""
                      image={REST.AKULA}
                      disabled={true}
            />
            <ListItem link={"/admin/users"}
                      name={"Пользователи"} label=""
                      image={REST.AKULA}
            />
            <ListItem link={"/admin/storage"}
                      name={"Хранилище файлов"} label=""
                      image={REST.AKULA}
                      disabled={true}
            />

            <div className={"TeachListFooter"} style={{
                height: "24px",
                borderTop: "1px solid rgb(54, 55, 56)",
                display: "flex",
                alignItems: "center",
                padding: "15px 15px 15px 15px",
                fontSize: "13px",
                textAlign: "justify"
            }}>

            </div>
        </section>
    </div>);

}
