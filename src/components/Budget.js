import React, {useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency}  = useContext(AppContext);
    
    const totalspent = expenses.reduce((total,item) => {
        return (total += item.cost);
    }, 0)

    const updatebudget = (newBudget) => {
        if (newBudget>20000) alert("The budget cannot exceed 20,000.");
        else 
        if (newBudget < totalspent) alert("You cannot reduce the budget value lower than whats already being spent.");
        else dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        })
    }


    return (
        <div className = 'alert alert-secondary'>
            <span> Budget: {currency}<input type='number' step='10' value={budget} onChange={(event) => updatebudget(event.target.value)}></input></span>
        </div>
    );
};

export default Budget;