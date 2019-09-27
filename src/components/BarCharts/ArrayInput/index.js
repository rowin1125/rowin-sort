import React from 'react';

import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { Button, Grid } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import { GenStyles } from '../styles';

const index = ({ setNum, genArray, setAlgoBtnState, num, btnState }) => {
  const classes = GenStyles();
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
        disabled={btnState}
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
      <Button
        variant='contained'
        className={classes.button}
        onClick={() => {
          setAlgoBtnState(false);
          genArray();
        }}
        disabled={toBig() || btnState}
      >
        Set Array
      </Button>
    </Grid>
  );
};

export default index;
