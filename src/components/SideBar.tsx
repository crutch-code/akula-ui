import {ReactElement} from "react";
import {Separator} from "./parts/Separator";
import {LeftMenuItem} from "./parts/LeftMenuItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCircleUser,
    faGraduationCap,
    faNewspaper, faSliders
} from "@fortawesome/free-solid-svg-icons";

export function SideBar(props: any): ReactElement {
    return (<nav className={"side_bar"}>
        <ol>
            <LeftMenuItem href={"/me"} text={"Моя страница"} icon={<FontAwesomeIcon icon={faCircleUser} style={{width: "18px", height: "18px"}}/>}/>
            <LeftMenuItem href={"/feed"} text={"Новости"} icon={<FontAwesomeIcon icon={faNewspaper} style={{width: "18px", height: "18px"}}/>}/>
            <LeftMenuItem href={"/teach"} text={"Обучение"} icon={<FontAwesomeIcon icon={faGraduationCap} style={{width: "18px", height: "18px"}}/>} counter={0}/>
            <Separator/>
            <LeftMenuItem href={"/admin"} text={"Управление"} icon={<FontAwesomeIcon icon={faSliders} style={{width: "18px", height: "18px"}}/>}/>
            <Separator wide={true}/>
        </ol>
    </nav>);
}
