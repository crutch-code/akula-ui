import {ReactElement} from "react";

export function Button(props: any): ReactElement {
    const text: string = props.text!;
    const onClick = props.onClick;
    const href: string = props.href!;
    const disabled: boolean = props.disabled ?? false;
    const className: string = props.className ?? '';

    if (onClick !== undefined) {
        return (<div className={className + " button" + (disabled ? " disabled" : "")}
                     style={{marginBottom: "8px", cursor: disabled ? "not-allowed" : "pointer"}}
                     onClick={disabled ? (e) => { } : onClick}>
            {text}
        </div>)
    }
    return (<a className={className + " button" + (disabled ? " disabled" : "")}
               style={{marginRight: "8px", marginBottom: "8px", textDecoration: "none"}} href={href}>
        {text}
    </a>)
}