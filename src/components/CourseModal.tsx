import React, {ReactElement} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export function CourseModal(props: any): ReactElement {
    const [visible, setVisible] = props.visibleState;

    if (!visible) {
        return (<></>);
    }
// onClick={(e) => {e.stopPropagation(); setVisible(false)}}
    return (<div className={"modalBackground"}>
        <div className={"modal"}>
            <div className={"modalHeader"} style={{justifyContent: "space-between"}}>
                Курс
                <div onClick={() => setVisible(false)} style={{cursor: "pointer"}}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
            </div>

            <div className={"modalBody"} style={{padding: "20px 24px 20px 24px", fontSize: "13px", display: "flex", flexDirection: "column"}}>

                <div className={"inputGroup"} style={{padding: "20px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{color: "rgb(147, 147, 147)", fontSize: "13px", padding: "6px 10px 0 0", whiteSpace: "nowrap"}}>Название курса:</label>
                    <textarea placeholder={"Полное название курса"} style={{width: "100%"}}></textarea>
                </div>

                <div className={"inputGroup"} style={{padding: "20px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{color: "rgb(147, 147, 147)", fontSize: "13px", padding: "6px 10px 0 0", whiteSpace: "nowrap"}}>Название курса:</label>
                    <input placeholder={"Полное название курса"} style={{width: "100%"}}></input>
                </div>

            </div>

            <div className={"modalFooter"}>
                <div className={"button"} style={{
                    backgroundColor: "rgb(225, 227, 230)",
                    border: "1px solid rgb(34, 34, 34)",
                    borderRadius: "8px",
                    color: "rgb(34, 34, 34)"
                }}>Сохранить
                </div>
            </div>
        </div>
    </div>)
}