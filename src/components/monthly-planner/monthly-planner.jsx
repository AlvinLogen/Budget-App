import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import BudgetPlanner from "../budget/budget-planner";

const MonthlyPlanner = () => {
    const [components, setComponents] = useState([]);

    //Styles
    const btn = "bg-blue-bg-900 hover:bg-blue-bg-700 text-right text-m text-white-font-300 font-bold py-2 ml-3 my-1.5 px-2 rounded";
    const headerStyles = "text-center mt-2 mb-4 text-3xl font-extrabold leading-none tracking-tight text-black-font-700 md:text-3xl lg:text-5xl dark:text-white";
    const textLayout = "mb-6 text-lg font-normal text-grey-bg-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400";

    const onAddBtnClick = () => {
        const id = uuid().slice(0, 4);
        const newComp = <div key={id}>
            <BudgetPlanner id={id} />
            <button className={btn} onClick={() => onRemoveBtnClick(id)}>Remove</button>
        </div>;

        setComponents((prevList) => {
            const newList = [...prevList, newComp]
            return newList;
        })
    }

    const onRemoveBtnClick = (id) => {
        setComponents(previous => previous.filter(comp => comp.key !== id))
    }



    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center p-5">
                <h1 className={headerStyles}>Monthly Budget</h1>
                <p className={textLayout}>Start budgeting now and get a grip on your personal finances.</p>
                <div>
                    <button className={btn} onClick={onAddBtnClick}>Add Month</button>
                </div>
                {components}
            </div>
        </div>
    )
}

export default MonthlyPlanner;