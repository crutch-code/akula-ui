import React, {ReactElement, useEffect, useState} from 'react'
import {REST} from "../api/REST";
import {TeachType} from "../types/TeachType";

export function TeachPage(props: any): ReactElement {
    const [teach, setTeach] = useState<TeachType[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.getAllAssignedTo().then(t => {
            setTeach(t!);
            setLoading(false);
        });
    }, []);

    if(teach?.length == 0) {
        return (
            <main className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="shadow-soft rounded">

                                <div className="card card-sm card-body bg-primary border-light mb-0">
                                    <div className="accordion-panel-header">
                                        Нет назначенных курсов и уроков
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="shadow-soft rounded">
                            {teach?.map((t, index) =>
                                    <div className="card card-sm card-body bg-primary border-light mb-0" key={index}>
                                        <a href={"/teach/" + (t.type === 0 ? 'course' : 'lesson') + "/" + t.id}
                                           className="accordion-panel-header" role="button">
                            <span className="icon-title h6 mb-0 font-weight-bold"><span
                                className={"fas fa-" + (t.target === 'user' ? "user" : "globe")}></span>{t.name}</span>
                                            <span className="h6 small">{t.type === 0 ? 'Курс' : 'Урок'}</span>
                                        </a>
                                    </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
