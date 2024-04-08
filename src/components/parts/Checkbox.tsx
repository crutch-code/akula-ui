import React, {ReactElement, useState} from "react";
import {faSquare, faSquareCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export function Checkbox(props: any): ReactElement {
    let {id, checked, text, description, onChange} = props;
    const [check, setCheck] = useState<boolean>(checked);
    return (
        <div style={{
            color: "rgb(225, 227, 230)",
            cursor: "pointer",
            padding: "0 5px 0 5px",
            marginTop: "3px"
        }} onClick={() => {
            onChange(id, check);
            setCheck(!check);
        }}>
        <span key={id} style={{marginRight: "10px"}}>
            {check
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