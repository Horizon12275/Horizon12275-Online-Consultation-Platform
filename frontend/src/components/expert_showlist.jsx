import React, { useContext } from 'react';
import { List, Space } from 'antd';
import ExpertShowCard from './expert_showcard';
//import SearchContext from '../context/SearchContext';

export default function ExpertShowList() {
    //const { searchValue } = useContext(SearchContext);
    //console.log('searchValue:', searchValue);
    //const filteredExperts = experts.filter(expert => expert.title.toLowerCase().includes(searchValue.toLowerCase()));

    

    return (
        <div style={{
            width: "60%",
            margin: "0 auto",
            marginTop: '16px'
        }}>
            <Space direction="vertical" style={{ width: "100%" }}>
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
                    dataSource={filteredExperts}
                    renderItem={(item) => (
                        <List.Item style={{ display: 'flex', justifyContent: 'center' }}>
                            <ExpertShowCard expert={item} />
                        </List.Item>
                    )}
                />
            </Space>
        </div>
    )
}