import {ReactElement, useState} from "react";

export function Toggler(props: any): ReactElement {
    const [disabled, setDisabled] = useState<boolean>(props.disabled);
    const switchMe = () => {
        setDisabled(!disabled);
        props.callback(!disabled);
    }
    return (<div className={"Toggler" + (disabled ? "" : " on")} onClick={() => switchMe()}></div>);
}