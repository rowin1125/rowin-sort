import React from 'react';

import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

import { sleep } from '../../../sort/bubbleSort';
import { GenStyles } from '../styles';

const index = ({
  algoBtnState,
  btnState,
  genArray,
  num,
  reset,
  setReset,
  setAlgoBtnState,
  setBtnState,
  setNum
}) => {
  const classes = GenStyles();
  const isDone = algoBtnState;
  const toBig = () => {
    if (num > 150) {
      setAlgoBtnState(true);
      return true;
    }
  };

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
        error={toBig()}
        onKeyPress={() => {
          sleep(300);
          console.log('hi');
          genArray();
          setAlgoBtnState(false);
        }}
        disabled={reset || btnState}
        style={{ paddingTop: '24px' }}
        aria-describedby='component-error-text'
      />
      {toBig() && (
        <FormHelperText
          style={{ paddingLeft: '8px', marginBottom: '16px' }}
          id='component-error-text'
        >
          Error
        </FormHelperText>
      )}
      {!isDone ? (
        <Button
          variant='contained'
          className={classes.button}
          onClick={() => {
            setAlgoBtnState(false);
            genArray();
          }}
          disabled={toBig() || btnState}
        >
          Shuffle Array
        </Button>
      ) : (
        <Button
          variant='contained'
          className={classes.button}
          onClick={() => {
            setAlgoBtnState(false);
            genArray();
            setNum(0);
            setBtnState(false);
            setReset(false);
          }}
          disabled={toBig() || btnState}
        >
          Reset it
        </Button>
      )}
    </Grid>
  );
};

export default index;
