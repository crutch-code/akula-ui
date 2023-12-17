import React, {ReactElement} from "react";

export function LeftMenuItem(props: any): ReactElement {
    const text: string = props.text;
    const href: string = props.href;
    const icon: any = props.icon;
    const counter: number = props.counter ?? 0;

    return (<li>
        <a href={href} className={"LeftMenuItem"}>
            <div className={"icon"} style={{color: "rgb(113, 170, 235)"}}>
                {icon}
            </div>
            <span style={{width: "122px"}}>{text}</span>
            {counter > 0 ? <span className={"counter"} style={{
                backgroundColor: "rgb(130, 130, 130)",
                marginLeft: "4px",
                borderRadius: "12px",
                padding: "0 6px 0 6px",
                maxWidth: "50px",
                lineHeight: "20px",
                fontSize: "11px",
                fontWeight: "700",
            }}>{counter > 99 ? "99+" : counter}</span> : ""}
        </a>
    </li>);
}