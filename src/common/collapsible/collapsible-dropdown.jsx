import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Collapsible = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef();

    const onToggleBtn = () => {
        setIsOpen((prev) => !prev)
    }

    const btn = "bg-blue-bg-700 hover:bg-blue-bg-900 text-right text-white-font-300 font-bold py-2 px-3 rounded end-0";
    const header = "flex items-center whitespace-nowrap rounded px-1 pb-2 mb-5 pt-2 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-bg-900 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]";
    const collapsibleEl = "mt-3 mb-2 ml-12 inline-block rounded bg-white-font-300 px-2 pb-2 pt-2 text-m font-medium uppercase leading-normal text-black-font-700 shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong";

    return (
        <div className={collapsibleEl}>
            <h2 className={header}>{props.month}</h2>
            <button className={btn} onClick={onToggleBtn}>
                {!isOpen ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
            </button>
            <div className="">{isOpen && <div className="p-3" ref={contentRef}>{props.children}</div>}
            </div>
        </div >
    )

}

export default Collapsible;