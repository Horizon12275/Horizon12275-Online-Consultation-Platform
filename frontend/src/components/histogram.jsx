import React from 'react';
import { Column } from '@ant-design/plots';

export default function Histogram() {
    const data = [
        {
            type: '1星',
            "评分数": 10,
        },
        {
            type: '2星',
            "评分数": 20,
        },
        {
            type: '3星',
            "评分数": 30,
        },
        {
            type: '4星',
            "评分数": 40,
        },
        {
            type: '5星',
            "评分数": 50,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: '评分数',
        style: { fill: '#acafaf' },
        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        height: 300, // 设置柱状图的高度
    };
    return (
        <div style={{ width: '100%', aspectRatio: 1 / 1 }}>
            <Column {...config} />
        </div>
    );
}
