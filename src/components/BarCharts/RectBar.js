import React from 'react';
import { getRandomColor } from '../helpers/getRandomColor';
import { barHeight, barPadding } from '../helpers/GlobalVariables';

const RectBar = ({ width }) => {
  const barColour = getRandomColor();

  return (
    <rect
      y={barPadding * 0.5}
      width={`${width}%`}
      height={barHeight - barPadding}
      // fill={barColour}
    />
  );
};

export default RectBar;
