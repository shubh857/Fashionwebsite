import React, { useState } from "react";
import { toast } from 'react-toastify';


const Contact = () => {

    const [contactData, setContactData] = useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setContactData({
            ...contactData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(contactData.name)
        console.log(contactData.email)
        console.log(contactData.subject)
        console.log(contactData.message)

        toast.success('Form submitted successfully')
        
        setContactData({
            name:'',
            email:'',
            subject:'',
            message:''
        })
    }

    return <>
        <div className="contact1 text-center">
            <h1 className="contact2">CONTACT US</h1>
        </div>
        <div className="container text-center mt-5 mb-5">
            <form onSubmit={handleSubmit}>
                <input className="w-50  contact3" name="name" value={contactData.name} onChange={handleChange} type="text" placeholder="Enter Your Full Name"></input><br/><br/>
                <input className="w-50 contact3" name="email" value={contactData.email} onChange={handleChange} type="email" placeholder="Enter Your Email Address"></input><br/><br/>
                <input className="w-50 contact3" name="subject" value={contactData.subject} onChange={handleChange} type="text" placeholder="Enter Subject"></input><br/><br/>
                <textarea className="w-50 contact3" name="message" value={contactData.message} onChange={handleChange} rows="4" cols="60" placeholder="Enter Your Message"></textarea><br/><br/>
                <button className="btn btn-dark contact4">Submit</button>
            </form>
        </div>
    </>
}

export default Contact