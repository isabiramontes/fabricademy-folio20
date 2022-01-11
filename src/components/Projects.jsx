import React from "react";
import { Outlet } from "react-router-dom";

function Projects() {
    return (
        <div className="projects" >
            <Outlet />
        </div>
    );
}

export default Projects;