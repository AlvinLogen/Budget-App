import React, { useState } from "react";
import Collapsible from "../../common/collapsible/collapsible-dropdown";

const data = [
    { id: 0, name: "", income: "", saving: "", expense: "", total: "" }
]

const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const BudgetPlanner = (props) => {
    const [budgetValues, setBudgetValues] = useState(data);
    const [incomeTotal, setIncomeTotal] = useState(0.00);
    const [savingTotal, setSavingTotal] = useState(0.00);
    const [expenseTotal, setExpenseTotal] = useState(0.00);
    const [netTotal, setNetTotal] = useState(0.00);
    const [selectedMonth, setSelectMonth] = useState();

    // //Add Data to Local Storage
    // useEffect(() => {
    //     localStorage.setItem('budgetValues', JSON.stringify(budgetValues))
    // }, [budgetValues])

    // //Retrieve Data from Local Storage
    // useEffect(() => {
    //     const items = JSON.parse(localStorage.getItem('budgetValues'))
    //     if (items) {
    //         setBudgetValues(items)
    //     }
    // }, [])

    // Utilities Function to capture values and Totals
    const budgetUpdateFunc = (newBudget) => {
        setBudgetValues(newBudget);

        const newIncomeTotal = getTotals(newBudget, "income");
        const newSavingTotal = getTotals(newBudget, "saving");
        const newExpenseTotal = getTotals(newBudget, "expense")

        setIncomeTotal(newIncomeTotal);
        setSavingTotal(newSavingTotal);
        setExpenseTotal(newExpenseTotal);

        let total = 0;
        total += newIncomeTotal + newSavingTotal - newExpenseTotal;
        setNetTotal(total)
    }

    //Add a Row to the Table
    const addNewRow = () => {
        const maxId = Math.max(...budgetValues.map(budget => budget.id))
        const newRow = { id: maxId + 1, name: "", income: "", saving: "", expense: "", total: "" };
        const newBudgetValues = [...budgetValues, newRow]
        setBudgetValues(newBudgetValues)
    }

    //Remove a Row from the Table
    const removeRow = (id) => {
        const budgets = [...budgetValues];
        if (id !== 0) {
            const index = budgets.findIndex(item => item.id === id);
            budgets.splice(index, 1);

            setBudgetValues(budgets)
            budgetUpdateFunc(budgets)
        }
    }

    //calculate the total values per Month
    const getTotals = (array, name) => {
        const total = array.reduce((acc, item) => {
            return Number(acc) + Number(item[name])
        }, 0)

        return total;
    }

    //Change Selected Month Option
    const headerMonth = "block px-2 py-2 hover:bg-grey-bg-300 dark:hover:bg-grey-bg-100 dark:hover:text-white"

    const onMonthSelectChange = (event) => {
        setSelectMonth(event.target.value);
    }

    const currentMonth = new Date().toLocaleString([], { month: 'long' });
    const month = <select className={headerMonth} onChange={onMonthSelectChange} defaultValue={currentMonth}><option>{selectedMonth}</option>{monthOptions.map((option, index) => {
        return <option key={index}>{option}</option>
    })}</select>;


    //Get Updated Input Values 
    const onChangeInput = (id, event) => {
        const { name, value } = event.target;

        const updateBudgetValues = budgetValues.map((item) => {
            return item.id === id && name ? { ...item, [name]: value } : item
        })
        budgetUpdateFunc(updateBudgetValues)

    }

    //Get Updated Input Values on Enter or Tab Key
    const onKeyDownInput = (id, event) => {
        const { name, value } = event.target;

        if (event.key === 'Enter' || event.key === 'Tab') {
            const updateBudgetValues = budgetValues.map((item) => {
                return item.id === id && name ? { ...item, [name]: value } : item
            })
            budgetUpdateFunc(updateBudgetValues)
        }
    }

    //Table Header Styling
    const headerStylesDesc = "ml-2 p-2 text-brown-bg-500 font-bold w-40 text-lg text-left";
    const headerStyles = "bg-grey-bg-300 p-1.5 font-bold w-40 text-lg text-center text-brown-bg-500";
    const headerStylesTotal = "bg-grey-bg-300 p-1.5 font-bold w-40 text-lg text-right text-brown-bg-500";

    //Table Total Styling
    const headerTotals = "p-1 px-4 py-2 font-bold opacity-80 w-40 text-center text-brown-bg-500";
    const headerSumTotals = "p-1 px-4 py-2 font-bold opacity-80 w-40 text-right text-brown-bg-500";
    const headerSumTotalsNeg = "p-1 px-4 py-2 font-bold opacity-80 w-40 text-right text-red-error-100";

    //Table Field Styling
    const fieldBtn = "bg-blue-bg-700 hover:bg-blue-bg-900 text-right text-white-font-300 font-bold py-2 px-3 rounded end-0";
    const fieldInputDesc = "min-w-[250px] bg-grey-bg-300 border border-grey-bg-300 text-black-font-500 text-m text-left rounded-lg focus:ring-blue-bg-700 focus:border-blue-bg-700 block w-full p-2 dark:bg-gray-700 dark:border-blue-bg-700 dark:placeholder-blue-bg-700 dark:text-black-font-500 dark:focus:ring-blue-500 dark:focus:border-black-font-500";
    const fieldInput = " min-w-[180px] bg-grey-bg-300 border border-grey-bg-300 text-black-font-500 text-m text-right rounded-lg focus:ring-blue-bg-700 focus:border-blue-bg-700 block w-full p-2 dark:bg-gray-700 dark:border-blue-bg-700 dark:placeholder-blue-bg-700 dark:text-blue-bg-700 dark:focus:blue-bg-700 dark:focus:border-blue-bg-700";

    return (
        <div key={props.id}>
            <Collapsible id={selectedMonth} month={month} >
                <table className="w-full text-m table-auto text-left">
                    <thead>
                        <tr>
                            <th scope="col" className={headerStylesDesc}>Description</th>
                            <th scope="col" className={headerStyles}>Income</th>
                            <th scope="col" className={headerStyles}>Savings</th>
                            <th scope="col" className={headerStyles}>Expense</th>
                            <th scope="col" className={headerStylesTotal}>Total</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td className={headerTotals}>{Number(incomeTotal).toFixed(2)}</td>
                            <td className={headerTotals}>{Number(savingTotal).toFixed(2)}</td>
                            <td className={headerTotals}>{Number(expenseTotal).toFixed(2)}</td>
                            <td className={netTotal >= 0 ? headerSumTotals : headerSumTotalsNeg}>{Number(netTotal).toFixed(2)}</td>
                            <td className="p-2 px-5 py-1 font-bold w-20 text-right"><button
                                className={fieldBtn}
                                onClick={addNewRow}>Add</button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {budgetValues.map(({ id, name, income, saving, expense }) => {
                            return (
                                <tr key={id} >
                                    <td className="whitespace-nowrap px-5 py-1 font-medium"><input
                                        className={fieldInputDesc}
                                        value={name}
                                        name="name"
                                        defaultValue={name}
                                        type="text"
                                        placeholder="Name"
                                        onChange={(event) => onChangeInput(id, event)}
                                        onKeyDown={(event) => onKeyDownInput(id, event)}
                                    /></td>
                                    <td className="whitespace-nowrap px-4 py-1"><input
                                        className={fieldInput}
                                        name="income"
                                        value={income}
                                        type="number"
                                        placeholder="0.00"
                                        onChange={(event) => onChangeInput(id, event)}
                                        onKeyDown={(event) => onKeyDownInput(id, event)}
                                    /></td>
                                    <td className="whitespace-nowrap px-4 py-1"><input
                                        className={fieldInput}
                                        name="saving"
                                        value={saving}
                                        type="number"
                                        placeholder="0.00"
                                        onChange={(event) => onChangeInput(id, event)}
                                        onKeyDown={(event) => onKeyDownInput(id, event)}
                                    /></td>
                                    <td className="whitespace-nowrap px-4 py-1"><input
                                        className={fieldInput} name="expense"
                                        value={expense}
                                        type="number"
                                        placeholder="0.00"
                                        onChange={(event) => onChangeInput(id, event)}
                                        onKeyDown={(event) => onKeyDownInput(id, event)}
                                    /></td>
                                    <td className="text-right">
                                        <button
                                            className={fieldBtn}
                                            onClick={() => removeRow(id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Collapsible>
        </div >
    )
}

export default BudgetPlanner;