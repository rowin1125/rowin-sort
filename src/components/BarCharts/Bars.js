import React from 'react';
import { getRandomColor } from '../helpers/getRandomColor';

const Bars = ({ data }) => {
  const BarGroup = barData => {
    let barPadding = 2;
    let barColour = getRandomColor();
    let widthScale = d => d * 5;

    let width = widthScale(barData.d);
    let yMid = barData.barHeight * 0.5;

    return (
      <g className='bar-group'>
        <rect
          y={barPadding * 0.5}
          width={width}
          height={barData.barHeight - barPadding}
          fill={barColour}
        />
        <text
          className='value-label'
          x={width - 8}
          y={yMid}
          alignmentBaseline='middle'
        >
          {barData.d}
        </text>
      </g>
    );
  };

  let barHeight = 15;

  return (
    <>
      {data &&
        data.map((d, i) => (
          <g key={i} transform={`translate(0, ${i * barHeight})`}>
            <BarGroup d={d} barHeight={barHeight} />
          </g>
        ))}
    </>
  );
};

export default Bars;
