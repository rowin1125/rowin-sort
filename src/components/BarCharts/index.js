import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import Bars from './Bars';
import './bar.scss';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  button: {
    maxWidth: 'fit-content',
    backgroundColor: '#f589bb',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: '#f589bb'
    }
  }
}));

const dummyData = [20, 40, 35, 50, 55, 40, 99];

const index = () => {
  const classes = useStyles();
  const [data, setData] = useState(dummyData);
  const [num, setNum] = useState(7);

  const genArray = () =>
    setData(
      Array.from({ length: num }, () =>
        Math.floor(Math.random() * (1 - num * 10) + num * 10)
      )
    );

  return (
    <div className='flex-column'>
      <TextField
        id='standard-number'
        label='How many in array (max 45)'
        value={num}
        onChange={() => setNum(Number(event.target.value))}
        type='number'
        className={classes.textField}
        margin='normal'
      />
      <Button
        variant='contained'
        className={classes.button}
        onClick={() => genArray()}
      >
        Set Array
      </Button>

      <svg width='80vw' height='80vh'>
        <g className='container'>
          <text className='title' x='10' y='30'>
            Your Array
          </text>
          <g className='chart' transform='translate(100,60)'>
            <Bars data={data} />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default index;
