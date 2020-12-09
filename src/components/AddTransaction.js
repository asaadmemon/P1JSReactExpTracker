import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const onsubmit = e => {
        e.preventDefault(); //to prevent refresh
        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000), //to generate random ID
            text, 
            amount: +amount //to make this field numeric
        }
        addTransaction(newTransaction);
    }


    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onsubmit}>
                <div className="form-control">
                    <label >Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required/>
                </div>
                <div className="form-control">
                    <label >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                    <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
