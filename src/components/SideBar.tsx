import {ReactElement} from "react";
import {Separator} from "./parts/Separator";
import {LeftMenuItem} from "./parts/LeftMenuItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBullhorn,
    faChartPie,
    faCircleUser,
    faComments,
    faGraduationCap,
    faNewspaper, faSliders
} from "@fortawesome/free-solid-svg-icons";

export function SideBar(props: any): ReactElement {
    return (<nav className={"side_bar"}>
        <ol>
            <LeftMenuItem href={"/me"} text={"Моя страница"} icon={<FontAwesomeIcon icon={faCircleUser} style={{width: "18px", height: "18px"}}/>}/>
            <LeftMenuItem href={"/feed"} text={"Новости"} icon={<FontAwesomeIcon icon={faNewspaper} style={{width: "18px", height: "18px"}}/>}/>
            <LeftMenuItem href={"/teach"} text={"Обучение"} icon={<FontAwesomeIcon icon={faGraduationCap} style={{width: "18px", height: "18px"}}/>} counter={0}/>
            <LeftMenuItem href={"/im"} text={"Сообщения"} icon={<FontAwesomeIcon icon={faComments} style={{width: "18px", height: "18px"}}/>} counter={0}/>
            <LeftMenuItem href={"/poll"} text={"Опросы"} icon={<FontAwesomeIcon icon={faBullhorn} style={{width: "18px", height: "18px"}}/>} counter={0}/>
            <Separator/>
            <LeftMenuItem href={"/analytics"} text={"Статистика"} icon={<FontAwesomeIcon icon={faChartPie} style={{width: "18px", height: "18px"}}/>}/>
            <Separator/>
            <LeftMenuItem href={"/admin"} text={"Управление"} icon={<FontAwesomeIcon icon={faSliders} style={{width: "18px", height: "18px"}}/>}/>
            <Separator wide={true}/>
        </ol>
    </nav>);
}