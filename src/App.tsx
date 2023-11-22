import './styles/bootstrap.css';
import {NavBar} from './components/NavBar'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NewsPage} from "./pages/NewsPage";
import {MainPage} from "./pages/MainPage";
import {Footer} from "./components/Footer";
import {useEffect, useState} from "react";
import {UserType} from "./types/UserType";
import {REST} from "./api/REST";
import {TeachPage} from "./pages/TeachPage";

export default function App() {
    const [me, setMe] = useState<UserType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            REST.getMe().then((u: UserType) => {
                setMe(u);
                setLoading(false);
            })
    }, []);

    if(loading)
        return (<div className="App"></div>)

    return (
        <div className="App">
            <NavBar me={me}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage me={me}/>}/>
                    <Route path="/news/:id" element={<NewsPage me={me}/>}/>
                    <Route path="/teach/" element={<TeachPage me={me}/>}/>

                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )}

export function PageNotFound() {
    return (
        <main>
            <div className={'section'}>
                <div className="container">
                    <div className="alert alert-danger shadow-soft mb-4 mb-lg-5" role="alert">
                        <span className="alert-inner--icon icon-lg"><span className="fas fa-fire"></span></span>
                        <span className="alert-heading">Ошибка 404</span>
                        <br/><br/>
                        <p>Страница, которую Вы пытаетесь посетить, не существует или перемещена по другому адресу.<br/></p>
                        <hr/>
                        <p className="mb-0">Попробуйте перейти на <a href="/">главную страницу</a>.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}