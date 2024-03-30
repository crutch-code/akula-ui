import React, {ReactElement, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {REST} from "../api/REST";

export function CourseModal(props: any): ReactElement {
    const [visible, setVisible] = props.visibleState;
    const name = useRef<HTMLInputElement>(null);
    const photo = useRef<HTMLInputElement>(null);

    if (!visible) {
        return (<></>);
    }

    const createCourse = () => {
        if ((photo.current?.files?.length ?? 0) > 0) {
            let storage: FormData = new FormData();
            storage.append("type", "course");
            storage.append("name", photo.current!.files!.item(0)!.name);
            storage.append("data", photo.current!.files!.item(0)!)

            REST.uploadFile(storage).then(s => {
                let c: any = {
                    id: null,
                    name: name.current!.value,
                    disabled: false,
                    photo: {id: s.id}
                }

                REST.adminNewCourse(c).then((cc) =>
                    setVisible(false)
                );
            });
        } else {
            //TODO: error image selecting
        }
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

            <div className={"modalBody"}
                 style={{padding: "20px 24px 20px 24px", fontSize: "13px", display: "flex", flexDirection: "column"}}>

                <div className={"inputPhoto"} onClick={() => {photo.current!.click()}}>
                    <input type={"file"} style={{display: "none"}} ref={photo}/>
                    <span style={{color: "rgb(113, 170, 235)", padding: "0 8px 0 0"}}><FontAwesomeIcon icon={faPlus}/></span>
                    Загрузить фотографию
                </div>

                <div className={"inputGroup"} style={{padding: "15px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Название курса:</label>
                    <input placeholder={"Полное название курса"} style={{width: "100%"}} ref={name}></input>
                </div>

            </div>

            <div className={"modalFooter"}>
                <div className={"button"} style={{
                    backgroundColor: "rgb(225, 227, 230)",
                    border: "1px solid rgb(34, 34, 34)",
                    borderRadius: "8px",
                    color: "rgb(34, 34, 34)"
                }} onClick={() => createCourse()}>Сохранить
                </div>
            </div>
        </div>
    </div>)
}