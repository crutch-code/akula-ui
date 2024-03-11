import React, {ReactElement} from "react";
import {UserType} from "../types/UserType";
import {REST} from "../api/REST";

export function MePage(props: any): ReactElement {
    const me: UserType = props.me;

    return (
        <div className={"page_body"}>
            <section className={"page_block col-12"}>
                <div style={{
                    height: "252px",
                    margin: "-16px -20px",
                    borderRadius: "12px",
                    backgroundSize: "cover",
                    backgroundImage: "url(https://sun9-67.userapi.com/impf/u20ynsQTyXnRugwMa9ZUXeloEw8KUvxrRCCqBw/rp9U9xAQpAU.jpg?size=960x384&quality=96&crop=0,0,1920,640&sign=106593223420cf2530f2569a69aa8f59&c_uniq_tag=iG01n_gxnySbvKQQX7wXbR3UXXCMxN6dXgqLtZ4Qp10&type=helpers)"
                }}></div>


                <div style={{display: "flex", padding: "20px", borderRadius: "12px", margin: "calc(-16px - 25px) -20px -16px -20px", background: "rgb(34, 34, 34)"}}>

                    <img src={REST.BASE + '/api/storage/' + me.photo.id} alt="user"
                         style={{
                             width: "150px",
                             height: "150px",
                             borderRadius: "50%",
                             border: "4px solid rgb(34, 34, 34)",
                             marginTop: "-95px"
                         }}/>


                    <div style={{marginLeft: "16px", marginBottom: "4px"}}>
                        <h2 style={{fontSize: "21px", fontWeight: "600"}}>{me.fio}</h2>
                        <span style={{fontSize: "13px", color: "rgb(147, 147, 147)"}}>{me.department.name}</span>
                    </div>
                </div>


            </section>
        </div>
    );
}
//backgroundImage: "rgb(39, 39, 39)"