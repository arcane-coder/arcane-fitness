import { useState } from 'react';
import { Link } from "react-router-dom";
import { IarcaneFitness } from '../svgs/logo';
import { BsList } from "react-icons/bs";
import './header.css'

export default function Header() {
    //Toggle Nav-bar / Header
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <>
            <header>
                <nav className="nav-bar">
                    <Link to='/' className='logo-container'><div className="logo-box"><IarcaneFitness /></div><span className="web-name">Arcane Fitness</span></Link>
                    <div className="ham-box" onClick={() => setIsNavbarOpen(!isNavbarOpen)}><BsList /></div>
                    <ul className={`link-box ${isNavbarOpen ? 'flex' : 'none'}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><a href='#search-ex'>Exercises</a></li>
                    </ul>
                </nav>
            </header >
        </>
    )
}
