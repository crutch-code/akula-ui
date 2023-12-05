import React, {ReactElement, useEffect, useState} from 'react'
import {UserType} from "../types/UserType";
import {REST} from "../api/REST";
import {SearchIcon} from "../data/Icons";

export function Header(props: any): ReactElement {
    let [me, setMe] = useState<UserType>();
    let [fio, setFio] = useState<string>();

    useEffect(() => {
        setMe(props.me);
        setFio(me?.fio!.includes(' ') ?
            me?.fio!.split(' ')[1].substring(0, 1) + '. ' + me?.fio!.split(' ')[0] :
            me?.fio!);
    }, [me]);

    return (
        <header style={{backgroundColor: "rgb(34, 34, 34)", height: "48px"}}>
            <nav style={{width: "1076px", margin: "auto"}}>
                <div style={{width: "230px", paddingTop: "8px", paddingBottom: "8px"}} className={"elementsWrapper"}>


                    <div className={"field"} style={{height: "32px", width: "100%", borderRadius: "8px", display: "flex", backgroundColor: "rgb(66, 66, 66)"}}>
                        <SearchIcon color={"rgb(147, 147, 147)"}/>
                        <input type={"search"} placeholder={"Поиск"} style={{color: "rgb(225, 227, 230)", backgroundColor: "rgba(0, 0, 0, 0)", appearance: "none", border: "none"}}/>
                    </div>


                </div>
            </nav>
        </header>
    );
}
/*

                <div className="container position-relative">
                    <a className="navbar-brand shadow-soft py-2 px-3 rounded border border-light mr-lg-4" href="/">
                        <img className="navbar-brand-dark" src="/akula.png" alt="AkulaPlay light"/>
                        <img className="navbar-brand-light" src="/akula.png" alt="AkulaPlay dark"/>
                    </a>
                    <div className="navbar-collapse collapse" id="navbar_global">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="/"
                                       className="navbar-brand shadow-soft py-2 px-3 rounded border border-light">
                                        <img src="/akula.png" alt="AkulaPlay"/>
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
                                <a href="/teach" className="nav-link" data-toggle="dropdown">Курсы и уроки</a>
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
                                            <a href="/admin/courses"
                                               className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                                                    <span className="icon icon-sm icon-secondary"><span
                                                        className="fas fa-graduation-cap"></span></span>
                                                <div className="ml-4">
                                                        <span className="text-dark d-block">Курсы и уроки</span>
                                                    <span className="small">Управление курсами, уроками, тестами и их назначение</span>
                                                </div>
                                            </a>

                                            <a href="/admin/news"
                                               className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                                                    <span className="icon icon-sm icon-secondary"><span
                                                        className="fas fa-bullhorn"></span></span>
                                                <div className="ml-4">
                                                    <span className="text-dark d-block">Новости</span>
                                                    <span className="small">Управление новостями</span>
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

                                            <a href="/admin/storage"
                                               className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                                                    <span className="icon icon-sm icon-secondary"><span
                                                        className="fas fa-database"></span></span>
                                                <div className="ml-4">
                                                    <span className="text-dark d-block">Хранилище</span>
                                                    <span className="small">Управление хранилищем файлов</span>
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
                                    <li><a className="dropdown-item" href="/me">Профиль</a></li>
                                    <li><a className="dropdown-item disabled" href="/logout">Выход</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
 */