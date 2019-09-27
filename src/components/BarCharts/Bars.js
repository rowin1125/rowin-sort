import React, { useState, useEffect } from 'react';
import Bar from './Bar';

const Bars = ({ data }) => {
  const heighest = Math.max.apply(null, data);
  const barHeight = 9;

  return (
    <>
      {data &&
        data.map((amount, i) => (
          <g
            className='tester'
            key={i}
            transform={`translate(0, ${i * barHeight + barHeight} )`}
          >
            <Bar amount={amount} barHeight={barHeight} heighest={heighest} />
          </g>
        ))}
    </>
  );
};

export default Bars;
