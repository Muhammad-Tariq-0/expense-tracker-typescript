import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Table } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
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
      
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export default function History() {
  const classes = useStyles();
const {transactions} = useContext(Contexthook);
const {deleteTrans} = useContext(Contexthook);
return(
  <div className={classes.root}>
    <br/><br/>
      <Grid container spacing={3}>

       {/* Balance Part  */}
       {/* <Balance/> */}


     {/* History Part */}
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
          <h2>Transaction History</h2>
          <Table className="sizetrans">
               {transactions.map(el=>(
                <ul className="trans" key={el.id}><strong className="namecen">{el.desc}</strong>
           <strong>{el.amount} 
          <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon onClick={()=>deleteTrans(el.id)}/>
        </IconButton> 
          </strong></ul> 
               ))}


         </Table>
          </Paper>
        </Grid>

      </Grid>

    </div>
  );
}
