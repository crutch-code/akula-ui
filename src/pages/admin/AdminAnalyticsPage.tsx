import React, {ReactElement} from "react";
import {BackButton} from "../../components/parts/BackButton";

export function AdminAnalyticsPage(props: any): ReactElement {

    return (<div className={"page_body"}>
            <section className={"page_block col-12"} style={{padding: 0}}>
                <div className={"TeachListHeader"} style={{height: "48px", display: "flex", borderBottom: "1px solid rgb(54, 55, 56)", justifyContent: "space-between"}}>
                    <BackButton link={"/admin"}/>
                    <div style={{
                        padding: "15px",
                        textAlign: "center",
                        width: "100%",
                        fontSize: "13px",
                        fontWeight: "500"
                    }}>Отчеты и аналитика
                    </div>
                    <div style={{width: "148px", padding: "0 8px 0 20px"}}></div>
                </div>

                TODO: Администрирование Отчетных форм

                <div className={"TeachListFooter"} style={{
                    height: "48px",
                    borderTop: "1px solid rgb(54, 55, 56)",
                    display: "flex",
                    justifyContent: "space-between"
                }}>

                </div>
            </section>
        </div>
    );

}