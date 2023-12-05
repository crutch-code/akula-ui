import React, {ReactElement} from "react";
import {MeIcon} from "../../data/Icons";

export function LeftMenuItem(props: any): ReactElement {
    const text: string = props.text;
    const href: string = props.href;
    const icon: ReactElement = React.cloneElement(props.icon, {color: "rgb(113, 170, 235)"});

    return (<li>
        <a href={href} className={"LeftMenuItem"}>
            <div className={"icon"}>
                {icon}
            </div>
            <span>{text}</span>
        </a>
    </li>);
}