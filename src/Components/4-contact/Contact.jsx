import React from "react";
import "./contact.css";

const Contact= () => {
    return(
        <section className="contact-us">
            <h1 className="title">
                <span className="fa-solid fa-envelope"/>
                Contact us
            </h1>
            <p className="subtitle">Contact us for more information and Get notified when I publish something new</p>
            <div className="flex">
                <form action="" className="form">
                <div className="flex">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" name="" id="email" required placeholder="Email Address" />
                </div>
                <div className="flex" style={{marginTop: "24px"}}>
                    <label htmlFor="message">Your message:</label>
                    <textarea name="" required id="message" placeholder="Message"/>
                </div>
                <button type="submit" className="submit">Submit</button>
                </form>

                <div className="animation border">
                    animation
                </div>
            </div>
        </section>
    )
}

export default Contact;