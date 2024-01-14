import {ReactElement} from "react";

export function Loading(props: any): ReactElement {
    return (
        <div className={"col-12 text-center"} style={{textAlign: "center"}}>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span className="ml-1" style={{fontSize: "13px"}}>Загрузка...</span>
        </div>
    );
}