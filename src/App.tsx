import React from 'react';
import './styles/bootstrap.css';
import MainPage from './pages/MainPage'
import {NavBar} from './components/NavBar'
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {NewsPage} from "./pages/NewsPage";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path="/news/:id" element={<NewsPage/>}></Route>
                </Routes>
                <footer>

                </footer>
            </BrowserRouter>
        </div>
    );
}
