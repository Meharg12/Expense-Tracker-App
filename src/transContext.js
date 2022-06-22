


import { createContext, useReducer } from "react"
import TransReducer from "./transReducer";



const initialtransactions =[
    {amount :+700 , desc:"Cash"},
    {amount :-40 , desc:"Book"},
    {amount :-200 , desc:"Camera"},
    {amount :-70 , desc:"cold drink"},
    {amount :-700 , desc:"biryani"},
]

export const TransactionContext = createContext(initialtransactions);


export const TransactionProvider = ({children}) =>{
    let [state, dispatch] = useReducer(TransReducer,initialtransactions)
    function addTransaction(transobj){
        dispatch({
            type :"ADD TRANSACTION",
            payload: {
                amount :transobj.amount , 
                desc:"transobj.desc"
            },
        })
    }
    return(
        <TransactionContext.Provider value={{
            transactions :state,
            addTransaction
        }} >
          {children}
        </TransactionContext.Provider>
    )
}