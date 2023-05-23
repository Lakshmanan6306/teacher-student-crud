import React, { children } from "react";
import {useHistory} from "react-router-dom"


function Baseapp({children}) {

    const history = useHistory()

    return (
        <div>
            <div className=" d-flex flex-column">
                <div className="col">
                    <header>
                        <nav className="navbar navbar-expand-lg  navbar-light">
                            <div className="container">
                                <a href="#" className="navbar-brand" onClick={()=>history.push("/")}>Open School</a>
                                <button className="navbar-toggler" role="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                                    <i className="fa-solid fa-bars"></i>
                                </button>
                                <div className="collapse navbar-collapse" id="navbar">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item"><a href="#" className="nav-link" onClick={()=>history.push("/")}>Home</a></li>
                                        <li className="nav-item"><a href="#" className="nav-link" onClick={()=>history.push("/students")}>Student</a></li>
                                        <li className="nav-item"><a href="#" className="nav-link" onClick={()=>history.push("/teachers")}>Teachers</a></li>
                                        <li className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Contact</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-item">Email</li>
                                                <li className="dropdown-item">Phone</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
                <div className="row">
                    {/* <div className="col-2" >
                        <div className="d-flex flex-column bg-dark text-white p-3 flex-shrink-0" id="sidebar-home">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none mb-3 mb-md-0 me-md-auto">
                                <i className="fa-solid fa-school p-2"></i>
                                <span className="fs-4">Menu</span>
                            </a>
                            <hr />
                            <ul className="nav nav-pills flex-column mb-auto">
                                <li className="nav"><a href="#" className="nav-link">
                                    <i className="fa-solid fa-person-chalkboard p-2"></i>
                                    <span className="">Teacher</span>
                                </a></li>
                                <li className="nav"><a href="#" className="nav-link">
                                    <i className="fa-solid fa-graduation-cap p-2"></i>
                                    <span>Student</span>
                                </a></li>
                            </ul>

                        </div>
                    </div> */}
                    <div className="container">
                     {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseapp;