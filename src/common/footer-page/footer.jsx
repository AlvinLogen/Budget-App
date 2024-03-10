import React from "react";
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa"


const Footer = () => {
    const year = new Date().getFullYear();
    const ghProfile = 'https://github.com/AlvinLogen'
    const liProfile = 'https://www.linkedin.com/in/alvin-logenstein-8ab417290/'

    const icons = [
        { name: "Github", icon: FaGithub, profile: `${ghProfile}` },
        { name: "LinkedIn", icon: FaLinkedin, profile: `${liProfile}` },
    ]

    const footerLayout = "fixed bottom-0 left-0 z-20 w-full rounded border-solid border-blue-bg-700 shadow-lg";
    const iconLayout = "font-bold h-8 w-8 mr-2 font-bold rounded hover:text-blue-bg-900 hover:bg-white-font-300 active:text-blue-bg-900 active:bg-text-white-300";

    return (
        <footer className={footerLayout}>
            <div className="flex flex-row justify-between p-4 bg-blue-bg-900 text-white-font-300 font-bold" >
                <div className="m-1">
                    <p>Penny Smart &copy; {year}. All rights reserved</p>
                </div>
                <div className="m-1 flex flex-row">
                    <p className="mr-2">Created by: AlvinLogen</p>
                    <p className="font-normal">- ReactJS, TailwindCSS, React-Router</p>
                </div>
                <div >
                    <ul className="flex flex-row">
                        {icons.map((icon, index) => {
                            return (
                                <li key={index}><Link to={icon.profile} target="_blank">
                                    <icon.icon key={index} className={iconLayout} />
                                </Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;