import React, {MouseEventHandler, ReactElement} from "react";
import {Button} from "../Button";
import DeleteIcon from "./icons/DeleteIcon";
import Switch from "../switch/Switch";

export function ListItem(props: any): ReactElement {
    const active: boolean = props.active ?? true;
    const disabled: boolean = props.disabled ?? false;
    const image: string = props.image;
    const link: string = props.link;
    const name: string = props.name;
    const label: string = props.label;
    const onClick = props.onClick;
    const deletionHandler = props.deletion;
    const [disableSwitch, setDisableSwitch] = React.useState(false);


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

    if (onClick !== undefined) {
        return (<div
            className={"ListItem" + (disabled ? " disabled" : "")}
            onDoubleClick={disabled ? (e) => {
            } : onClick}
            style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}
        >
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

            {!deletionHandler ? <Button className ="danger rounded" text={<DeleteIcon/>} disabled={false} onClick={deletionHandler}/> : null}
            <Switch on ={disableSwitch} handleToggle={() => {setDisableSwitch(!disableSwitch); }}/>

        </div>);
    }

    return (
        <a className={"ListItem" + (disabled ? " disabled" : "")} href={link}>
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
        </a>

    );
}
