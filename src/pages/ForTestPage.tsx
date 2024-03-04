import React, {ReactElement} from "react";

export function ForTestPage(): ReactElement {
    return (
        <div className={"page_body"}>
            <section className={"page_block col-6"}>
                Hello test content
            </section>
            <section className={"page_block col-6"}>
                Hello test content
            </section>

            <section className={"page_block col-4"}>
                Hello test content
            </section>
            <section className={"page_block col-4"}>
                Hello test content
            </section>
            <section className={"page_block col-4"}>
                Hello test content
            </section>

            <section className={"page_block col-3"}>
                Hello test content
            </section>
            <section className={"page_block col-3"}>
                Hello test content
            </section>
            <section className={"page_block col-3"}>
                Hello test content
            </section>
            <section className={"page_block col-3"}>
                Hello test content
            </section>

            <section className={"page_block col-2"}>
                Hello test content
            </section>
            <section className={"page_block col-2"}>
                Hello test content
            </section>
            <section className={"page_block col-2"}>
                Hello test content
            </section>
            <section className={"page_block col-2"}>
                Hello test content
            </section>
            <section className={"page_block col-2"}>
                Hello test content
            </section>
            <section className={"page_block col-2"}>
                Hello test content
            </section>


            <div className={"inputGroup"} style={{padding: "20px 0 15px 0", display: "flex", width: "100%"}}>
                <label style={{color: "rgb(147, 147, 147)", fontSize: "13px", padding: "6px 10px 0 0"}}>Название&nbsp;курса:</label>
                <textarea placeholder={"Полное название курса"} style={{width: "100%"}}></textarea>
            </div>

            <div className={"inputGroup"} style={{padding: "20px 0 15px 0", display: "flex", width: "100%"}}>
                <label style={{color: "rgb(147, 147, 147)", fontSize: "13px", padding: "6px 10px 0 0"}}>Название&nbsp;курса:</label>
                <input placeholder={"Полное название курса"} style={{width: "100%"}}></input>
            </div>

        </div>
    )
}