import React, { useContext } from "react";
import style from './../images/stylehaven.png'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
    return <>
        <nav className="navbar navbar-expand-md">
            <div className="container d-flex justify-content-between">
                <NavLink to="/" className="navbar-brand">
                    <img className="logos" src={style} alt="" height="70px" width="200px"></img>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        {!isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink to="/login" onClick={() => setIsLoggedIn(false)}>Logout</NavLink>
                            </li>

                        )}

                        <li className="nav-item">
                            <Link href="#">
                                <FaShoppingCart />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <FaSearch />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Header