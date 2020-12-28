import React,{useContext} from 'react';
import {Bar} from 'react-chartjs-2';
import Contexthook from '../hooks/Contexthook';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: '200px',
     maxWidth:'600px',
     margin: 'auto'
    },
  }),
);
export default function BalanceChart(){
  const classes = useStyles();
  const {transactions} = useContext(Contexthook);
  const amount:any[] = transactions.map((el:any) => el.amount);
const total_bal = amount.reduce((ex_bal:number,curr_bal:number)=>(ex_bal+=curr_bal),0).toFixed(2);
const total_inc = amount.filter((el:number)=> el>0).reduce((ex_inc:number,curr_inc:number)=>(ex_inc+=curr_inc),0).toFixed(2);
const total_exp = (amount.filter((el:number)=>el<0).reduce((ex_exp:number,curr_exp:number)=>(ex_exp+=curr_exp),0)*-1).toFixed(2);
    return (
      <div>
        <h2 className="transhead">Balance Chart</h2>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Bar
          data={{
            labels: ['Total Balance', 'Total Income', 'Total Expense'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [total_bal,total_inc,total_exp]
              }
            ]
          }}
          width={100}
          height={100}
          options={{
            maintainAspectRatio: false
          }}
        />
          </Paper>
        </Grid>
       
      </div>
    );
  }
