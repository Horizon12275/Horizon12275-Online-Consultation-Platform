import React, { useState } from 'react'
import ConsultationHistoryCard from './consultation_history_card'
import { Button, Divider, Row } from 'antd'
import { CommentOutlined } from '@ant-design/icons'

export default function ConsultationHistoryList() {
    const [n, setN] = useState(2);
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
        if (n === 2) {
            setN(6);
        } else {
            setN(2);
        }
    }

    return (
        <div style={{ width: '100%' }}>
            <Row justify="center" style={{ marginTop: '10px' }}>
                <h1>历史记录</h1>
            </Row>
            
            {Array(n).fill().map((_, index) => (
                <React.Fragment key={index}>
                    <ConsultationHistoryCard />
                    
                </React.Fragment>
            ))}
            
            <Row justify="left" style={{ marginTop: '0px' }}>
                <Button  onClick={handleClick} hoverable>
                    <Row align="middle">
                        <CommentOutlined style={{ marginRight: '10px' }} />
                        <h3>{expanded? "收起聊天":"全部聊天"}</h3>
                    </Row>
                </Button>
            </Row>
        </div>
    )
}