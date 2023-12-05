import {ReactElement} from "react";

export function Separator(props: any): ReactElement {
    const color: string = "rgb(54, 55, 56)";
    const wide: boolean = props.wide ?? false;

    return (<div className={(wide ? "wide-" : "") + "separator"} style={{margin: (wide ? "14px 8px 14px 0": "9px 8px 9px 36px")}}>
        <hr style={{color: color, borderColor: color, backgroundColor: color}}/>
    </div>)
}
