import { BrowserRouter, Route, Routes } from "react-router-dom";
import AwardCreation from "./Pages/AwardCreation/AwardCreation";
import CategoryCreation from "./Pages/AwardCreation/CategoryCreation";
import AwardPage from "./Pages/AwardPage/AwardPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import SingleAwardPage from "./Pages/SingleAwardPage/SingleAwardPage";
import SingleAwardPageVotes from "./Pages/SingleAwardPage/SingleAwardPageVotes";
import "./Styles/reset.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/awards" element={<AwardPage />}/>
        <Route path="/create" element={<AwardCreation />}/>
        <Route path="/create-category" element={<CategoryCreation />}/>
        <Route path="/award/nominate/:id" element={<SingleAwardPage />}/>
        <Route path="/award/vote/:id" element={<SingleAwardPageVotes />}/>
      </Routes>
    </BrowserRouter>
  )
}