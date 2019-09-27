import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import ArrayInput from './ArrayInput';
import SortInput from './SortInput';
import { shuffleArr } from '../helpers/shuffleArr';
import { SpeechBubble } from 'react-kawaii';

import Bars from './Bars';
import './bar.scss';

const index = () => {
  const [data, setData] = useState([]);
  const [algo, setAlgo] = useState('bubbleSort');
  const [num, setNum] = useState(0);
  const [btnState, setBtnState] = useState(false);
  const [algoBtnState, setAlgoBtnState] = useState(false);

  const arrayGap = 9;
  const showCat = num === 0 ? true : false;

  const genArray = () =>
    setData(shuffleArr(Array.from({ length: num }, (_, i) => i + arrayGap)));

  useEffect(() => {
    genArray();
  }, [num]);

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
        <ArrayInput
          setNum={setNum}
          genArray={genArray}
          setAlgoBtnState={setAlgoBtnState}
          num={num}
          btnState={btnState}
        />
        <SortInput
          setAlgo={setAlgo}
          setAlgoBtnState={setAlgoBtnState}
          algoBtnState={algoBtnState}
          setBtnState={setBtnState}
          data={data}
          setData={setData}
          algo={algo}
          setNum={setNum}
        />
      </Grid>
      <Grid container direction='row' className='speech '>
        {showCat ? (
          <>
            <SpeechBubble mood='shocked' color='#07c2d0' />
            <h3>Please prove the arrow of a number bellow 150 🤓</h3>
          </>
        ) : (
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
        )}
      </Grid>
    </div>
  );
};

export default index;
