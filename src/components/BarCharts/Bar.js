import React from 'react';
import RectBar from './RectBar';
import { getRandomColor } from '../helpers/getRandomColor';
import { yMid } from '../helpers/GlobalVariables';

const Bar = ({ amount, heighest }) => {
  let widthScale = amount => (amount / heighest) * 100;
  let width = widthScale(amount);

  return (
    <g className={`bar-group color-${amount}`}>
      <RectBar width={width} />
      <text
        className='value-label'
        x={`${width - 1}% `}
        y={yMid}
        alignmentBaseline='middle'
      >
        {amount}
      </text>
    </g>
  );
};

export default Bar;
