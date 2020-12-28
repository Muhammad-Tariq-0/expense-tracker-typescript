import { Actions, transactiontype } from "../types/Datatypes";

const Reducerhook = ((state:{transactions:transactiontype[]},action:Actions) => {
   switch (action.type) {
       case 'ADD_TRANS':
           return{
               transactions: [...state.transactions,action.payload],
           }
           case 'DELETE_TRANS': 
           return{
               transactions: state.transactions.filter(el=> el.id !== action.payload)
           }
       default:
           return state;
   }
})

export default Reducerhook;
