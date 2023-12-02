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
import {AnalyticsPage} from "./pages/AnalyticsPage";
import {MePage} from "./pages/MePage";
import {AdminCoursesPage} from "./pages/admin/AdminCoursesPage";
import {AdminNewsPage} from "./pages/admin/AdminNewsPage";
import {AdminStoragePage} from "./pages/admin/AdminStoragePage";
import {AdminUsersPage} from "./pages/admin/AdminUsersPage";
import {AdminAnalyticsPage} from "./pages/admin/AdminAnalyticsPage";
import {LoginPage} from "./pages/LoginPage";

export default function App() {
    const [me, setMe] = useState<UserType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        REST.getMe().then((u: UserType) => {
            setMe(u);
            setLoading(false);
        })
    }, []);

    if (loading)
        return (<div className="App"></div>)

//TODO: hide NavBar if LoginPage
    return (
        <div className="App">
            <NavBar me={me}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>

                    <Route path="/" element={<MainPage me={me}/>}/>
                    <Route path="/news/:id" element={<NewsPage me={me}/>}/>
                    <Route path="/teach/" element={<TeachPage me={me}/>}/>
                    <Route path="/analytics" element={<AnalyticsPage me={me}/>}/>
                    <Route path="/me" element={<MePage me={me}/>}/>

                    <Route path="/admin/courses" element={<AdminCoursesPage me={me}/>}/>
                    <Route path="/admin/news" element={<AdminNewsPage me={me}/>}/>
                    <Route path="/admin/analytics" element={<AdminAnalyticsPage me={me}/>}/>
                    <Route path="/admin/users" element={<AdminUsersPage me={me}/>}/>
                    <Route path="/admin/storage" element={<AdminStoragePage me={me}/>}/>

                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    )
}

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