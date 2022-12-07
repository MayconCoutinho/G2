import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage/index.jsx'
import { ErrorPage } from "../pages/ErrorPage/index.jsx";
import { LoginPage } from "../pages/LoginPage/index.jsx";
import { NewsPage } from "../pages/NewsPage/index.jsx";
import { AdminPage } from "../pages/AdminPage/index.jsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="Admin" element={<LoginPage />} />
                <Route path="Admin/User" element={<AdminPage />} />
                <Route path="NewsPage/:id" element={<NewsPage />} />
            </Routes>
        </BrowserRouter>
    )
}