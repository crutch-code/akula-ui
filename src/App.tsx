import './styles/vkui.css';
import {Header} from './components/Header';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Footer} from "./components/Footer";
import React from "react";
import {UserType} from "./types/UserType";
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
import {CoursePage} from "./pages/CoursePage";
import {LessonPage} from "./pages/LessonPage";
import {TestWelcomePage} from "./pages/TestWelcomePage";
import {TestPage} from "./pages/TestPage";
import {AdminPage} from "./pages/admin/AdminPage";
import {AdminLessonsPage} from "./pages/admin/AdminLessonsPage";
import {AdminCoursePage} from "./pages/admin/AdminCoursePage";
import {AdminOneNewsPage} from "./pages/admin/AdminOneNewsPage";
import {AdminUserPage} from "./pages/admin/AdminUserPage";

export default function App() {
    const me: UserType = JSON.parse(sessionStorage.getItem("me") ?? '{}');

    if (Object.keys(me).length === 0) {
        return (<div className="App">
            <LoginPage/>
        </div>);
    }

    return (
        <div className="App">
            <Header me={me}/>
            <div className={"page"}>
                <SideBar/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to={"/feed"}/>}/>
                        <Route path="/feed" element={<PostsPage me={me}/>}/>
                        <Route path="/me" element={<MePage me={me}/>}/>
                        <Route path="/teach/" element={<TeachPage me={me}/>}/>
                        <Route path="/teach/:id" element={<CoursePage me={me}/>}/>
                        <Route path="/teach/:cid/:id" element={<LessonPage me={me}/>}/>
                        <Route path="/teach/:cid/:lid/:id/welcome" element={<TestWelcomePage me={me}/>}/>
                        <Route path="/teach/:cid/:lid/:id/" element={<TestPage me={me}/>}/>

                        <Route path="/analytics" element={<AnalyticsPage me={me}/>}/>

                        <Route path="/admin" element={<AdminPage me={me}/>}/>
                        <Route path="/admin/courses" element={<AdminCoursesPage me={me}/>}/>
                        <Route path="/admin/courses/:id" element={<AdminCoursePage me={me}/>}/>
                        <Route path="/admin/courses/:cid/lessons" element={<AdminLessonsPage me={me}/>}/>

                        <Route path="/admin/news" element={<AdminNewsPage me={me}/>}/>
                        <Route path="/admin/news/:id" element={<AdminOneNewsPage me={me}/>}/>

                        <Route path="/admin/analytics" element={<AdminAnalyticsPage me={me}/>}/>
                        <Route path="/admin/users" element={<AdminUsersPage me={me}/>}/>
                        <Route path="/admin/users/:id" element={<AdminUserPage me={me}/>}/>

                        <Route path="/admin/storage" element={<AdminStoragePage me={me}/>}/>



                        <Route path="*" element={<PageNotFound me={me}/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer hidden={true}/>
        </div>
    )
}

//<Route path="/admin/users/:id" element={<AdminUsersPage me={me}/>}/>

export function PageNotFound(props: any) {
    return (<div className={"page_body"}>
            <section className={"page_block col-12"}
                     style={{display: "flex", justifyContent: "center", padding: "8px"}}>

                <div style={{
                    width: "480px",
                    padding: "48px 32px",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "rgb(130, 130, 130)",
                    textAlign: "center"
                }}>
                    К сожалению, страница, которую Вы пытаетесь посетить, не существует или перемещена по другому
                    адресу.
                </div>

            </section>
        </div>
    );
}
/*
resolution: 1366x768
 */