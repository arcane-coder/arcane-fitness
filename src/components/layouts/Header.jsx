import { useState } from 'react';
// import { Link } from "react-router-dom";
import { IarcaneCoder } from '../svgs/logo';
import { BsList } from "react-icons/bs";
import './header.css'

export default function Header() {
    //Toggle Nav-bar / Header
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <>
            <header>
                <nav className="nav-bar">
                    <div className="logo-box"><IarcaneCoder /></div>
                    <div className="ham-box" onClick={() => setIsNavbarOpen(!isNavbarOpen)}><BsList /></div>
                    <ul className={`link-box ${isNavbarOpen ? 'flex' : 'none'}`}>
                        {/* <li><Link to="/">Home</Link></li> */}
                        <li><a href='#search-ex'>Exercises</a></li>
                    </ul>
                </nav>
            </header >
        </>
    )
}
