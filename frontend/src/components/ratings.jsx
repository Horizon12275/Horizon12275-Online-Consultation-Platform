import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';

const Rating = () => {
  const data = [
    {
      rate:"1星",
        count: 100
    },
    {
      rate:"2星",
        count: 22
    },
    {
      rate:"3星",
        count: 30
    },
    {
      rate:"4星",
        count: 46
    },
    {
      rate:"5星",
        count: 150
    }
  ];
  const config = {
    data,
    height: 300,
    xField: 'rate',
    yField: 'count',
    legend: {
      position: 'left',
    },
    style: {
        fill: 'orange',
        fillOpacity: 0.8,
        
        lineWidth: 0.5,
        lineDash: [4, 5],
        strokeOpacity: 0.7,
        //shadowColor: 'black',
        //shadowBlur: 10,
        shadowOffsetX: 5,
        shadowOffsetY: 5,
        cursor: 'pointer'
      }
  };
  return <div><Bar {...config} /></div>;
};

export default Rating;