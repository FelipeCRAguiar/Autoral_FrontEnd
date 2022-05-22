import { BrowserRouter, Route, Routes } from "react-router-dom";
import AwardPage from "./Pages/AwardPage/AwardPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import "./Styles/reset.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/awards" element={<AwardPage />}/>
      </Routes>
    </BrowserRouter>
  )
}