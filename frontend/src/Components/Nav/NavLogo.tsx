// import React from 'react';

interface NavLogoProps {
    navtoggle: boolean;
    setNavToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLogo: React.FC<NavLogoProps> = ({ navtoggle, setNavToggle }) => {
    const HandleClick =() =>{
        setNavToggle(!navtoggle); 
    }
    return (
        <div className="flex gap-2 items-center">
            <span onClick={() => {HandleClick()}} className="  bg-gradient-to-tr from-gray-900 to-gray-800 p-1.5 rounded-lg text-white md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
                </svg>
            </span>
            <span className="text-xl bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent font-semibold">HealthMeet</span>
        </div>
    );
}

export default NavLogo;


