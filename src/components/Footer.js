import React from "react";
import brand from './../images/stylehaven.png'
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()

    return <>
        <div className="box">
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3">
                        <div>
                            <NavLink to="/">
                                <img className="one" src={brand} alt="" height="70px" width="200px"></img>
                            </NavLink>
                        </div>
                        <div className="ones">
                            <b>ADDRESS:</b><span> 28 White tower, Street Name<br /> New Delhi, INDIA</span>
                        </div>
                        <div className="ones">
                            <b>TELEPHONE:</b><span> +91 9234 5678 99</span>
                        </div>
                        <div>
                            <b>EMAIL:</b><span> stylehaven@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <h5>MENU</h5>
                        <p><a onClick={() => navigate('/')} href="#">Home</a></p>
                        <p><a onClick={() => navigate('/about')} href="#">About</a></p>
                        <p><a onClick={() => navigate('/contact')} href="#">Contact</a></p>
                        <p><a onClick={() => navigate('/product')} href="#">Product</a></p>
                        <p><a onClick={() => navigate('/blog')} href="#">Blog</a></p>
                    </div>
                    <div className="col-md-3 mt-3">
                        <h5>ACCOUNT</h5>
                        <p>Account</p>
                        <p>Checkout</p>
                        <p>Login</p>
                        <p>Register</p>
                        <p>Shopping</p>
                    </div>
                    <div className="col-md-3 mt-3">
                        <h5>NEWSLETTER</h5>
                        <p>Subscribe to our newsletter and get<br /> update notifications.</p>
                        <form>
                            <div className="input-group">
                                <input type="email" className="form-control here" placeholder="Enter Your Mail" />
                                <button className="btn btn-danger">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>

        <div className="end text-center p-3">
            <p>Designed by <a className="name" rel="noopener noreferrer" href="https://github.com/shubh857" target="_blank">Shubham Padihar</a></p>
        </div>
    </>
}

export default Footer