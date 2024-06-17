import React, { useEffect, useState } from 'react'
import "./HotelContact.css"

export const HotelContactForm = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault()
        const newValue = {fName, lName, phone, email, subject, company, message}
        setAllValue([newValue])
        setFName("")
        setLName("")
        setPhone("")
        setEmail("")
        setSubject("")
        setCompany("")
        setMessage("")
    }

    useEffect(() => {

    }, [allValue])
  return (
    <>
        <section className="hotelContact mtop">
            <div className="container flex">
                <div className="main-content">
                    <h2>Contact Form</h2>
                    <p>Fill out the form below, we will get back to you soon</p>
                    <form onSubmit={formSubmit}>
                        <div className="grid1">
                            <div className="input">
                                <span>
                                    First Name 
                                <label>*</label>
                                </span>
                                <input type="text" name='fName' value={fName} onChange={(e) => setFName(e.target.value)} required/>
                            </div>


                            <div className="input">
                                <span>
                                    Last Name 
                                <label>*</label>
                                </span>
                                <input type="text" name='lName' value={lName} onChange={(e) => setLName(e.target.value)} required/>
                            </div>

                            <div className="input">
                                <span>
                                    Phone 
                                <label>*</label>
                                </span>
                                <input type="tel" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </div>

                            <div className="input">
                                <span>
                                    Email 
                                <label>*</label>
                                </span>
                                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>

                            <div className="input">
                                <span>
                                    Subject 
                                <label>*</label>
                                </span>
                                <input type="text" name='subject' value={subject} onChange={(e) => setSubject(e.target.value)}/>
                            </div>

                            <div className="input">
                                <span>
                                    Company
                                <label>*</label>
                                </span>
                                <input type="text" name='company' value={company} onChange={(e) => setCompany(e.target.value)}/>
                            </div>

                            <div className="input inputLast">
                                <span>
                                    Write Your Message     
                                    <label>*</label>
                                </span>
                                <textarea name="message" value={message} cols="30" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                        </div>

                        <button className='primary-btn'>Submit Now</button>
                    </form>
                </div>

                <div className="side-content">
                    <h3>Visit our location</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus reiciendis at atque, quos pariatur similique nobis eum ea voluptate labore iusto, temporibus impedit voluptates. Aut sunt nobis nam voluptatum</p>
                    <br />
                    <h3>Message Us</h3>
                    <span>info@example.com</span>
                    <br />
                    <span>+012 456 7898</span>
                    <br />
                    <div className="icon">
                        <h3>Follow Us</h3>
                        <div className="flex">
                            <i className='fab fa-facebook-f'></i>
                            <i className='fab fa-twitter'></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact-show-data">
            {allValue.map((currentValue, index) => {
                const {fName, lName, phone, email, subject, company, message} = currentValue;
                return (
                    <div className="sign-box" key={index}>
                        <h1>
                            Send Successfully
                        </h1>
                        <h3>
                            First Name : <p>{fName}</p>
                        </h3>
                        <h3>
                            Last Name : <p>{lName}</p>
                        </h3>
                        <h3>
                            Phone : <p>{phone}</p>
                        </h3>
                        <h3>
                            Email : <p>{email}</p>
                        </h3>
                        <h3>
                            Subject : <p>{subject}</p>
                        </h3>
                        <h3>
                            Company : <p>{company}</p>
                        </h3>
                        <h3>
                            Message : <p>{message}</p>
                        </h3>
                    </div>
                )
            })}
        </section>
    </>
  )
}
