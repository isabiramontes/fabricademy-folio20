import React from "react";
import { Outlet } from "react-router-dom";

function Projects() {
    return (
        <div className="projects" style={{ backgroundColor: "#f3efe2" }}>
            <Outlet />
        </div>
    );
}

export default Projects;