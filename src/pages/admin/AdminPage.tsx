import React, {ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {ListItem} from "../../components/parts/ListItem";

export function AdminPage(props: any): ReactElement {

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"}
                 style={{height: "48px", borderBottom: "1px solid rgb(54, 55, 56)", display: "flex"}}>
                <a href={"/"} className={"backButton"} style={{
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
                      image={"https://sun1-83.userapi.com/s/v1/ig2/A4ZoqZ4pBe7yzmjMmKaipOECqc_rciQCzWkG3k0tu1YFBEtneBJfActGkdg7uLdaHTtAtAq8ZwscRIXgQWtKesk0.jpg?size=50x50&quality=95&crop=0,0,400,400&ava=1"}
            />
            <ListItem link={"/admin/news"}
                      name={"Новости"} label=""
                      image={"https://sun1-83.userapi.com/s/v1/ig2/A4ZoqZ4pBe7yzmjMmKaipOECqc_rciQCzWkG3k0tu1YFBEtneBJfActGkdg7uLdaHTtAtAq8ZwscRIXgQWtKesk0.jpg?size=50x50&quality=95&crop=0,0,400,400&ava=1"}
            />
            <ListItem link={"/admin/analytics"}
                      name={"Отчеты и аналитика"} label=""
                      image={"https://sun1-83.userapi.com/s/v1/ig2/A4ZoqZ4pBe7yzmjMmKaipOECqc_rciQCzWkG3k0tu1YFBEtneBJfActGkdg7uLdaHTtAtAq8ZwscRIXgQWtKesk0.jpg?size=50x50&quality=95&crop=0,0,400,400&ava=1"}
            />
            <ListItem link={"/admin/users"}
                      name={"Пользователи"} label=""
                      image={"https://sun1-83.userapi.com/s/v1/ig2/A4ZoqZ4pBe7yzmjMmKaipOECqc_rciQCzWkG3k0tu1YFBEtneBJfActGkdg7uLdaHTtAtAq8ZwscRIXgQWtKesk0.jpg?size=50x50&quality=95&crop=0,0,400,400&ava=1"}
            />
            <ListItem link={"/admin/storage"}
                      name={"Хранилище файлов"} label=""
                      image={"https://sun1-83.userapi.com/s/v1/ig2/A4ZoqZ4pBe7yzmjMmKaipOECqc_rciQCzWkG3k0tu1YFBEtneBJfActGkdg7uLdaHTtAtAq8ZwscRIXgQWtKesk0.jpg?size=50x50&quality=95&crop=0,0,400,400&ava=1"}
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
