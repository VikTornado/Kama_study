import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Messages from "./Components/Messages";
import Header from "./Components/Header";
import Profile from "./Components/Profile";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/mess"} element={<Messages/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
            </Routes>
        </>
    );
}

export default App;
