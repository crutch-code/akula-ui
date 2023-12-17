import './styles/vkui.css';
import {Header} from './components/Header';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
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
import {SideBar} from "./components/SideBar";
import {PostsPage} from "./pages/PostsPage";

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

//TODO: hide Header if LoginPage

    return (
        <div className="App">
            <Header me={me}/>
            <div className={"page"}>
                <SideBar/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<LoginPage/>}/>

                        <Route path="/" element={<Navigate to={"/feed"}/>}/>
                        <Route path="/feed" element={<PostsPage me={me}/>}/>
                        <Route path="/me" element={<MePage me={me}/>}/>
                        <Route path="/teach/" element={<TeachPage me={me}/>}/>


                        <Route path="/analytics" element={<AnalyticsPage me={me}/>}/>


                        <Route path="/admin/courses" element={<AdminCoursesPage me={me}/>}/>
                        <Route path="/admin/news" element={<AdminNewsPage me={me}/>}/>
                        <Route path="/admin/analytics" element={<AdminAnalyticsPage me={me}/>}/>
                        <Route path="/admin/users" element={<AdminUsersPage me={me}/>}/>
                        <Route path="/admin/storage" element={<AdminStoragePage me={me}/>}/>

                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer hidden={true}/>
        </div>
    )
}
/*
<Route path="/main" element={<MainPage me={me}/>}/>

<Route path="/news/:id" element={<NewsPage me={me}/>}/>
 */

export function PageNotFound() {
    return (<div className={"page_body"}>
        <section className={"page_block col-12"} style={{display: "flex", justifyContent: "center", padding: "8px"}}>

                    <div style={{width: "480px", padding: "48px 32px", fontSize: "14px", fontWeight: "400", lineHeight: "18px", color: "rgb(130, 130, 130)", textAlign: "center"}}>
                        К сожалению, страница, которую Вы пытаетесь посетить, не существует или перемещена по другому адресу.
                    </div>

        </section>
        </div>
    );
}