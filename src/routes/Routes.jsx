import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage/index.jsx'
import { ErrorPage } from "../pages/ErrorPage/index.jsx";
import { LoginPage } from "../pages/LoginPage/index.jsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="Login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}