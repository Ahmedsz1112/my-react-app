import React from "react";
import "./main.css";

const Main = () => {
    return (
        <main className="flex">
            <section className="left-section flex">
                <button className="active">All Projects</button>
                <button>HTML & CSS</button>
                <button>JavaScript</button>
                <button>React & MUI</button>
                <button>Node & Express</button>
            </section>

            <section className="rigth-section flex">
                {["aa" , "vv", "sd" , 1 , 2, 4].map((item) => {
                    return (
                        <article key={item} className="card">
                            <img width={266} src="1.jpg" alt="" />
                            <div style={{width: '266px'}} className="box">
                                <h2 className="title">Landing Page 2</h2>
                                <p className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi ut ad. Minus, voluptatem accusamus!</p>
                                <div className="flex icons">
                                    <div style={{gap: '11px'}} className="flex ">
                                        <i class="fa-solid fa-link"/>
                                        <i class="fa-brands fa-github"/>
                                    </div>
                                    <a className="link flex" href="">
                                        more 
                                        <i style={{alignSelf: "end"}} class="fa-solid fa-arrow-right"/>
                                    </a>
                                </div> 
                            </div>
                        </article>
                    )
                })}
            </section>
        </main>
    )
}

export default Main;