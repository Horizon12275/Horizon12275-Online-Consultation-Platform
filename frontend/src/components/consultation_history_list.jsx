import React, { useState } from 'react'
import ConsultationHistoryCard from './consultation_history_card'
import { Button, Divider, Row } from 'antd'
import { CommentOutlined } from '@ant-design/icons'

export default function ConsultationHistoryList() {
    const [n, setN] = useState(3);

    const handleClick = () => {
        if (n === 3) {
            setN(6);
        } else {
            setN(3);
        }
    }

    return (
        <div style={{ width: '100%' }}>
            <Row justify="center" style={{ marginTop: '30px' }}>
                <h1>历史记录</h1>
            </Row>
            <Divider />
            {Array(n).fill().map((_, index) => (
                <React.Fragment key={index}>
                    <ConsultationHistoryCard />
                    {index !== n - 1 && <Divider />}
                </React.Fragment>
            ))}
            <Divider />
            <Row justify="center" style={{ marginTop: '30px' }}>
                <Button type="primary" onClick={handleClick} hoverable>
                    <Row align="middle">
                        <CommentOutlined style={{ marginRight: '20px' }} />
                        <h3>所有聊天</h3>
                    </Row>
                </Button>
            </Row>
        </div>
    )
}