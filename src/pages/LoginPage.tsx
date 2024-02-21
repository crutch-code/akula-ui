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

    return (
        <section className={"LoginPage"}>
            <div className={"TeachListHeader"}
                 style={{margin: "0 0 16px 0", fontSize: "20px", textAlign: "center"}}>
                <img src={"/logo_white.svg"} alt={"logo"} style={{height: "32px", width: "136px"}}/>
            </div>

            <input className={"LoginInput"} placeholder="логин" type="text" ref={username}
                   onChange={() => hasError(false)}/>
            <input className={"LoginInput"} placeholder="пароль" type="password" ref={password}
                   onChange={() => hasError(false)}/>

            <div className={"LoginError"}>&nbsp;{error ? "Неверный логин или пароль" : ""}&nbsp;</div>

            <button className={"LoginButton"} type="submit" onClick={(e) => {
                e.preventDefault();
                auth();
            }}>Войти
            </button>
        </section>
    );
}