import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminPage } from "../pages/AdminPage/index.jsx";
import { ErrorPage } from "../pages/ErrorPage/index.jsx";
import { HomePage } from '../pages/HomePage/index.jsx';
import { LoginPage } from "../pages/LoginPage/index.jsx";
import { NavPage } from "../pages/NavPage/index.jsx";
import { NewsPage } from "../pages/NewsPage/index.jsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/:page" element={<NavPage />} />
                <Route path="Admin" element={<LoginPage />} />
                <Route path="Admin/User" element={<AdminPage />} />
                <Route path="NewsPage/:id" element={<NewsPage />} />
            </Routes>
        </BrowserRouter>
    )
}
