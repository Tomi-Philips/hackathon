// import React from 'react'

import { Link } from "react-router-dom"

const NavButtons = () => {
    return (
        <div className="flex gap-2">
            <Link to='/RegisterForm'>
                <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-full" type="button">
                    Get Started
                </button>
            </Link>
            <Link to='/LoginForm'>
                <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full" type="button">
                    Login
                </button>
            </Link>
        </div>
    )
}

export default NavButtons
