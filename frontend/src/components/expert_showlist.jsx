import React, { useContext } from 'react';
import { List, Space, Flex } from 'antd';
import ExpertShowCard from './expert_showcard';
//import SearchContext from '../context/SearchContext';

export default function ExpertShowList() {
    //const { searchValue } = useContext(SearchContext);
    //console.log('searchValue:', searchValue);
    //const filteredExperts = experts.filter(expert => expert.title.toLowerCase().includes(searchValue.toLowerCase()));
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


    return (
        <Flex gap="middle" justify='space-around' align='center' style={{marginTop:'30px'}}>
            <Space direction="vertical" style={{ width: "80%" }}>
                <List
                    grid={{
                        gutter: 16, column: 3
                    }}
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 30,
                        style: { textAlign: 'center' },
                        showSizeChanger: false,
                        showQuickJumper: true,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <ExpertShowCard />
                        </List.Item>
                    )}
                />
            </Space>
        </Flex>
    )
}