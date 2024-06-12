// import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = () => {
    return (
        <div>
            <div className="gap-2 hidden md:flex">
                <Link to='/Dashboard'>
                    <span className=" cursor-pointer flex gap-0.5 items-center">
                        <span>Service</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </Link>
                <Link to=''>
                    <span className=" cursor-pointer">About</span>
                </Link>
                <Link to=''>
                    <span className=" cursor-pointer">Contact us</span>
                </Link>
            </div>
        </div>
    )
}

export default NavLink
