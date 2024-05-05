import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const DropdownMenu = () => {
    const [selectedOption, setSelectedOption] = useState('Recent Week');

    const handleMenuClick = (e) => {
        setSelectedOption(e.key);
    };

    const menu = (
        <Menu onClick={handleMenuClick} style={{ fontSize: '14px' }}>
            <Menu.Item key="Recent Week">Recent Week</Menu.Item>
            <Menu.Item key="Recent Month">Recent Month</Menu.Item>
            <Menu.Item key="Recent Year">Recent Year</Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <div style={{
                border: '2px solid blue',
                borderRadius: '12px',
                padding: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                position: 'relative',
                color: 'black'
            }}>
                <span style={{ marginRight: '8px' }}>{selectedOption}</span>
                <DownOutlined style={{ fontSize: '16px', marginLeft: '8px' }} />
            </div>
        </Dropdown>
    );
};

export default DropdownMenu;