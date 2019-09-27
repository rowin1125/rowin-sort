import React from 'react';

import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { GenStyles } from '../styles';

const index = ({ setNum, genArray, setAlgoBtnState, num, btnState }) => {
  const classes = GenStyles();

  return (
    <Grid item xs={6}>
      <TextField
        id='standard-number'
        label='How many in array (max 150)'
        value={num}
        onChange={() => setNum(Number(event.target.value))}
        type='phone'
        className={classes.textField}
        margin='normal'
        min={1}
        onKeyPress={() => {
          genArray();
          setAlgoBtnState(false);
          console.log('keypress');
        }}
        disabled={btnState}
        style={{ paddingTop: '24px' }}
      />
      <Button
        variant='contained'
        className={classes.button}
        onClick={() => {
          setAlgoBtnState(false);
          genArray();
        }}
        disabled={btnState}
      >
        Set Array
      </Button>
    </Grid>
  );
};

export default index;
