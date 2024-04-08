import React, {ReactElement, useEffect, useState} from "react";
import {REST} from "../../api/REST";
import {Loading} from "../../components/Loading";
import {useParams} from "react-router-dom";
import {UserType} from "../../types/UserType";
import {RoleType} from "../../types/RoleType";
import {Checkbox} from "../../components/parts/Checkbox";
import {CourseType} from "../../types/CourseType";

export function AdminUserPage(props: any): ReactElement {
    const {id} = useParams<string>();
    const [user, setUser] = useState<UserType>();
    const [roles, setRoles] = useState<RoleType[]>();
    const [courses, setCourses] = useState<CourseType[]>();
    const [loading, setLoading] = useState(true);
    const [loadingRoles, setLoadingRoles] = useState(true);
    const [loadingCourses, setLoadingCourses] = useState(true);

    //const imageInput = useRef<HTMLInputElement>(null);
    //const nameInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        REST.getUserById(parseInt(id!)).then((u) => {
            setUser(u)
            setLoading(false);
        });
        REST.adminGetAssignedCourses(parseInt(id!)).then((c) => {
            setCourses(c);
            setLoadingCourses(false);
        });
        REST.adminGetAssignedRoles(parseInt(id!)).then((r) => {
            setRoles(r);
            setLoadingRoles(false);
        });
    }, [id])

    const onRoleChange = (rid: number, prev: boolean): boolean => {
        if(prev) {
            REST.adminRemoveRole(rid, parseInt(id as string));
            return false;
        } else {
            REST.adminAddRole(rid, parseInt(id as string));
            return true;
        }
    }

    const onCourseChange = (cid: number, prev: boolean): boolean => {
        if(prev) {
            //REST.adminRemoveCourse(cid, parseInt(id as string));
            return false;
        } else {
            //REST.adminAddCourse(cid, parseInt(id as string));
            return true;
        }
    }

    if (loading) {
        return (<div className={"page_body"}>
            <section className={"page_block col-12"}>
                <Loading/>
            </section>
        </div>)
    }

    return (<div className={"page_body"}>
        <section className={"page_block col-12"}>
            <div style={{
                height: "252px",
                margin: "-16px -20px",
                borderRadius: "12px",
                backgroundSize: "cover",
                backgroundImage: "url(https://sun9-67.userapi.com/impf/u20ynsQTyXnRugwMa9ZUXeloEw8KUvxrRCCqBw/rp9U9xAQpAU.jpg?size=960x384&quality=96&crop=0,0,1920,640&sign=106593223420cf2530f2569a69aa8f59&c_uniq_tag=iG01n_gxnySbvKQQX7wXbR3UXXCMxN6dXgqLtZ4Qp10&type=helpers)"
            }}></div>


            <div style={{
                display: "flex",
                padding: "20px",
                borderRadius: "12px",
                margin: "calc(-16px - 25px) -20px -16px -20px",
                background: "rgb(34, 34, 34)"
            }}>

                <img src={REST.BASE + '/api/storage/' + user!.photo.id} alt="user"
                     style={{
                         width: "150px",
                         height: "150px",
                         borderRadius: "50%",
                         border: "4px solid rgb(34, 34, 34)",
                         marginTop: "-95px"
                     }}/>


                <div style={{marginLeft: "16px", marginBottom: "4px"}}>
                    <h2 style={{fontSize: "21px", fontWeight: "600"}}>{user!.fio}</h2>
                    <span style={{fontSize: "13px", color: "rgb(147, 147, 147)"}}>{user!.department.name}</span>
                </div>
            </div>

        </section>

        <section className={"page_block col-6"}>
            {loadingCourses
                ? <Loading/>
                : courses?.map(c =>
                    <Checkbox key={c.id} id={c.id} checked={c.assigned} text={c.name} onChange={onCourseChange}/>
                )
            }
        </section>

        <section className={"page_block col-6"} style={{marginRight: "0", marginLeft: "15px"}}>
            {loadingRoles
                ? <Loading/>
                : roles?.map(r =>
                    <Checkbox key={r.id} id={r.id} checked={r.assigned} text={r.role_name} description={r.role_description} onChange={onRoleChange}/>
                )
            }
        </section>

    </div>);
}