import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        contact: '',
        password: '',
        confirm: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setRegisterData({
            ...registerData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { name, email, contact, password, confirm } = registerData;

        if ((name === '') || (email === '') || (contact === '') || (password === '') || (confirm === '')) {
            toast.error('All fields are required')
            return
        }
        if ((password !== confirm)) {
            toast.error('Password and Confirm Password should be same')
            return
        }
        navigate('/login')

        // console.log(registerData.name)
        // console.log(registerData.email)
        // console.log(registerData.contact)
        // console.log(registerData.password)
        // console.log(registerData.confirm)

        toast.success('Account created successfully')

        e.currentTarget.reset();

        localStorage.setItem("Name", name)
        localStorage.setItem("Email", email)
        localStorage.setItem("Password", password)

    }


    let navigate = useNavigate()

    return <>
        <div className="text-center mb-5">
            <div className="contact1 text-center">
                <h1 className="contact2">Create Account</h1>
            </div>
            <form onSubmit={handleSubmit} className="mt-5">
                <input className="create w-25" name="name" onChange={handleChange} type="text" placeholder="Your Name"></input><br /><br />
                <input className="create w-25" name="email" onChange={handleChange} type="email" placeholder="Your Email"></input><br /><br />
                <input className="create w-25" name="contact" onChange={handleChange} type="text" placeholder="Contact"></input><br /><br />
                <input className="create w-25" name="password" onChange={handleChange} type="password" placeholder="Password"></input><br /><br />
                <input className="create w-25" name="confirm" onChange={handleChange} type="password" placeholder="Confirm Password"></input><br /><br />
                <button className="btn btn-danger logbutton">SIGN UP</button><br /><br />
                <span>Have already an account ? <NavLink to="/login" className="forget">Login</NavLink></span>
            </form>
        </div>
    </>
}
export default Register