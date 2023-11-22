import React, {Component, ReactElement, useEffect, useState} from 'react'
import {REST} from "../api/REST";
import {UserType} from "../types/UserType";

export function NavBar(props: any): ReactElement {
    let [me, setMe] = useState<UserType>();
    useEffect(() => {
        if (me === undefined) {
            REST.getMe().then((u: UserType) => {
                setMe(u);
            })
        }
    }, [me]);

    let fio = me?.fio!.includes(' ') ?
        me?.fio!.split(' ')[1].substring(0, 1) + '. ' + me?.fio!.split(' ')[0] :
        me?.fio!;

    return (
        <header className={'header-global'}>
            <nav id="navbar-main" aria-label="Primary navigation" style={{backgroundColor: '#e6e7ee'}}
                 className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom navbar-light navbar-transparent headroom--not-bottom headroom--pinned headroom--top">
                <div className="container position-relative">
                    <a className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4" href="/">
                        <img className="navbar-brand-dark" src="/akula.png" alt="Logo light"/>
                        <img className="navbar-brand-light" src="/akula.png" alt="Logo dark"/>
                    </a>
                    <div className="navbar-collapse collapse" id="navbar_global">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="/"
                                       className="navbar-brand shadow-soft py-2 px-3 rounded border border-light">
                                        <img src="/akula.png" alt="Themesberg logo"/>
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <a href="#navbar_global" className="fas fa-times" data-toggle="collapse"
                                       data-target="#navbar_global" aria-controls="navbar_global"
                                       aria-expanded="false" title="close" aria-label="Toggle navigation"></a>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                            <li className="nav-item">
                                <a href="/cources" className="nav-link" data-toggle="dropdown">Мои курсы</a>
                            </li>
                            <li className="nav-item">
                                <a href="/analytics" className="nav-link" data-toggle="dropdown">Анатилика и отчеты</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">
                                    <span className="nav-link-inner-text">Администрирование</span>
                                    <span className="fas fa-angle-down nav-link-arrow ml-2"></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg">
                                    <div className="col-auto px-0" data-dropdown-content="">
                                        <div className="list-group list-group-flush">
                                            <a href="/admin/cources"
                                               className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                                                    <span className="icon icon-sm icon-secondary"><span
                                                        className="fas fa-graduation-cap"></span></span>
                                                <div className="ml-4">
                                                        <span className="text-dark d-block">Курсы и уроки</span>
                                                    <span className="small">Управление курсами, уроками, тестами и их назначение</span>
                                                </div>
                                            </a>

                                            <a href="/admin/analytics"
                                               className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                                                    <span className="icon icon-sm icon-secondary"><span
                                                        className="fas fa-chart-line"></span></span>
                                                <div className="ml-4">
                                                    <span className="text-dark d-block">Аналитика и отчеты</span>
                                                    <span className="small">Управление отчетными формами</span>
                                                </div>
                                            </a>

                                            <a href="/admin/users"
                                               className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                                                    <span className="icon icon-sm icon-secondary"><span
                                                        className="fas fa-users-cog"></span></span>
                                                <div className="ml-4">
                                                    <span className="text-dark d-block">Группы и пользователи</span>
                                                    <span className="small">Управление пользователями и назначением курсов</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">
                                    <span className="nav-link-inner-text">{fio}</span>
                                    <span className="fas fa-angle-down nav-link-arrow ml-2"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/me">Настройки</a></li>
                                    <li><a className="dropdown-item" href="/logout">Выход</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
/*
<img className="rounded-top rounded-bottom" style={{height: '25px'}} src={REST.BASE + '/api/storage/' + me?.photo!.name!}></img>&nbsp;
<span className="badge badge-sm badge-secondary ml-2">v1.0</span>
 */