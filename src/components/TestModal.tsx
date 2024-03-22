import React, {ReactElement, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faXmark} from "@fortawesome/free-solid-svg-icons";
import {REST} from "../api/REST";

export function TestModal(props: any): ReactElement {
    const [visible, setVisible] = props.visibleState;
    const lid = props.lid;
    const theme = useRef<HTMLInputElement>(null);
    //const photo = useRef<HTMLInputElement>(null);
    //const contentInput = useRef<HTMLTextAreaElement>(null);
    //const descriptionInput = useRef<HTMLTextAreaElement>(null);

    if (!visible) {
        return (<></>);
    }

    const createTest = () => {
        /*if (photo.current?.files?.length ?? 0 > 0) {
            let storage: FormData = new FormData();
            storage.append("type", "test");
            storage.append("name", photo.current!.files!.item(0)!.name);
            storage.append("data", photo.current!.files!.item(0)!)

            REST.uploadFile(storage).then(s => {
                let t: any = {
                    id: null,
                    theme: theme.current!.value,
                    //content: contentInput.current!.value,
                    //description: descriptionInput.current!.value,
                    //disabled: false,
                    //photo: {id: s.id},
                    //index: lastIndex
                }

                REST.adminNewTest(t, parseInt(tid!)).then((tt) =>
                    setVisible(false)
                );
            });
        } else {
            //TODO: error image selecting
        }*/
    }

    return (<div className={"modalBackground"}>
        <div className={"modal"}>
            <div className={"modalHeader"} style={{justifyContent: "space-between"}}>
                Тест
                <div onClick={() => setVisible(false)} style={{cursor: "pointer"}}>
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
            </div>

            <div className={"modalBody"}
                 style={{padding: "20px 24px 20px 24px", fontSize: "13px", display: "flex", flexDirection: "column"}}>


                <div className={"inputGroup"} style={{padding: "15px 0 15px 0", display: "flex", width: "100%"}}>
                    <label style={{
                        color: "rgb(147, 147, 147)",
                        fontSize: "13px",
                        padding: "6px 10px 0 0",
                        whiteSpace: "nowrap"
                    }}>Тема:</label>
                    <input placeholder={"Тема теста"} style={{width: "100%"}} ref={theme}></input>
                </div>

            </div>

            <div className={"modalFooter"}>
                <div className={"button"} style={{
                    backgroundColor: "rgb(225, 227, 230)",
                    border: "1px solid rgb(34, 34, 34)",
                    borderRadius: "8px",
                    color: "rgb(34, 34, 34)"
                }} onClick={() => createTest()}>Сохранить
                </div>
            </div>
        </div>
    </div>)
}