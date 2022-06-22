

import React, { useContext, useState } from 'react';
import {TransactionContext} from './transContext'

function Child() {
   
    //let {transactions, addTransaction} = useContext(TransactionContext);
    let transactions= useContext(TransactionContext);
    let addTransaction= useContext(TransactionContext);
        // let transactions =[
    //     {amount :+500 , desc:"Cash"},
    //     {amount :-40 , desc:"Book"},
    //     {amount :-200 , desc:"Camera"},
    // ]
 
    let [newDesc, setDesc] =useState("");
    let [newAmount, setAmount] =useState(0);

 const handleAddition =(event) =>{
     event.preventDefault();
     addTransaction({
         amount : newAmount,
         desc: newDesc,
     })
 }


    return (
        <div className="container">
            <h1>Expense Tracker</h1>

            <h3> Your Balance <br /> $260.00</h3>

            <div className="expense-container">
                <h2> Income  <br /> $5000.00</h2>
                <h2> Expense <br /> $240.00</h2>
            </div>
            {/* HISTORY PART STARTS FROM HERE */}
            <h3> History </h3>
            <hr />
            
            <ul className='transaction-list'>
             {transactions.map((transobj,index)=>{
                 return(
                    <li>
                    <span>{transobj.desc}</span>
                    <span>{transobj.amount}</span>
                </li>
                 )
             })}

            </ul>

            {/* TRANSACTION PART STARTS FROM HERE */}
            <h3> Add New Transactions </h3>
            <hr />


            <form className='transaction-form' onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                     <input type="text" onChange={(ev)=>setDesc(ev.target.value)} required />
                </label>

                <label>
                    <br /> Enter Amount <br />
                     <input type="number" onChange={(ev)=>setAmount(ev.target.value)}  required />
                </label>
                <br /> <input type="submit" value="Add Transaction " />
            </form>

        </div>
    );
}

export default Child;