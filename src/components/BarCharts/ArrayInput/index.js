import React from 'react';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { Button, Grid } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import { GenStyles } from '../styles';

const index = ({
  algoBtnState,
  btnState,
  genArray,
  num,
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
          genArray();
          setAlgoBtnState(false);
        }}
        disabled={algoBtnState || btnState}
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
