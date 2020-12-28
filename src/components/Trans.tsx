import React, { useContext, useState } from 'react';
import {
  createStyles,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Contexthook from '../hooks/Contexthook';
import '../App.css'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);


export default function Trans() {
  const classes = useStyles();
const {addTrans} = useContext(Contexthook);
const [desc, setdesc] = useState('');
const [amount, setamount] = useState(0);


const SubmitHandler=(el:any)=> {
  el.preventDefault();
 const transRec = {
   id: Math.floor(Math.random()*10000), 
   desc,
   amount : +amount
 }
 addTrans(transRec);
setdesc('');
setamount(0);
}
  return (
    
    <div>
     <h2 className="transhead">Add Transaction</h2>
    <form onSubmit={SubmitHandler}>
      
        <h3>Add Transaction</h3>
        <input 
          type="text"
          value={desc}
          onChange = {el=>setdesc(el.target.value)}
        />
        <br/>
        <h3>Enter Amount</h3>
         <input
          type="number"
          value={amount}
          onChange={el=>setamount(el.target.valueAsNumber)}
        />
   

<div className="head">
  <h5>place minus sign (-) with expense</h5>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        type='submit'
      >
        Save
      </Button>
      </div>
    </form>
    </div>
  );
}



























