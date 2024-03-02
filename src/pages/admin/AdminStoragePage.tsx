import React, {ReactElement} from "react";
import {Loading} from "../../components/Loading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

export function AdminStoragePage(props: any): ReactElement {

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

                TODO: Администрирование Хранилища файлов

                <div className={"TeachListFooter"} style={{height: "48px"}}>

                </div>
            </section>
        </div>
    );
}