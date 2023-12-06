import {ReactElement} from "react";
import {LogoutIcon} from "../../data/Icons";
import {REST} from "../../api/REST";
import {UserType} from "../../types/UserType";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function ProfileMenu(props: any): ReactElement {
    const me: UserType = props.me;

    return (
        <div className={"wrapper"}
             style={{width: "100%", position: "absolute", top: "48px"}}>
            <div style={{width: "1076px", margin: "auto", display: "flex", justifyContent: "flex-end"}}>
                <div style={{
                    width: "300px",
                    backgroundColor: "rgb(41, 41, 41)",
                    borderRadius: "0 0 12px 12px",
                    zIndex: "800",
                    boxShadow: "0 20px 40px 0 rgba(0,0,0,0.3)",
                    border: "1px solid rgba(220, 225, 230, 0.15)",
                    paddingTop: "12px",
                    paddingBottom: "8px"
                }}>

                    <div className={"profileBlock"}
                         style={{
                             height: "76px",
                             margin: "0 12px 6px 12px",
                             backgroundColor: "rgb(51, 51, 51)",
                             borderRadius: "8px",
                             display: "flex",
                             alignItems: "center"
                         }}>
                        <a href="/me" style={{
                            borderRadius: "8px",
                            width: "100%",
                            padding: "10px 10px 10px 16px",
                            cursor: "pointer",
                            display: "flex",
                            textDecorationLine: "none",
                            fontSize: "13px",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "rgb(101, 101, 101)"
                        }}>
                            <img style={{width: "40px", height: "40px", marginRight: "12px", borderRadius: "50%"}}
                                 src={REST.BASE + "/api/storage/" + me.photo.name} alt={"avatar"}/>
                            <div style={{display: "flex", flexDirection: "column", lineHeight: "20px", width: "100%"}}>
                                <div>{me.fio}</div>
                                <div style={{color: "rgb(130, 130, 130)"}}>Должность</div>
                                <div style={{color: "rgb(130, 130, 130)"}}>{me.department.name}</div>
                            </div>

                            <FontAwesomeIcon icon={faChevronRight}/>
                        </a>
                    </div>

                    <div className={"profileMenuEntry"} style={{
                        height: "36px",
                        padding: "0 16px 0 16px",
                        lineHeight: "30px",
                        fontSize: "13px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <LogoutIcon color={"rgb(113, 170, 235)"}/>
                        <a href={"/logout"}
                           style={{textDecorationLine: "none", height: "30px", marginLeft: "8px"}}>Выйти</a>
                    </div>

                </div>
            </div>
        </div>);
}