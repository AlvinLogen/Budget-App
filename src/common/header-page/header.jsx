import React from "react";

import logo from '../assets/logo/logo-no-background.png'

const Header = () => {
    const navLayout = "flex flex-row justify-between p-4 bg-blue-bg-900 text-white-font-100 border-solid border-blue-bg-700 shadow-lg";

    return (
        <header className={navLayout}>
            <div className="mx-1">
                <img src={logo} alt="logo-no-background" className="object-scale-down h-12 max-w-full rounded-lg" />
            </div>
        </header >
    )
}

export default Header;