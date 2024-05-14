import React from "react";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import {Route, Routes} from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const AllRoutes = () => {
    return (
        <>
            <ScrollTopBehaviour/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
};

export default AllRoutes;
