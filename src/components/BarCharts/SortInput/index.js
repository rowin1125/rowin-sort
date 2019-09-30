import React, { useState } from 'react';
import { Button, Grid } from '@material-ui/core';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { bubbleSort } from '../../../sort/bubbleSort';
import { mergeSort } from '../../../sort/mergeSort';
import { GenStyles } from '../styles';

const index = ({
  algoBtnState,
  data,
  num,
  setReset,
  setAlgoBtnState,
  setBtnState
}) => {
  const classes = GenStyles();
  const [algo, setAlgo] = useState('bubbleSort');

  const algoritmes = ['bubbleSort', 'mergeSort', 'ghi', 'jkl', 'mno'];

  const currentSortFunction = () => {
    switch (algo) {
      case 'bubbleSort':
        console.log('buubl');
        bubbleSort(data);
        break;
      case 'mergeSort':
        mergeSort(data);
        break;

      default:
    }
  };

  const startSorting = async () => {
    await setAlgoBtnState(true);
    await setReset(true);
    await setBtnState(true);
    await currentSortFunction();
    await setBtnState(false);
  };

  return (
    <Grid item xs={6}>
      <TextField
        id='standard-number'
        label='Select algorithm'
        value={algo}
        onChange={e => {
          setAlgo(e.target.value);
        }}
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
        disabled={algoBtnState || num === 0}
        onClick={() => startSorting()}
      >
        Start algorithm
      </Button>
    </Grid>
  );
};

export default index;
