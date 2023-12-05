import {ReactElement} from "react";
import {MeIcon, MusicIcon, NewsIcon, SettingsIcon, VideoIcon} from "../data/Icons";
import {Separator} from "./parts/Separator";
import {LeftMenuItem} from "./parts/LeftMenuItem";

export function SideBar(props: any): ReactElement {
    return (<nav className={"side_bar"}>
        <ol>
            <LeftMenuItem href={"/me"} text={"Моя страница"} icon={<MeIcon/>}/>
            <LeftMenuItem href={"/feed"} text={"Новости"} icon={<NewsIcon/>}/>
            <LeftMenuItem href={"/teach"} text={"Обучение"} icon={<VideoIcon/>}/>
            <Separator/>
            <LeftMenuItem href={"/analytics"} text={"Анатилика"} icon={<MusicIcon/>}/>
            <Separator/>
            <LeftMenuItem href={"/admin"} text={"Управление"} icon={<SettingsIcon/>}/>
            <Separator wide={true}/>
        </ol>
    </nav>);
}