import React from "react";
import { Outlet } from "react-router-dom";

function Assignments() {
    return (
        <div className="home">
            <div class="container">
                <h1 className="text-center mt-5">Assignments pagessss</h1>
                <Outlet />
            </div>
        </div>
    );
}

export default Assignments;