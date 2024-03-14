import React from 'react';
import { Flex, Radio } from 'antd';

export default function RadioSort() {
    return (
        <Flex horizontal gap="middle" align='center'>
            <h3>Sort by</h3>
            <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">价格</Radio.Button>
                <Radio.Button value="b">好评度</Radio.Button>
            </Radio.Group>
        </Flex>
    )
}
