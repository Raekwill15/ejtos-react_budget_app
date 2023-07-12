import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);

    const handleCurrency = (symbol) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: symbol
        })
    }

    return (
    <div className='alert alert-warning'>
        <label for="dog-names">Currency: </label> 
        <select className='' onChange={(event) => {handleCurrency(event.target.value)}} name="dog-names" id="dog-names"> 
            <option className='alert alert-warning' value="$">$ Dollar</option> 
            <option className='alert alert-warning' value="£">£ Pound</option> 
            <option className='alert alert-warning'value="€">€ Euro</option> 
            <option className='alert alert-warning' value="₹">₹ Ruppee</option> 
        </select>
    </div>
    )

}

export default Currency;