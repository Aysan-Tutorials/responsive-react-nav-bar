import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import './App.css';

const App = () => {
    const [active, setActive] = useState(false);

    return (
        <>
        <header>
            <a className="logo">Logo</a>
            {active
            ?
            <FaTimes className="menu-toggle" onClick={()=>setActive(!active)}/>
            :
            <FaBars className="menu-toggle" onClick={()=>setActive(!active)}/>
            }
            <nav className={active ? "active" : ''}>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default App
