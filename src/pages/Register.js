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
        </div>
        <div className=" container text-center">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-4">
                    <form onSubmit={handleSubmit}>
                        <input className="form-control create" name="name" onChange={handleChange} type="text" placeholder="Your Name"></input><br />
                        <input className="form-control create" name="email" onChange={handleChange} type="email" placeholder="Your Email"></input><br />
                        <input className="form-control create" name="contact" onChange={handleChange} type="text" placeholder="Contact"></input><br />
                        <input className="form-control create" name="password" onChange={handleChange} type="password" placeholder="Password"></input><br />
                        <input className="form-control create" name="confirm" onChange={handleChange} type="password" placeholder="Confirm Password"></input><br /><br />
                        <button className="btn btn-danger logbutton">SIGN UP</button><br /><br />
                        <span>Have already an account ? <NavLink to="/login" className="forget">Login</NavLink></span>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Register