import React, {ReactElement, useRef, useState} from "react";
import {REST} from "../api/REST";

export function LoginPage(props: any): ReactElement {
    const username = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const [error, hasError] = useState<boolean>(false);
    const auth = () => {
        hasError(false);
        REST.login(
            username.current?.value ?? '',
            password.current?.value ?? ''
        ).then(() => document.location = "/")
            .catch((error) => {
                console.error(error);
                hasError(true);
            });
    }

    return (<div className={"page"}>
            <div className={"page_body"} style={{display: "flex", justifyContent: "center"}}>
                <section className={"page_block col-4"}>
                    <div className={"TeachListHeader"} style={{margin: "0 0 16px 0", fontSize: "20px", textAlign: "center"}}>
                        <img src={"/logo_white.svg"} alt={"logo"} style={{height: "32px", width: "136px"}}/>
                    </div>


                    <input style={{
                        appearance: "auto",
                        width: "calc(100% - 24px)",
                        height: "18px",
                        backgroundColor: "rgb(51, 51, 51)",
                        border: "1px solid rgba(255, 255, 255, 0.16)",
                        borderRadius: "8px",
                        fontSize: "13px",
                        color: "white",
                        padding: "8px 11px 8px 11px",
                        marginTop: "12px",
                        cursor: "text"
                    }}
                           placeholder="логин" type="text" ref={username}/>
                    <input style={{
                        appearance: "auto",
                        width: "calc(100% - 24px)",
                        height: "18px",
                        backgroundColor: "rgb(51, 51, 51)",
                        border: "1px solid rgba(255, 255, 255, 0.16)",
                        borderRadius: "8px",
                        fontSize: "13px",
                        color: "white",
                        padding: "8px 11px 8px 11px",
                        marginTop: "12px",
                        cursor: "text"
                    }} placeholder="пароль" type="password" ref={password}/>

                    <button type="submit" style={{
                        backgroundColor: "white",
                        color: "rgb(34,34,34)",
                        border: "1px solid rgb(34,34,34)",
                        borderRadius: "8px",
                        height: "36px",
                        padding: "0 16px 0 16px",
                        width: "100%",
                        fontSize: "14px",
                        marginTop: "24px",
                        cursor: "pointer"
                    }} onClick={(e) => {
                        e.preventDefault();
                        auth();
                    }}>Войти
                    </button>


                </section>
            </div>
        </div>
    );
}