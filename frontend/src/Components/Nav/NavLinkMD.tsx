import { Link } from 'react-router-dom';
import React from 'react';

interface NavLinkMDProps {
    navtoggle: boolean;
    setNavToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinkMD: React.FC<NavLinkMDProps> = ({ navtoggle, setNavToggle }) => {
    const HandleClick =() =>{
        setNavToggle(!navtoggle); 
    }

    return (
        <div className={`absolute h-full w-full ${navtoggle ? 'block' : 'hidden'} z-20 top-0 border-b-2 border-blue-gray-50  rounded-lg md:hidden nav-blur`}>
            {/* White background with full opacity */}
            <div className="bg-white bg-opacity-100 relative ">
                <span onClick={() => {HandleClick()}} className=" absolute top-2 left-2  bg-gradient-to-tr from-gray-900 to-gray-800 p-1.5 rounded-lg text-white md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
                    </svg>

                </span>
                <div className="flex gap-2 w-full items-center flex-col justify-center">
                    <Link to='/Dashboard' className='py-4 border-b border-blue-gray-500'>
                        <span className="cursor-pointer flex gap-0.5 items-center">
                            <span>Service </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </Link>
                    <Link to='' className='py-4 border-b border-blue-gray-500'>
                        <span className="cursor-pointer">About</span>
                    </Link>
                    <Link to='' className='py-4 border-b border-blue-gray-500'>
                        <span className="cursor-pointer">Contact us</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavLinkMD;
