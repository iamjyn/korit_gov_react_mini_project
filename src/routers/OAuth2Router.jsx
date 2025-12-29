import React from "react";
import OAuth2Page from "../pages/user/OAuth2Page/OAuth2Page";
import { Route, Routes } from "react-router-dom";

function OAuth2Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<OAuth2Page />} />
            </Routes>
        </>
    );
}

export default OAuth2Router;
