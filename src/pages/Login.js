import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../context/AuthContext";

const Login = () => {

    const {setIsLoggedIn} = useContext(AuthContext)
    let navigate = useNavigate()
    
    const [loginData, setLoginData] = useState({
        email: localStorage.getItem("Email"),
        password:''
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        setIsLoggedIn(true)   //contextAPI
        e.preventDefault()  
        const {email, password} = loginData

        if((email === '') || (password === '')) {
            toast.error('All fields are required')
            return
        }
        navigate("/")

        

        console.log(loginData.email)
        console.log(loginData.password)

        toast.success('Logged in successfully')
        
        setLoginData({
            email:'',
            password:''
        })
    }
    

   

    return <>
        <div className="contact1 text-center">
            <h1 className="contact2">Login</h1>
        </div>
        <div className="container text-center mt-5 mb-5">
            <form onSubmit={handleSubmit}>
                <input className="contact3 w-25" name="email" value={loginData.email} onChange={handleChange} type="email" placeholder="Enter Email"></input><br/><br/>
                <input className="contact3 w-25" name="password" value={loginData.password} onChange={handleChange} type="password" placeholder="Enter Password"></input><br/><br/>
                <button className="btn btn-danger mb-3 logbutton">LOGIN</button>
            </form>
            {/* <span>Forgot <a className="forget" href="#">Usename</a> / <a className="forget" href="#">Password</a>?</span><br/> */}
            <span>Don't have an account? </span><NavLink to="/register" className="forget">Sign up</NavLink>
        </div>
    </>
}

export default Login