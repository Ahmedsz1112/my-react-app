import React from "react";
import "./hero.css";

const Hero = () => {
    return(
        <section className="hero flex">
            <div className="left-section">
                <div className="parent-avatar flex">
                    <img src="./avatar.jpg" className="avatar" alt="" />
                    <div className="fa-solid fa-circle-check" />
                </div>
                <h1 className="title">Software designer, founder, and amateur astronaut.</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolore unde laudantium voluptas quasi tenetur eaque magnam repellendus voluptatem quibusdam?</p>
            </div>
            <div className="rigth-section animation border">
                animation
            </div>
        </section>
    )   
};

export default Hero;