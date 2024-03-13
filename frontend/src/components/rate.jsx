import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const RateButton = () => {
    const [value, setValue] = useState(3);
    return (
        <Flex gap="middle" vertical align='center' style={{ marginTop: '30px', margin: '20px' }}>
            <h1>评价评分</h1>
            <Rate tooltips={desc} onChange={setValue} value={value} />
        </Flex>
    );
};
export default RateButton;