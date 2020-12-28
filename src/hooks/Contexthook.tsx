import React, { createContext, useReducer } from 'react'
import { transac,transactiontype } from '../types/Datatypes';
import  Reducerhook  from './Reducerhook';
const initialTrans:transac = {
    transactions: [
    ],
           addTrans(){},
           deleteTrans(){}
}
const Contexthook = createContext(initialTrans);
export default Contexthook; 

export const ContexthookProvider = ({children}:any) => {
    const [state, dispatch] = useReducer(Reducerhook,initialTrans);
 
    function addTrans(trans:transactiontype) {
        dispatch({
            type: 'ADD_TRANS',
            payload: trans
        })
        console.log(addTrans);
      }
      function deleteTrans(id:number) {
          dispatch({
              type: 'DELETE_TRANS',
              payload: id
          })
      }
    return (
        <Contexthook.Provider value= {{transactions: state.transactions,addTrans,deleteTrans}}>
            {children}
        </Contexthook.Provider>
    )

    }
