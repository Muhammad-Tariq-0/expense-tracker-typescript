import { type } from "os";

export type transac = {
    transactions: transactiontype[],
    addTrans: (el:transactiontype)=> void
    deleteTrans: (id:number)=> void
}

export type transactiontype = {
    id: number,
    desc: string,
    amount: number
}

export type Actions={
    type: 'ADD_TRANS'
    payload: transactiontype
} | {
    type: 'DELETE_TRANS'
    payload: number
}