import React, {ReactElement} from "react";
import {faSquare, faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function Checkbox(props: any): ReactElement {
    const {key, checked, text, description} = props;
    return (
        <div style={{
            color: "rgb(225, 227, 230)",
            cursor: "pointer",
            padding: "0 5px 0 5px",
            marginTop: "3px"
        }}>
        <span key={key} style={{marginRight: "10px"}}>
            {checked
                ? <FontAwesomeIcon icon={faSquareCheck}/>
                : <FontAwesomeIcon icon={faSquare}/>}
        </span>
            <label style={{
                fontSize: "13px",
                lineHeight: "16px",
                verticalAlign: "middle",
                textAlign: "center"
            }}>{text}</label>
            {description
                ? <label style={{
                    fontSize: "13px",
                    lineHeight: "16px",
                    verticalAlign: "middle",
                    textAlign: "center",
                    fontStyle: "italic"
                }}> ({description})</label>
                : ''
            }
        </div>
    );
}