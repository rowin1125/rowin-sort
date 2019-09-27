import React from 'react';
import { Button, Grid } from '@material-ui/core';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { bubbleSort } from '../../../sort/bubbleSort';
import { GenStyles } from '../styles';

const index = ({
  setAlgo,
  setAlgoBtnState,
  algoBtnState,
  setBtnState,
  data,
  setData,
  algo,
  setNum
}) => {
  const algoritmes = ['bubbleSort', 'def', 'ghi', 'jkl', 'mno'];
  const classes = GenStyles();

  return (
    <Grid item xs={6}>
      <TextField
        id='standard-number'
        label='Select algorithm'
        value={algo}
        onChange={e => setAlgo(e.target.value)}
        onKeyDown={() => setAlgoBtnState(false)}
        type='phone'
        className={classes.textField}
        margin='normal'
        min={1}
        style={{ paddingTop: '24px' }}
        disabled={algoBtnState}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        select
      >
        {algoritmes.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      <Button
        variant='contained'
        className={classes.button}
        disabled={algoBtnState}
        onClick={async () => {
          await setAlgoBtnState(true);
          await setBtnState(true);
          await bubbleSort(data, setData, setNum);
          await setBtnState(false);
        }}
      >
        Start algorithm
      </Button>
    </Grid>
  );
};

export default index;
