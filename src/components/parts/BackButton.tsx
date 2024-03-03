import React, {ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";

export function BackButton(props: any): ReactElement {
    const {link} = props;

    return (<a href={link} className={"backButton"} style={{
        width: "148px",
            color: "rgb(129, 140, 153)",
            display: "flex",
            alignItems: "center",
            height: "100%",
            padding: "0 20px 0 8px",
            cursor: "pointer",
            fontSize: "14px",
            textDecoration: "none"
    }}>
    <FontAwesomeIcon icon={faAngleLeft} style={{marginLeft: "5px", width: "24px", height: "24px"}}/>
    Назад
    </a>)
}