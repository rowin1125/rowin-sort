import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import { bubbleSort } from '../../sort/bubbleSort';
import { shuffleArr } from '../helpers/shuffleArr';

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
    width: '90%',
    '& label': {
      textShadow: 'unset',
      fontSize: '20px',
      paddingBottom: '8px',
      color: 'black',
      fontWeight: '500'
    }
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200,
    '& ul': {
      backgroundColor: '#cdaadd'
    }
  },
  button: {
    maxWidth: 'auto',
    backgroundColor: '#b759e2',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: '#b759e2'
    }
  }
}));

const algoritmes = ['bubbleSort', 'def', 'ghi', 'jkl', 'mno'];

const index = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [algo, setAlgo] = useState('bubbleSort');
  const [num, setNum] = useState(7);
  const [btnState, setBtnState] = useState(false);
  const arrayGap = 9;

  console.log('btnState', btnState);

  useEffect(() => {
    genArray();
  }, [num]);

  const genArray = () =>
    setData(shuffleArr(Array.from({ length: num }, (_, i) => i + arrayGap)));

  const vheight = () => {
    if (num < 55) {
      return '90vh';
    } else if (num >= 55 && num < 80) {
      return '100vh';
    } else if (num >= 80 && num < 120) {
      return '120vh';
    } else return '200vh';
  };

  return (
    <div className='flex-column' justify='center' style={{ display: 'flex' }}>
      <Grid container direction='row'>
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
            onKeyPress={() => genArray()}
            disabled={btnState}
            style={{ paddingTop: '24px' }}
          />
          <Button
            variant='contained'
            className={classes.button}
            onClick={() => genArray()}
            disabled={btnState}
          >
            Set Array
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='standard-number'
            label='Select algorithm'
            value={algo}
            onChange={e => setAlgo(e.target.value)}
            type='phone'
            className={classes.textField}
            margin='normal'
            min={1}
            style={{ paddingTop: '24px' }}
            disabled={btnState}
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
            disabled={btnState}
            onClick={async () => {
              await setBtnState(true);
              await bubbleSort(data);
              await setBtnState(false);
            }}
          >
            Start algorithm
          </Button>
        </Grid>
      </Grid>

      <svg width='100%' height={vheight()}>
        <g className='container'>
          <text className='title' x='10' y='30'>
            Your Array
          </text>
          <g className='chart' transform='translate(0,60)'>
            <Bars data={data} />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default index;
