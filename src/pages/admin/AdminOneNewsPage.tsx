import React, {ReactElement, useEffect, useState} from "react";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {useParams} from "react-router-dom";
import {Toggler} from "../../components/parts/Toggler";
import {NewsType} from "../../types/NewsType";
import {BackButton} from "../../components/parts/BackButton";

export function AdminOneNewsPage(props: any): ReactElement {
    const {id} = useParams<string>();
    const [news, setNews] = useState<NewsType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.adminGetNewsById(parseInt(id!)).then((c) => {
            setNews(c)
            setLoading(false);
        });
    }, [id])

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>)
    }

    const callBack = (disabled: boolean) => {
        if(disabled) {
            REST.adminGetNewsDisable(parseInt(id!));
        } else {
            REST.adminGetNewsEnable(parseInt(id!));
        }
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{padding: 0}}>
            <div className={"TeachListHeader"} style={{height: "48px", display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgb(54, 55, 56)",}}>
                <BackButton link={"/admin/news"}/>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    padding: "0 20px 0 20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    justifyContent: "center"
                }}>
                    <Toggler disabled={news!.disabled ?? false} callback={callBack}/>
                </div>
            </div>

            <div style={{padding: "15px", textAlign: "justify", fontSize: "15px"}}>
                {news!.content}
            </div>


            <div className={"TeachListFooter"} style={{
                height: "48px",
                borderTop: "1px solid rgb(54, 55, 56)",
                display: "flex",
                justifyContent: "space-between"
            }}>

            </div>



        </section>
    </div>);

}