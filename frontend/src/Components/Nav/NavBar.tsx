import React, { useState } from 'react';
import NavLogo from "./NavLogo";
import NavButtons from "./NavButtons";
import NavLink from "./NavLink";
import NavLinkMD from "./NavLinkMD";

const NavBar: React.FC = () => {
    const [navtoggle, setNavToggle] = useState<boolean>(false);

    return (
        <div className="relative flex justify-evenly h-[4.5rem] border-b-2 border-blue-gray-50 bg-opacity-70 bg-white items-center md:px-4 lg:px-6 px-2 nav-blur">
            <NavLogo navtoggle={navtoggle} setNavToggle={setNavToggle} />
            <NavLink />
            <NavLinkMD navtoggle={navtoggle} setNavToggle={setNavToggle}/>
            <NavButtons />
        </div>
    );
}

export default NavBar;
