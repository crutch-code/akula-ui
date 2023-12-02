import React, {ReactElement} from "react";

export function LoginPage(props: any): ReactElement {

    return (
        <main className="section">
            <div className="container">

                <div className="row justify-content-md-around">
                    <div className="col-12 col-md-6 col-lg-5 mb-5 mb-lg-0">
                        <div className="card bg-primary shadow-soft border-light p-4">
                            <div className="card-header text-center pb-0">
                                <h2 className="h4">Обучающая платформа AkulaPlay</h2>
                            </div>
                            <div className="card-body">
                                <form action="#" className="mt-4">

                                    <div className="form-group">
                                        <label htmlFor="exampleInputIcon333">Логин:</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><span className="fas fa-user"></span></span>
                                            </div>
                                            <input className="form-control" id="exampleInputIcon333"
                                                   placeholder="Иванов Иван" type="text" aria-label="Логин"/>
                                        </div>
                                    </div>

                                    <div className="form-group">

                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword777">Пароль:</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><span
                                                        className="fas fa-unlock-alt"></span></span>
                                                </div>
                                                <input className="form-control" id="exampleInputPassword777"
                                                       placeholder="Пароль" type="password" aria-label="Пароль"
                                                       required/>
                                            </div>
                                        </div>

                                        <div
                                            className="d-block d-sm-flex justify-content-between align-items-center mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                       id="defaultCheck545"/>
                                                <label className="form-check-label" htmlFor="defaultCheck545">
                                                    Запомнить меня
                                                </label>
                                            </div>
                                            <div><a href="#" className="small text-right">Забыли пароль?</a></div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-primary">Войти</button>
                                </form>
                                <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                            <span className="font-weight-normal">
                                Не зарегистрированы?&nbsp;
                                <a href="#" className="font-weight-bold">Создать аккаунт</a>
                            </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}