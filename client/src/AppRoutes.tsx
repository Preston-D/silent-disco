import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import LoginPage from "./home/LoginPage";
import RegisterPage from "./home/RegisterPage";
import NotFoundPage from "./home/NotFoundPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
