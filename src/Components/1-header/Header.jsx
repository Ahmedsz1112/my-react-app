import React, { useState } from "react";
import './header.css'
const Header = () => {
    const [showModal, setshowModal] = useState(false)
    return (
        <header className="flex">
            <button onClick={() => {
                setshowModal(true)
            }} className="menu fa-solid fa-bars"/>

            <div/>

            <nav >
                <ul className="flex">
                    <li><a href="">About</a></li>
                    <li><a href="">Articals</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <button className="fa-regular fa-moon" />
            {showModal && (
                <div className="fixed">
                <ul className="modal">
                    <li>
                        <button onClick={() => {
                            setshowModal(false)
                        }} className="fa-solid fa-xmark"/>
                    </li>
                    <li><a href="">About</a></li>
                    <li><a href="">Articals</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                </div>
            )}

            
        </header>
    )
}

export default Header;