import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Contexthook from '../hooks/Contexthook';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderLeft: '4px solid green',
      borderRight: '4px solid green',
  
    },
    paper1: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderTop: '4px solid red',
      backgroundColor:'cyan'
    },
  }),
);

export default function Balance() {
  const classes = useStyles();
  const {transactions} = useContext(Contexthook);
const amount:any[] = transactions.map((el:any) => el.amount);
const total_bal = amount.reduce((ex_bal:number,curr_bal:number)=>(ex_bal+=curr_bal),0).toFixed(2);
const total_inc = amount.filter((el:number)=> el>0).reduce((ex_inc:number,curr_inc:number)=>(ex_inc+=curr_inc),0).toFixed(2);
const total_exp = (amount.filter((el:number)=>el<0).reduce((ex_exp:number,curr_exp:number)=>(ex_exp+=curr_exp),0)*-1).toFixed(2);
return(
  <div className={classes.root}>
      <br/>
    
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Paper className={classes.paper1}>
            <h3>Total Balance</h3>
            <h2>{total_bal}</h2>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
          <h3>Income</h3>
            <h2>{total_inc}</h2>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>
          <h3>Expense</h3>
          <h2>{total_exp}</h2>
          </Paper>
        </Grid>
        {/* <Grid item xs={6} sm={7}>
          <Paper className={classes.paper}>
         <BalanceChart/>
          </Paper>
        </Grid> */}
        {/* <Trans/> */}
      </Grid>
     
    </div>
  );
}
