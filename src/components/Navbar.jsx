import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const location = useLocation(); 

    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md h-[80px] w-full fixed top-0 z-100">
            <div className="h-[70px] w-[200px] bg-transparent">
                <a href="/">
                    <img
                        src="https://www.iith.ac.in/assets/images/logo.png"
                        alt="IIT Hyderabad Logo"
                        className="h-full w-full object-contain"
                    />
                </a>
            </div>
            <div className="hidden lg:flex justify-between gap-10 text-black lg:text-xl">
                <Link to="/" className={isActiveLink('/') ? 'font-bold text-blue-600' : ''}>Home</Link>
                <Link to="/people" className={isActiveLink('/people') ? 'font-bold text-blue-600' : ''}>People</Link>
                <Link to="/news" className={isActiveLink('/news') ? 'font-bold text-blue-600' : ''}>News</Link>
                <Link to="/opportunities" className={isActiveLink('/opportunities') ? 'font-bold text-blue-600' : ''}>Opportunities</Link>
                <Link to="/projects" className={isActiveLink('/projects') ? 'font-bold text-blue-600' : ''}>Projects</Link>
                <Link to="/facilities" className={isActiveLink('/facilities') ? 'font-bold text-blue-600' : ''}>Facilities</Link>
                <Link to="/publications" className={isActiveLink('/publications') ? 'font-bold text-blue-600' : ''}>Publications</Link>
                <Link to="/teaching" className={isActiveLink('/teaching') ? 'font-bold text-blue-600' : ''}>Teaching</Link>
                <a href="https://msme.iith.ac.in/" className="hover:text-blue-600">IITH MSME</a>
                <a href="https://www.iith.ac.in/" className="hover:text-blue-600">IITH</a>
            </div>

            <div className="lg:hidden flex justify-center items-center">
                <button
                    onClick={() => setMenu(!menu)}
                    className="focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {menu ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {menu && (
                <div className="absolute top-[80px] left-0 w-full bg-white shadow-lg">
                    <div className="flex flex-col items-center gap-4 py-4 text-black text-xl">
                        <Link to="/" onClick={() => setMenu(false)} className={isActiveLink('/') ? 'font-bold text-blue-600' : ''}>Home</Link>
                        <Link to="/people" onClick={() => setMenu(false)} className={isActiveLink('/people') ? 'font-bold text-blue-600' : ''}>People</Link>
                        <Link to="/news" onClick={() => setMenu(false)} className={isActiveLink('/news') ? 'font-bold text-blue-600' : ''}>News</Link>
                        <Link to="/opportunities" onClick={() => setMenu(false)} className={isActiveLink('/opportunities') ? 'font-bold text-blue-600' : ''}>Opportunities</Link>
                        <Link to="/projects" onClick={() => setMenu(false)} className={isActiveLink('/projects') ? 'font-bold text-blue-600' : ''}>Projects</Link>
                        <Link to="/facilities" onClick={() => setMenu(false)} className={isActiveLink('/facilities') ? 'font-bold text-blue-600' : ''}>Facilities</Link>
                        <Link to="/publications" onClick={() => setMenu(false)} className={isActiveLink('/publications') ? 'font-bold text-blue-600' : ''}>Publications</Link>
                        <Link to="/teaching" onClick={() => setMenu(false)} className={isActiveLink('/teaching') ? 'font-bold text-blue-600' : ''}>Teaching</Link>
                        <a
                            href="https://msme.iith.ac.in/"
                            className="hover:text-blue-600"
                            onClick={() => setMenu(false)}
                        >
                            IITH MSME
                        </a>
                        <a
                            href="https://www.iith.ac.in/"
                            className="hover:text-blue-600"
                            onClick={() => setMenu(false)}
                        >
                            IITH
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
