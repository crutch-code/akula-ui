import {ReactElement} from "react";

export function ListItem(props: any): ReactElement {
    const active: boolean = props.active ?? true;
    const disabled: boolean = props.disabled ?? false;
    const image: string = props.image;
    const link: string = props.link;
    const name: string = props.name;
    const label: string = props.label;

    if (!active) {
        return (<div className={"ListItem" + (disabled ? " disabled" : "")} style={{cursor: "not-allowed"}}>
            <img src={image} alt={""}
                 style={{width: "50px", height: "50px", borderRadius: "50%", margin: "11px 14px 7px 0"}}/>
            <div style={{padding: "10px 15px 10px 0", width: "100%", display: "flex", flexDirection: "column"}}>
                <div style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    lineHeight: "15px",
                    height: "19px",
                    margin: "3px 0 7px 0"
                }}>{name}</div>

                <div style={{
                    fontSize: "13px",
                    fontWeight: "400",
                    lineHeight: "15px",
                    height: "19px",
                    color: "rgb(147, 147, 147)"
                }}>{label}</div>
            </div>
        </div>);
    }

    return (<a className={"ListItem" + (disabled ? " disabled" : "")} href={link}>
        <img src={image} alt={""}
             style={{width: "50px", height: "50px", borderRadius: "50%", margin: "11px 14px 7px 0"}}/>
        <div style={{padding: "10px 15px 10px 0", width: "100%", display: "flex", flexDirection: "column"}}>
            <div style={{
                fontSize: "13px",
                fontWeight: "500",
                lineHeight: "15px",
                height: "19px",
                margin: "3px 0 7px 0"
            }}>{name}</div>

            <div style={{
                fontSize: "13px",
                fontWeight: "400",
                lineHeight: "15px",
                height: "19px",
                color: "rgb(147, 147, 147)"
            }}>{label}</div>
        </div>
    </a>);
}
