import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

export default function Histogram() {
    const data = [
        {
            type: '1星',
            value: 10,
        },
        {
            type: '2星',
            value: 20,
        },
        {
            type: '3星',
            value: 30,
        },
        {
            type: '4星',
            value: 40,
        },
        {
            type: '5星',
            value: 50,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        style: { fill:'#acafaf'},
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: '评分',
            },
            value: {
                alias: '个数',
            },
        },
    };
    return <Column {...config} />;
}