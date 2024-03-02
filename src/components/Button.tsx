import {ReactElement} from "react";

export function Button(props: any): ReactElement {
    const text: string = props.text!;
    const href: string = props.href!;
    const disabled: boolean = props.disabled ?? false;
    const className: string = props.className ?? '';

    return (<a className={className + " button" + (disabled ? " disabled": "")} style={{marginRight: "8px", marginBottom: "8px", textDecoration: "none"}} href={href}>
        {text}
    </a>)
}