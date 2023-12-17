import React, {ReactElement, useEffect, useState} from 'react'
import {UserType} from "../types/UserType";
import {REST} from "../api/REST";
import {DownIcon} from "../data/Icons";
import {ProfileMenu} from "./parts/ProfileMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export function Header(props: any): ReactElement {
    let me: UserType = props.me;
    let [showProfile, setShowProfile] = useState<boolean>(false);

    useEffect(() => {

    }, []);

    const showProfileMenu = () => {
        setShowProfile(!showProfile);
    }

    return (
        <header style={{backgroundColor: "rgb(34, 34, 34)", height: "48px"}}>
            <nav style={{width: "1076px", margin: "auto", display: "flex"}}>
                <div style={{paddingTop: "8px", paddingBottom: "8px", display: "flex", width: "100%"}}
                     className={"elementsWrapper"}>
                    <div className={"logo"} style={{}}>
                        <img src={"/logo_white.svg"} alt={"logo"}
                             style={{height: "32px", width: "136px", marginRight: "29px"}}/>
                    </div>

                    <div className={"field searchField"} style={{
                        marginRight: "15px",
                        height: "32px",
                        width: "100%",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "rgb(66, 66, 66)"
                    }}>
                        <FontAwesomeIcon icon={faSearch} className={"icon"}/>
                        <input type={"search"} placeholder={"Поиск"}/>
                    </div>
                </div>
                <div className={"profile"} onClick={showProfileMenu} style={{
                    height: "48px",
                    width: "58px",
                    paddingLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer"
                }}>
                    <img src={REST.BASE + "/api/storage/" + me?.photo.name} alt={"avatar"}
                         style={{width: "32px", height: "32px", borderRadius: "50%"}}/>
                    <DownIcon style={{marginLeft: "6px", marginRight: "6px"}}/>
                </div>
            </nav>
            {showProfile ? <ProfileMenu me={me}/> : ""}
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