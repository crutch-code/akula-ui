import {ReactElement} from "react";

export function Footer(props: any): ReactElement {
    const hidden: boolean = props.hidden;
    if (hidden) {
        return (<></>);
    }
    return (
        <footer
            style={{backgroundColor: "rgb(34, 34, 34)", height: "32px", position: "fixed", bottom: "0", width: "100%"}}>
            <div style={{width: "1076px", margin: "auto"}}>
                <div style={{
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    margin: "auto",
                    fontSize: "13px",
                    textAlign: "center"
                }}>
                    Copyright © <a href="https://gcg.name" target="_blank" rel="noreferrer">General Company
                    Group</a>,&nbsp;<span>{new Date().getFullYear()}</span>. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
