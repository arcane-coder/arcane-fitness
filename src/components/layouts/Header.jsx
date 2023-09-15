import { useState } from 'react';
import { Link } from "react-router-dom";
import { IarcaneCoder } from '../svgs/logo';
import { BsSearch, BsList } from "react-icons/bs";
import './header.css'

export default function Header() {

    //Toggle Nav-bar / Header
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const token = localStorage.getItem("token");

    return (
        <>
            <header>
                <nav className="nav-bar">
                    <div className="logo-box"><IarcaneCoder /></div>
                    <div className="ham-box" onClick={() => setIsNavbarOpen(!isNavbarOpen)}><BsList /></div>
                    <ul className={`link-box ${isNavbarOpen ? 'flex' :'none' }`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/exercise">Exercise</Link></li>
                        <div className='search-box'>
                            <div className="icon-box"><BsSearch className='icon' /></div>
                            <input type="text" placeholder='@JohnDoe' />
                        </div>
                        {!token && <div> <Link className='btn btn-p' to="/login">Login / Signup</Link></div>}
                    </ul>
                </nav>
            </header >
        </>
    )
}
