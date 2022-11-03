import HomePage from "./Page/HomePage";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Finanse from "./Page/Finanse";

const Pageall = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/finanse" element={<Finanse />}></Route>
        </Routes>
    )
}

export default Pageall