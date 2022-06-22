

import React from "react";
//import {useForm} from "react-hook-form";

const TransReducer = ((state, action) =>{
    switch(action.type){
        case "ADD TRANSACTION":{
           return[action.payload,...state]
        }
        default:
        return state
    }
});

export default TransReducer;