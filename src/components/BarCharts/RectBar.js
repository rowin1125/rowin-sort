import React from 'react';
import { barHeight, barPadding } from '../helpers/GlobalVariables';

const RectBar = ({ width }) => (
  <rect
    y={barPadding * 0.5}
    width={`${width}%`}
    height={barHeight - barPadding}
  />
);

export default RectBar;
