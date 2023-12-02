import React, {ReactElement} from "react";
import {UserType} from "../types/UserType";
import {REST} from "../api/REST";

export function MePage(props: any): ReactElement {
    const me: UserType = props.me;

    return (
        <main className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">

                        <div className="card bg-primary shadow-soft border-light">
                            <div className="card-header p-4">
                                <img src={REST.BASE + '/api/storage/' + me.photo.name} className="card-img-top rounded"
                                     alt="user photo"/>
                            </div>
                            <div className="card-body pt-2">
                                <h3 className="h5 mb-2">{me.fio}</h3>
                                <span
                                    className="h6 font-weight-normal text-gray mb-4">Отдел: <b>{me.department.name}</b></span>
                                <p className="card-text">Подробное описание пользователя</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}