import React from "react";
import { Outlet } from "react-router-dom";

function Projects() {
    return (
        <div className="home">
            <div class="container">
                <Outlet />
            </div>
        </div>
    );
}

export default Projects;