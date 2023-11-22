import {ReactElement} from "react";
import {REST} from "../api/REST";

export function Footer(props: any): ReactElement {
    return (
        <footer className="d-flex pb-3 pt-3 pt-md-3 border-top border-light bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="https://gcg.name" target="_blank" className="d-flex justify-content-center">
                            <img src={REST.BASE + "/api/storage/tsowa.jpg"} height="25" className="mb-3"
                                 alt="General Company Group Logo"/>
                        </a>
                        <div className="d-flex text-center justify-content-center align-items-center"
                             role="contentinfo">
                            <p className="font-weight-normal font-small mb-0">Copyright © <a href="https://gcg.name"
                                                                                             target="_blank">General
                                Company Group</a>,&nbsp;
                                <span className="current-year">2023</span>. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}